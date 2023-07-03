import express from 'express';
import {getDataByKey} from '../data/otherVisualConsiderations/notes.js';


const router = express.Router();

router.get('/reduce-motion', function (req, res) {
  res.render('otherVisualConsiderations/reduceMotion', {title: "Reduce motion", notes: getDataByKey('reduceMotion')});
});

router.get('/dark-mode', function (req, res) {
  res.render('otherVisualConsiderations/darkMode', {title: "Dark mode", notes: getDataByKey('darkMode')});
});

router.get('/target-size', function (req, res) {
  res.render('otherVisualConsiderations/targetSize', {title: "Target size", notes: getDataByKey('targetSize')});
});

router.get('/zoom/mobile', function (req, res) {
  res.render('otherVisualConsiderations/zoom/zoomMobile', {title: "Zoom mobile", notes: getDataByKey('zoom')});
});

router.get('/zoom/scaling', function (req, res) {
  res.render('otherVisualConsiderations/zoom/scaling', {title: "Zooming versus Scaling", notes: getDataByKey('zoomScaling')});
});

export {router as otherVisualConsiderationsRouter};
