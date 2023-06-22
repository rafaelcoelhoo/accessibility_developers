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

router.get('/headings/problem', function (req, res) {
  res.render('semanticStructureAndNavigation/headings/problem', {title: "Headings - Amazing Animals", notes: getDataByKey('headings')});
});

router.get('/headings/solution', function (req, res) {
  res.render('semanticStructureAndNavigation/headings/solution', {title: "Headings - Amazing Animals"});
});

router.get('/links/initial', function (req, res) {
  res.render('semanticStructureAndNavigation/links/initial', {title: "Links", notes: getDataByKey('links')});
});

router.get('/links/solution', function (req, res) {
  res.render('semanticStructureAndNavigation/links/solution', {title: "Links"});
});


router.get('/links/skip-links', function (req, res) {
  res.render('semanticStructureAndNavigation/links/skipLinks', {layout: false});
});

router.get('/tables/problem', function (req, res) {
  res.render('semanticStructureAndNavigation/tables/problem', {title: "Tables", notes: getDataByKey('tables')});
});

router.get('/tables/solution', function (req, res) {
  res.render('semanticStructureAndNavigation/tables/solution', {title: "Tables"});
});



export {router as semanticStructureAndNavigationRouter};
