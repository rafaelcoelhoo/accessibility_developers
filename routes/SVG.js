import express from 'express';
import {getDataByKey} from '../data/images/notes.js';


const router = express.Router();

router.get('/image-src', function (req, res) {
  res.render('imagesAndSVG/SVG/imageSource', {title: "SVG as image source", notes: getDataByKey('svgSource')});
});

router.get('/inline', function (req, res) {
  res.render('imagesAndSVG/SVG/inline', {title: "Inline SVG", notes: getDataByKey('svgInline')});
});

export {router as SVGRouter};
