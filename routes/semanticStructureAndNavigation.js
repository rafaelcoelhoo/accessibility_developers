import express from 'express';
import {notes} from '../data/semanticStructureAndNavigation/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';


const router = express.Router();

router.get('/page-title', function (req, res) {
  const title = 'Page Title';
  res.render('semanticStructureAndNavigation/pageTitle', {title, notes: getDataByKey('pageTitle', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'semantic_structure_root')});
});

router.get('/languages', function (req, res) {
  const title = 'Languages';
  res.render('semanticStructureAndNavigation/languages', {title, notes: getDataByKey('languages', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'semantic_structure_root')});
});

router.get('/landmarks/initial', function (req, res) {
  const title = 'Landmarks - Initial';
  res.render('semanticStructureAndNavigation/landmarks/initial', {layout: false, notes: getDataByKey('landmarks', notes), breadcrumb: buildBreadcrumb('landmarks', req.path, title)});
});

router.get('/landmarks/solution', function (req, res) {
  const title = 'Landmarks - Solution';
  res.render('semanticStructureAndNavigation/landmarks/solution', {layout: false, breadcrumb: buildBreadcrumb('landmarks', req.path, title)});
});

router.get('/headings/problem', function (req, res) {
  const title = 'Headings - Problem';
  res.render('semanticStructureAndNavigation/headings/problem', {title, notes: getDataByKey('headings', notes), breadcrumb: buildBreadcrumb('headings', req.path, title)});
});

router.get('/headings/solution', function (req, res) {
  const title = 'Headings - Solution';
  res.render('semanticStructureAndNavigation/headings/solution', {title, breadcrumb: buildBreadcrumb('headings', req.path, title)});
});

router.get('/links/initial', function (req, res) {
  const title = 'Links - Initial';
  res.render('semanticStructureAndNavigation/links/initial', {title, notes: getDataByKey('links', notes), breadcrumb: buildBreadcrumb('links', req.path, title)});
});

router.get('/links/solution', function (req, res) {
  const title = 'Links - Solution';
  res.render('semanticStructureAndNavigation/links/solution', {title, breadcrumb: buildBreadcrumb('links', req.path, title)});
});


router.get('/links/skip-links', function (req, res) {
  const title = 'Skip links';
  res.render('semanticStructureAndNavigation/links/skipLinks', {layout: false, notes: getDataByKey('skipLinks', notes), breadcrumb: buildBreadcrumb('links', req.path, title)});
});

router.get('/tables/problem', function (req, res) {
  const title = 'Tables - Problem';
  res.render('semanticStructureAndNavigation/tables/problem', {title, notes: getDataByKey('tables', notes), breadcrumb: buildBreadcrumb('tables', req.path, title)});
});

router.get('/tables/solution', function (req, res) {
  const title = 'Tables - Solution';
  res.render('semanticStructureAndNavigation/tables/solution', {title, breadcrumb: buildBreadcrumb('tables', req.path, title)});
});

router.get('/lists/problem', function (req, res) {
  const title = 'Lists - Problem';
  res.render('semanticStructureAndNavigation/lists/problem', {title, notes: getDataByKey('lists', notes), breadcrumb: buildBreadcrumb('lists', req.path, title)});
});

router.get('/lists/solution', function (req, res) {
  const title = 'Lists - Solution';
  res.render('semanticStructureAndNavigation/lists/solution', {title, breadcrumb: buildBreadcrumb('lists', req.path, title)});
});

router.get('/other-elements/mark', function (req, res) {
  const title = 'Mark';
  res.render('semanticStructureAndNavigation/otherSemanticElements/mark', {title, notes: getDataByKey('mark', notes), breadcrumb: buildBreadcrumb('otherSE', req.path, title)});
});

router.get('/other-elements/strong', function (req, res) {
  const title = 'Strong';
  res.render('semanticStructureAndNavigation/otherSemanticElements/strong', {title, notes: getDataByKey('strong', notes), breadcrumb: buildBreadcrumb('otherSE', req.path, title)});
});



export {router as semanticStructureAndNavigationRouter};
