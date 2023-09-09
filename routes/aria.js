import express from 'express';
import fs from "fs";
import {notes} from '../data/ARIA/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';


const router = express.Router();

router.get('/links/initial', function (req, res) {
  const title = 'Links - Aria';
  res.render('ARIA/links/initial', {title, notes: getDataByKey('links', notes), breadcrumb: buildBreadcrumb('aria_links', req.path, title)});
});

router.get('/links/solution', function (req, res) {
  const title = 'Links - Aria';
  res.render('ARIA/links/solution', {title, notes: getDataByKey('links', notes), breadcrumb: buildBreadcrumb('aria_links', req.path, title)});
});

router.get('/buttons/initial', function (req, res) {
  const title = 'Buttons - Aria';
  res.render('ARIA/buttons/initial', {title, notes: getDataByKey('buttons', notes), breadcrumb: buildBreadcrumb('aria_buttons', req.path, title)});
});

router.get('/buttons/solution', function (req, res) {
  const title = 'Buttons - Aria';
  res.render('ARIA/buttons/solution', {title});
});

router.get('/checkbox/initial', function (req, res) {
  const title = 'Checkbox - Aria';
  res.render('ARIA/checkbox/initial', {title, notes: getDataByKey('checkboxes', notes), breadcrumb: buildBreadcrumb('aria_checkbox', req.path, title)});
});

router.get('/checkbox/solution', function (req, res) {
  const title = 'Checkbox - Aria';
  res.render('ARIA/checkbox/solution', {title});
});


router.get('/switch-control/initial', function (req, res) {
  const title = 'Switch - Aria';
  res.render('ARIA/switchControl/initial', {title, notes: getDataByKey('switch', notes), breadcrumb: buildBreadcrumb('switch_control', req.path, title)});
});

router.get('/switch-control/solution', function (req, res) {
  const title = 'Switch - Aria';
  res.render('ARIA/switchControl/solution', {title});
});

router.get('/tabs/initial', function (req, res) {
  const title = 'Tabs - Aria';
  res.render('ARIA/tabs/initial', {title, notes: getDataByKey('aria_tabs', notes), breadcrumb: buildBreadcrumb('aria_tabs', req.path, title)});
});

router.get('/tabs/solution', function (req, res) {
  const title = 'Tabs - Aria';
  res.render('ARIA/tabs/solution', {title, notes: getDataByKey('aria_tabs', notes), breadcrumb: buildBreadcrumb('aria_tabs', req.path, title)});
});

router.get('/modal/solution', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');
  const title = 'Modal - Aria';
  res.render('ARIA/modal/solution', {title, modal: modalCode});
});

router.get('/modal/initial', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');
  const title = 'Modal - Aria';
  res.render('ARIA/modal/initial', {title, modal: modalCode, notes: getDataByKey('modal', notes), breadcrumb: buildBreadcrumb('aria_modal', req.path, title)});
});

router.get('/accessible-names/initial', function (req, res) {
  const title = 'Accessible names - Aria';
  res.render('ARIA/accessibleNames/initial', {title, breadcrumb: buildBreadcrumb('accessible_names', req.path, title)});
});

router.get('/accessible-names/solution', function (req, res) {
  const title = 'Accessible names - Aria';
  res.render('ARIA/accessibleNames/solution', {title, breadcrumb: buildBreadcrumb('accessible_names', req.path, title)});
});

router.get('/practical-accessible-names/initial', function (req, res) {
  const title = 'Real example - Aria';
  res.render('ARIA/accessibleNamesExercise/initial', {title, notes: getDataByKey('accessibleNames', notes), breadcrumb: buildBreadcrumb('accessible_names', req.path, title)});
});

router.get('/practical-accessible-names/solution', function (req, res) {
  res.render('ARIA/accessibleNamesExercise/solution', {title: "Real example - Aria"});
});

router.get('/aria-live/initial', function (req, res) {
  const title = 'Live Announcements - Aria';
  res.render('ARIA/aria-live/initial', {title, notes: getDataByKey('aria_live', notes), breadcrumb: buildBreadcrumb('aria_live', req.path, title)});
});

router.get('/aria-live/solution', function (req, res) {
  res.render('ARIA/aria-live/solution', {title: "Live Announcements - Aria"});
});

router.get('/aria-live/examples', function (req, res) {
  const title = 'Live Announcements - Aria';
  res.render('ARIA/aria-live/examples', {title, notes: getDataByKey('aria_live_examples', notes), breadcrumb: buildBreadcrumb('aria_live', req.path, title)});
});

router.get('/aria-expanded/initial', function (req, res) {
  const title = 'aria-expanded - Aria';
  res.render('ARIA/aria-expanded/initial', {title, notes: getDataByKey('aria_expanded', notes), breadcrumb: buildBreadcrumb('aria_expanded', req.path, title)});
});

router.get('/aria-expanded/solution', function (req, res) {
  res.render('ARIA/aria-expanded/solution', {title: "aria-expanded - Aria"});
});
export {router as ariaRouter};
