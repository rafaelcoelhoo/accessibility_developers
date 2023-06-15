import express from 'express';
import fs from 'fs';
import {getDataByKey} from '../data/focusManagement/notes.js';


const router = express.Router();

router.get('/keyboard', function (req, res) {
  res.render('focusManagement/keyboardAccessibility', {title: "Keyboard Accessibility"});
});

router.get('/focus-indicator', function (req, res) {

  res.render('focusManagement/focus', {title: "Focus Indicator", notes: getDataByKey('focus')});
});

router.get('/content-order', function (req, res) {
  res.render('focusManagement/contentOrder', {title: "Tab order"});
});

router.get('/focus-on-modals', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/modal-focus-on-aria-modals.hbs', 'utf8');

  res.render('focusManagement/focusOnModals', {title: "Focus in modals", modal: modalCode});
});

router.get('/keyboard-trap', function (req, res) {
  res.render('focusManagement/keyboardTrap', {title: "Keyboard Trap"});
});

router.get('/tabindex', function (req, res) {
  res.render('focusManagement/tabIndex', {title: "tabindex attribute"});
});

router.get('/tabindex-example', function (req, res) {
  res.render('focusManagement/tabIndexExample', {title: "Example tabindex"});
});

router.get('/about', function (req, res) {
  res.render('focusManagement/tab-index-content-example', { layout: false, h2_title: "About" });
});

router.get('/contact', function (req, res) {
  res.render('focusManagement/tab-index-content-example', { layout: false, h2_title: "Contacts" });
});

export {router as focusManagementRouter};
