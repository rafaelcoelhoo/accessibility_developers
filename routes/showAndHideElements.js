import express from 'express';
import {getDataByKey} from '../data/showAndHideElements/notes.js';


const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/hide-from-all', function (req, res) {
  res.render('showAndHideElements/hideFromAll', {title: "Hide from all", notes: getDataByKey("hideAndShowElements")});
});

router.get('/hide-from-at', function (req, res) {
  res.render('showAndHideElements/hideFromAssistiveTechnologies', {title: "Hide from assistive technologies", notes: getDataByKey("hideAndShowElements")});
});

router.get('/hide-visually', function (req, res) {
  res.render('showAndHideElements/hideVisually', {title: "Hide from sight", notes: getDataByKey("hideAndShowElements")});
});

router.get('/examples', function (req, res) {
  res.render('showAndHideElements/examples', {title: "Hide and show elements - examples", notes: getDataByKey("hideAndShowElementsExamples")});
});

export {router as showAndHideElementsRouter};
