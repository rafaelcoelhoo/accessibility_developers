import express from 'express';
import {getDataByKey} from '../data/semanticStructureAndNavigation/notes.js';


const router = express.Router();

router.get('/page-title', function (req, res) {
  res.render('semanticStructureAndNavigation/pageTitle', {title: "Page Title", notes: getDataByKey('pageTitle')});
});

router.get('/languages', function (req, res) {
  res.render('semanticStructureAndNavigation/languages', {title: "Languages", notes: getDataByKey('languages')});
});

router.get('/landmarks/initial', function (req, res) {
  res.render('semanticStructureAndNavigation/landmarks/initial', {layout: false});
});

router.get('/landmarks/solution', function (req, res) {
  res.render('semanticStructureAndNavigation/landmarks/solution', {layout: false});
});

router.get('/landmarks/examples', function (req, res) {
  res.render('semanticStructureAndNavigation/landmarks/examples', {title: "Landmarks examples", notes: getDataByKey('landmarks')});
});

export {router as semanticStructureAndNavigationRouter};
