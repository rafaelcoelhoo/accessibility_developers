import express from 'express';
import {getDataByKey} from '../data/images/notes.js';


const router = express.Router();

router.get('/decorative', function (req, res) {
  res.render('imagesAndSVG/images/decorativeImages', {title: "Decorative Images", notes: getDataByKey('decorativeImages')});
});

router.get('/informative', function (req, res) {
  res.render('imagesAndSVG/images/informativeImages', {title: "Informative Images", notes: getDataByKey('informativeImages')});
});

router.get('/clickable', function (req, res) {
  res.render('imagesAndSVG/images/clickableImages', {title: "Clickable Images", notes: getDataByKey('clickableImages')});
});

router.get('/complex', function (req, res) {
  res.render('imagesAndSVG/images/complexImages', {title: "Complex Images", notes: getDataByKey('')});
});

router.get('/text', function (req, res) {
  res.render('imagesAndSVG/images/imagesOfText', {title: "Images of text", notes: getDataByKey('')});
});

router.get('/long-description', function (req, res) {
  res.render('imagesAndSVG/images/longDescription', {layout: false});
});

export {router as ImagesRouter};
