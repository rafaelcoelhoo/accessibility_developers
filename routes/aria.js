import express from 'express';
import fs from "fs";
import {notes} from '../data/ARIA/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';


const router = express.Router();

router.get('/links/initial', function (req, res) {
  const title = 'Links - Initial';
  res.render('ARIA/links/initial', {title, notes: getDataByKey('links', notes), breadcrumb: buildBreadcrumb('aria_links', req.path, title)});
});

router.get('/links/solution', function (req, res) {
  const title = 'Links - Solution';
  res.render('ARIA/links/solution', {title, notes: getDataByKey('links', notes), breadcrumb: buildBreadcrumb('aria_links', req.path, title)});
});

router.get('/buttons/initial', function (req, res) {
  const title = 'Buttons - Initial';
  res.render('ARIA/buttons/initial', {title, notes: getDataByKey('buttons', notes), breadcrumb: buildBreadcrumb('aria_buttons', req.path, title)});
});

router.get('/buttons/solution', function (req, res) {
  const title = 'Buttons - Solution';
  res.render('ARIA/buttons/solution', {title, breadcrumb: buildBreadcrumb('aria_buttons', req.path, title)});
});

router.get('/checkbox/initial', function (req, res) {
  const title = 'Checkbox - Initial';
  res.render('ARIA/checkbox/initial', {title, notes: getDataByKey('checkboxes', notes), breadcrumb: buildBreadcrumb('aria_checkbox', req.path, title)});
});

router.get('/checkbox/solution', function (req, res) {
  const title = 'Checkbox - Solution';
  res.render('ARIA/checkbox/solution', {title, breadcrumb: buildBreadcrumb('aria_checkbox', req.path, title)});
});


router.get('/switch-control/initial', function (req, res) {
  const title = 'Switch - Initial';
  res.render('ARIA/switchControl/initial', {title, notes: getDataByKey('switch', notes), breadcrumb: buildBreadcrumb('switch_control', req.path, title)});
});

router.get('/switch-control/solution', function (req, res) {
  const title = 'Switch - Solution';
  res.render('ARIA/switchControl/solution', {title});
});

router.get('/tabs/initial', function (req, res) {
  const title = 'Tabs - Initial';
  res.render('ARIA/tabs/initial', {title, notes: getDataByKey('aria_tabs', notes), breadcrumb: buildBreadcrumb('aria_tabs', req.path, title)});
});

router.get('/tabs/solution', function (req, res) {
  const title = 'Tabs - Solution';
  res.render('ARIA/tabs/solution', {title, notes: getDataByKey('aria_tabs', notes), breadcrumb: buildBreadcrumb('aria_tabs', req.path, title)});
});

router.get('/modal/solution', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');
  const title = 'Modal - Solution';
  res.render('ARIA/modal/solution', {title, modal: modalCode});
});

router.get('/modal/initial', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');
  const title = 'Modal - Initial';
  res.render('ARIA/modal/initial', {title, modal: modalCode, notes: getDataByKey('modal', notes), breadcrumb: buildBreadcrumb('aria_modal', req.path, title)});
});

router.get('/accessible-names/initial', function (req, res) {
  const title = 'Accessible names - Initial';
  res.render('ARIA/accessibleNames/initial', {title, notes: getDataByKey('accessibleNames', notes), breadcrumb: buildBreadcrumb('accessible_names', req.path, title)});
});

router.get('/accessible-names/solution', function (req, res) {
  const title = 'Accessible names - Solution';
  res.render('ARIA/accessibleNames/solution', {title, notes: getDataByKey('accessibleNames', notes), breadcrumb: buildBreadcrumb('accessible_names', req.path, title)});
});


router.get('/accessible-names/exercise/initial', function (req, res) {
  const title = 'Exercise - Initial';
  res.render('ARIA/accessibleNames/exercise/initial', {title, notes: getDataByKey('accessibleNamesExercise', notes), breadcrumb: buildBreadcrumb('accessible_names', req.path, title)});
});

router.get('/accessible-names/exercise/solution', function (req, res) {
  const title = 'Exercise - Solution';
  res.render('ARIA/accessibleNames/exercise/solution', {title, breadcrumb: buildBreadcrumb('accessible_names', req.path, title)});
});

router.get('/aria-live/initial', function (req, res) {
  const title = 'Live Announcements - Initial';
  res.render('ARIA/aria-live/initial', {title, notes: getDataByKey('aria_live', notes), breadcrumb: buildBreadcrumb('aria_live', req.path, title)});
});

router.get('/aria-live/solution', function (req, res) {
  const title = 'Live Announcements - Solution';
  res.render('ARIA/aria-live/solution', {title, breadcrumb: buildBreadcrumb('aria_live', req.path, title)});
});

router.get('/aria-live/examples', function (req, res) {
  const title = 'Live Announcements - Examples';
  res.render('ARIA/aria-live/examples', {title, notes: getDataByKey('aria_live_examples', notes), breadcrumb: buildBreadcrumb('aria_live', req.path, title)});
});

router.get('/aria-expanded/initial', function (req, res) {
  const title = 'aria-expanded - Initial';
  res.render('ARIA/aria-expanded/initial', {title, notes: getDataByKey('aria_expanded', notes), breadcrumb: buildBreadcrumb('aria_expanded', req.path, title)});
});

router.get('/aria-expanded/solution', function (req, res) {
  const title = 'aria-expanded - Solution';
  res.render('ARIA/aria-expanded/solution', {title, breadcrumb: buildBreadcrumb('aria_expanded', req.path, title)});
});
export {router as ariaRouter};
