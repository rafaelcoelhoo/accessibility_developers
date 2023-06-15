import express from 'express';
import {getDataByKey} from '../data/showAndHideElements/notes.js';


const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/hide-from-all', function (req, res) {
  res.render('showAndHideElements/hideFromAll', {title: "Hide from all"});
});

router.get('/hide-from-at', function (req, res) {
  res.render('showAndHideElements/hideFromAssistiveTechnologies', {title: "Hide from assistive tecnologies"});
});

router.get('/hide-visually', function (req, res) {
  res.render('showAndHideElements/hideVisually', {title: "Hide from sight"});
});

router.get('/examples', function (req, res) {
  res.render('showAndHideElements/examples', {title: "Hide and show elements - examples", notes: getDataByKey("hideAndShowElements")});
});

export {router as showAndHideElementsRouter};
