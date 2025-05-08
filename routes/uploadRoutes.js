const express = require('express');
const multer = require('multer');
const Router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

Router.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});
module.exports = Router;