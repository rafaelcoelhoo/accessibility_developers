import express from 'express';
import fs from "fs";
import {getDataByKey} from '../data/ARIA/notes.js';


const router = express.Router();

router.get('/links/initial', function (req, res) {
  res.render('ARIA/links/initial', {title: "Links - Aria", notes: getDataByKey('links')});
});

router.get('/links/solution', function (req, res) {
  res.render('ARIA/links/solution', {title: "Links - Aria"});
});

router.get('/buttons/initial', function (req, res) {
  res.render('ARIA/buttons/initial', {title: "Buttons - Aria", notes: getDataByKey('buttons')});
});

router.get('/buttons/solution', function (req, res) {
  res.render('ARIA/buttons/solution', {title: "Buttons - Aria"});
});

router.get('/checkbox/initial', function (req, res) {
  res.render('ARIA/checkbox/initial', {title: "Checkbox - Aria", notes: getDataByKey('checkboxes')});
});

router.get('/checkbox/solution', function (req, res) {
  res.render('ARIA/checkbox/solution', {title: "Checkbox - Aria"});
});


router.get('/switch-control/initial', function (req, res) {
  res.render('ARIA/switchControl/initial', {title: "Switch - Aria", notes: getDataByKey('switch')});
});

router.get('/switch-control/solution', function (req, res) {
  res.render('ARIA/switchControl/solution', {title: "Switch - Aria"});
});

router.get('/tabs/initial', function (req, res) {
  res.render('ARIA/tabs/initial', {title: "Tabs - Aria", notes: getDataByKey('aria_tabs')});
});

router.get('/tabs/solution', function (req, res) {
  res.render('ARIA/tabs/solution', {title: "Tabs - Aria"});
});

router.get('/modal/solution', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');

  res.render('ARIA/modal/solution', {title: "Modal - Aria", modal: modalCode});
});

router.get('/modal/initial', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');

  res.render('ARIA/modal/initial', {title: "Modal - Aria", modal: modalCode, notes: getDataByKey('modal')});
});

router.get('/accessible-names/initial', function (req, res) {
  res.render('ARIA/accessibleNames/initial', {title: "Accessible names - Aria"});
});

router.get('/accessible-names/solution', function (req, res) {
  res.render('ARIA/accessibleNames/solution', {title: "Accessible names - Aria"});
});

router.get('/practical-accessible-names/initial', function (req, res) {
  res.render('ARIA/accessibleNamesExercise/initial', {title: "Real example - Aria", notes: getDataByKey('accessibleNames')});
});

router.get('/practical-accessible-names/solution', function (req, res) {
  res.render('ARIA/accessibleNamesExercise/solution', {title: "Real example - Aria"});
});

router.get('/aria-live/initial', function (req, res) {
  res.render('ARIA/aria-live/initial', {title: "aria-live - Aria", notes: getDataByKey('aria_live')});
});

router.get('/aria-live/solution', function (req, res) {
  res.render('ARIA/aria-live/solution', {title: "aria-live - Aria"});
});

router.get('/aria-live/examples', function (req, res) {
  res.render('ARIA/aria-live/examples', {title: "aria-live - Aria", notes: getDataByKey('aria_live_examples')});
});

router.get('/aria-expanded/initial', function (req, res) {
  res.render('ARIA/aria-expanded/initial', {title: "aria-expanded - Aria", notes: getDataByKey('aria_expanded')});
});

router.get('/aria-expanded/solution', function (req, res) {
  res.render('ARIA/aria-expanded/solution', {title: "aria-expanded - Aria"});
});
export {router as ariaRouter};
