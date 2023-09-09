import express from 'express';
import {notes} from '../data/images/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';

const router = express.Router();

router.get('/image-src', function (req, res) {
  const title = 'SVG as image source';
  res.render('imagesAndSVG/SVG/imageSource', {title, notes: getDataByKey('svgSource', notes), breadcrumb: buildBreadcrumb('svg', req.path, title)});
});

router.get('/inline', function (req, res) {
  const title = 'Inline SVG';
  res.render('imagesAndSVG/SVG/inline', {title, notes: getDataByKey('svgInline', notes), breadcrumb: buildBreadcrumb('svg', req.path, title)});
});

export {router as SVGRouter};
