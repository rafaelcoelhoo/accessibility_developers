import express from 'express';
import {getDataByKey} from '../data/screenReaders/notes.js';


const router = express.Router();

router.get('/image-src', function (req, res) {
  res.render('imagesAndSVG/SVG/imageSource', {title: "SVG as image source", notes: getDataByKey('')});
});

router.get('/inline', function (req, res) {
  res.render('imagesAndSVG/SVG/inline', {title: "Inline SVG", notes: getDataByKey('')});
});

export {router as SVGRouter};
