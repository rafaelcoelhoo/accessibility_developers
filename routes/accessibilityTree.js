import express from 'express';
import {notes} from '../data/accessibilityTree/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/notesData.js';



const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/good', function (req, res) {
  const title = 'Accessibility tree - Solution';
  res.render('accessibilityTree/good/accessibilityTree', {title, notes: getDataByKey('accessibilityTree', notes), breadcrumb: buildBreadcrumb('accessibility_tree', req.path, title)});
});

router.get('/bad', function (req, res) {
  const title = 'Accessibility tree - Problem';
  res.render('accessibilityTree/bad/accessibilityTree', {title, notes: getDataByKey('accessibilityTree', notes), breadcrumb: buildBreadcrumb('accessibility_tree', req.path, title)});
});

export {router as accessibilityTreeRouter};
