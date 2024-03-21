const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/banner-img/'); 
    console.log("Reached multer");

  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}_${file.originalname}`); 
  },
});

const bannarImage = multer({ storage });

module.exports ={

    bannarImage
}

    