const Post = require('../models/Post');
const { validationResult } = require('express-validator');

exports.getPosts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 10, 50);
    const skip = (page - 1) * limit;

    const { search, category } = req.query;
    const filter = {};
    if (search) filter.$or = [
      { title: new RegExp(search, 'i') },
      { content: new RegExp(search, 'i') }
    ];
    if (category) filter.categories = category;

    const total = await Post.countDocuments(filter);
    const posts = await Post.find(filter)
      .populate('author', 'username')
      .populate('categories', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    res.json({ page, total, pages: Math.ceil(total/limit), posts });
  } catch (err) { next(err); }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username email')
      .populate('categories', 'name');

    if (!post) return res.status(404).json({ message: 'Not found' });
    res.json(post);
  } catch (err) { next(err); }
};

exports.createPost = async (req, res, next) => {
  try {
    const errors = validationResult(req); if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { title, content, categories } = req.body;
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : undefined;

    const post = new Post({
      title,
      content,
      excerpt: content.substring(0, 200),
      author: req.user.id,
      categories: categories ? (Array.isArray(categories) ? categories : [categories]) : [],
      featuredImage
    });

    await post.save();
    const populated = await post.populate('author', 'username').execPopulate();
    res.status(201).json(populated);
  } catch (err) { next(err); }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Not found' });
    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const { title, content, categories } = req.body;
    if (req.file) post.featuredImage = `/uploads/${req.file.filename}`;
    if (title) post.title = title;
    if (content) post.content = content;
    if (categories) post.categories = Array.isArray(categories) ? categories : [categories];

    await post.save();
    res.json(post);
  } catch (err) { next(err); }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Not found' });
    if (post.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await post.remove();
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
