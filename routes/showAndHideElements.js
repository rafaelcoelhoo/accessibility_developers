import express from 'express';
import {notes} from '../data/showAndHideElements/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';


const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/hide-from-all', function (req, res) {
  const title = 'Hide from all';
  res.render('showAndHideElements/hideFromAll', {title, notes: getDataByKey("hideAndShowElements", notes), breadcrumb: buildBreadcrumb('', req.path, title, 'show_and_hide_root')});
});

router.get('/hide-from-at', function (req, res) {
  const title = 'Hide from assistive technologies';
  res.render('showAndHideElements/hideFromAssistiveTechnologies', {title, notes: getDataByKey("hideAndShowElements", notes), breadcrumb: buildBreadcrumb('', req.path, title, 'show_and_hide_root')});
});

router.get('/hide-visually', function (req, res) {
  const title = 'Hide from sight';
  res.render('showAndHideElements/hideVisually', {title, notes: getDataByKey("hideAndShowFromSight", notes), breadcrumb: buildBreadcrumb('', req.path, title, 'show_and_hide_root')});
});

router.get('/examples', function (req, res) {
  const title = 'Hide and show elements - examples';
  res.render('showAndHideElements/examples', {title, notes: getDataByKey("hideAndShowElementsExamples", notes), breadcrumb: buildBreadcrumb('', req.path, title, 'show_and_hide_root')});
});

router.get('/exercise/initial', function (req, res) {
  const title = 'Exercise - Using hidden content from sight - Initial';
  res.render('showAndHideElements/exercise/initial', {title, notes: getDataByKey("hideAndShowElementsExercise", notes), breadcrumb: buildBreadcrumb('show_and_hide_root_exercise', req.path, title)});
});

router.get('/exercise/solution', function (req, res) {
  const title = 'Exercise - Using hidden content from sight - Solution';
  res.render('showAndHideElements/exercise/solution', {title, notes: getDataByKey("hideAndShowElementsExercise", notes), breadcrumb: buildBreadcrumb('show_and_hide_root_exercise', req.path, title)});
});

export {router as showAndHideElementsRouter};
