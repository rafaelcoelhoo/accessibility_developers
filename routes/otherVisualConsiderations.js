import express from 'express';
import {getDataByKey} from '../data/otherVisualConsiderations/notes.js';


const router = express.Router();

router.get('/reduce-motion', function (req, res) {
  res.render('otherVisualConsiderations/reduceMotion', {title: "Reduce motion", notes: getDataByKey('')});
});

router.get('/dark-mode', function (req, res) {
  res.render('otherVisualConsiderations/darkMode', {title: "Dark mode", notes: getDataByKey('')});
});

router.get('/target-size', function (req, res) {
  res.render('otherVisualConsiderations/targetSize', {title: "Target size", notes: getDataByKey('')});
});

router.get('/text-spacing', function (req, res) {
  res.render('otherVisualConsiderations/textSpacing', {title: "Text spacing", notes: getDataByKey('')});
});

router.get('/zoom/mobile', function (req, res) {
  res.render('otherVisualConsiderations/zoom/zoomMobile', {title: "Reduce motion", notes: getDataByKey('')});
});

router.get('/zoom/scaling', function (req, res) {
  res.render('otherVisualConsiderations/zoom/scaling', {title: "Zooming versus Scaling", notes: getDataByKey('')});
});

export {router as otherVisualConsiderationsRouter};
