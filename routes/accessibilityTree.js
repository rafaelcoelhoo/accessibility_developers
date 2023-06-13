import express from 'express';
import {getDataByKey} from '../data/accessibilityTree/notes.js';


const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/good', function (req, res) {
  res.render('accessibilityTree/good/accessibilityTree', {title: "Accessibility tree", notes: getDataByKey('accessibilityTree')});
});

router.get('/bad', function (req, res) {
  res.render('accessibilityTree/bad/accessibilityTree', {title: "Accessibility tree", notes: getDataByKey('accessibilityTree')});
});

export {router as accessibilityTreeRouter};
