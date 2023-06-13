import express from 'express';
import fs from "fs";
import {getDataByKey, notes} from '../data/notes.js';


const router = express.Router();

router.get('/links/initial', function (req, res) {
  res.render('aria/links/initial', {title: "Links - Aria"});
});

router.get('/links/solution', function (req, res) {
  res.render('aria/links/solution', {title: "Links - Aria"});
});

router.get('/buttons/initial', function (req, res) {
  res.render('aria/buttons/initial', {title: "Buttons - Aria"});
});

router.get('/buttons/solution', function (req, res) {
  res.render('aria/buttons/solution', {title: "Buttons - Aria"});
});

router.get('/checkbox/initial', function (req, res) {
  res.render('aria/checkbox/initial', {title: "Checkbox - Aria"});
});

router.get('/checkbox/solution', function (req, res) {
  res.render('aria/checkbox/solution', {title: "Checkbox - Aria"});
});


router.get('/switch-control/initial', function (req, res) {
  res.render('aria/switchControl/initial', {title: "Switch - Aria"});
});

router.get('/switch-control/solution', function (req, res) {
  res.render('aria/switchControl/solution', {title: "Switch - Aria"});
});

router.get('/tabs/initial', function (req, res) {
  console.log(getDataByKey('aria_tabs'))
  res.render('aria/tabs/initial', {title: "Tabs - Aria", notes: getDataByKey('aria_tabs')});
});

router.get('/tabs/solution', function (req, res) {
  res.render('aria/tabs/solution', {title: "Tabs - Aria"});
});

router.get('/modal/solution', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');

  res.render('aria/modal/solution', {title: "Modal - Aria", modal: modalCode});
});

router.get('/modal/initial', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/aria-modals.hbs', 'utf8');

  res.render('aria/modal/initial', {title: "Modal - Aria", modal: modalCode});
});

router.get('/accessible-names/initial', function (req, res) {
  res.render('aria/accessibleNames/initial', {title: "Nomes acessíveis - Aria"});
});

router.get('/accessible-names/solution', function (req, res) {
  res.render('aria/accessibleNames/solution', {title: "Nomes acessíveis - Aria"});
});

router.get('/practical-accessible-names/initial', function (req, res) {
  res.render('aria/accessibleNamesExercise/initial', {title: "Real example - Aria"});
});

router.get('/practical-accessible-names/solution', function (req, res) {
  res.render('aria/accessibleNamesExercise/solution', {title: "Real example - Aria"});
});

router.get('/aria-live/initial', function (req, res) {
  res.render('aria/aria-live/initial', {title: "aria-live - Aria"});
});

router.get('/aria-live/solution', function (req, res) {
  res.render('aria/aria-live/solution', {title: "aria-live - Aria"});
});

router.get('/aria-live/examples', function (req, res) {
  res.render('aria/aria-live/examples', {title: "aria-live - Aria"});
});

router.get('/aria-expanded/initial', function (req, res) {
  res.render('aria/aria-expanded/initial', {title: "aria-expanded - Aria"});
});

router.get('/aria-expanded/solution', function (req, res) {
  res.render('aria/aria-expanded/solution', {title: "aria-expanded - Aria"});
});
export {router as ariaRouter};
