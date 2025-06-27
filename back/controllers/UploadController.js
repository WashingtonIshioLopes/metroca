const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

exports.uploadImage = [
  upload.single('file'),
  (req, res) => {
    res.json({ url: `/uploads/${req.file.filename}` });
  }
];