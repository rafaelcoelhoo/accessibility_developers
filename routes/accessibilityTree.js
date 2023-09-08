import express from 'express';
import {notes} from '../data/accessibilityTree/notes.js';
import {getDataByKey} from '../js/components/notesData.js';



const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/good', function (req, res) {
  res.render('accessibilityTree/good/accessibilityTree', {title: "Accessibility tree - Solution", notes: getDataByKey('accessibilityTree', notes)});
});

router.get('/bad', function (req, res) {
  res.render('accessibilityTree/bad/accessibilityTree', {title: "Accessibility tree - Problem", notes: getDataByKey('accessibilityTree', notes)});
});

export {router as accessibilityTreeRouter};
