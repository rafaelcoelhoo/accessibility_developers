import express from 'express';
import {notes} from '../data/otherVisualConsiderations/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';

const router = express.Router();

router.get('/reduce-motion', function (req, res) {
  const title = 'Reduce motion';
  res.render('otherVisualConsiderations/reduceMotion', {title, notes: getDataByKey('reduceMotion', notes), breadcrumb: buildBreadcrumb('', req.path, title)});
});

router.get('/dark-mode', function (req, res) {
  const title = 'Dark mode';
  res.render('otherVisualConsiderations/darkMode', {title, notes: getDataByKey('darkMode', notes), breadcrumb: buildBreadcrumb('', req.path, title)});
});

router.get('/target-size', function (req, res) {
  const title = 'Target size';
  res.render('otherVisualConsiderations/targetSize', {title, notes: getDataByKey('targetSize', notes), breadcrumb: buildBreadcrumb('', req.path, title)});
});

router.get('/zoom/mobile', function (req, res) {
  const title = 'Zoom mobile';
  res.render('otherVisualConsiderations/zoom/zoomMobile', {title, notes: getDataByKey('zoom', notes), breadcrumb: buildBreadcrumb('zoom', req.path, title)});
});

router.get('/zoom/scaling', function (req, res) {
  const title = 'Zooming versus Scaling';
  res.render('otherVisualConsiderations/zoom/scaling', {title, notes: getDataByKey('zoomScaling', notes), breadcrumb: buildBreadcrumb('zoom', req.path, title)});
});

export {router as otherVisualConsiderationsRouter};
