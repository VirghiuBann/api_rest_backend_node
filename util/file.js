const path = require('path');
const fs = require('fs');

const deleteImage = (filePath) => {
  filePath = path.join(__dirname, '..', 'images');
  fs.unlink(filePath, (err) => {
    console.log(err);
  });
};

exports.deleteImage = deleteImage;
