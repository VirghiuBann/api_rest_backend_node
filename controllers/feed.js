const { validationResult } = require('express-validator');

exports.getPost = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post api.',
        imageUrl: 'images/duck.jpg',
        creator: {
          name: 'Max',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: 'Error validate', errors: errors.array() });
  }

  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: 'Create successfully',
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: {
        name: 'Matt',
      },
      createdAt: new Date(),
    },
  });
};
