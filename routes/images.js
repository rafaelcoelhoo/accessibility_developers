import express from 'express';
import {notes} from '../data/images/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';

const router = express.Router();

router.get('/decorative', function (req, res) {
  const title = 'Decorative Images';
  res.render('imagesAndSVG/images/decorativeImages', {title, notes: getDataByKey('decorativeImages', notes), breadcrumb: buildBreadcrumb('images', req.path, title)});
});

router.get('/informative', function (req, res) {
  const title = 'Informative Images';
  res.render('imagesAndSVG/images/informativeImages', {title, notes: getDataByKey('informativeImages', notes), breadcrumb: buildBreadcrumb('images', req.path, title)});
});

router.get('/clickable', function (req, res) {
  const title = 'Clickable Images';
  res.render('imagesAndSVG/images/clickableImages', {title, notes: getDataByKey('clickableImages', notes), breadcrumb: buildBreadcrumb('images', req.path, title)});
});

router.get('/complex', function (req, res) {
  const title = 'Complex Images';
  res.render('imagesAndSVG/images/complexImages', {title, notes: getDataByKey('', notes), breadcrumb: buildBreadcrumb('images', req.path, title)});
});

router.get('/text', function (req, res) {
  const title = 'Images of text';
  res.render('imagesAndSVG/images/imagesOfText', {title: title, notes: getDataByKey('imagesOfText', notes), breadcrumb: buildBreadcrumb('images', req.path, title)});
});

router.get('/long-description', function (req, res) {
  res.render('imagesAndSVG/images/longDescription', {layout: false});
});

export {router as ImagesRouter};
