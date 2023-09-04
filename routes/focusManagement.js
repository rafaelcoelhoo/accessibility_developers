import express from 'express';
import fs from 'fs';
import {getDataByKey} from '../data/focusManagement/notes.js';


const router = express.Router();

router.get('/keyboard', function (req, res) {
  res.render('focusManagement/keyboardAccessibility', {title: "Keyboard Accessibility", notes: getDataByKey('keyboardAccessibility')});
});

router.get('/focus-indicator', function (req, res) {

  res.render('focusManagement/focus', {title: "Focus Indicator", notes: getDataByKey('focus')});
});

router.get('/content-order', function (req, res) {
  res.render('focusManagement/contentOrder', {title: "Tab order", notes: getDataByKey('tabOrder')});
});

router.get('/focus-on-modals', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/modal-focus-on-modals.hbs', 'utf8');

  res.render('focusManagement/focusOnModals', {title: "Focus in modals", modal: modalCode, notes: getDataByKey('focusOnModals')});
});

router.get('/keyboard-trap', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/modal-focus-on-modals.hbs', 'utf8');
  res.render('focusManagement/keyboardTrap', {title: "Keyboard Trap", modal: modalCode, notes: getDataByKey('keyboardTrap')});
});

router.get('/tabindex', function (req, res) {
  res.render('focusManagement/tabindex/tabIndex', {title: "tabindex attribute", notes: getDataByKey('tabindex')});
});

router.get('/tabindex-example', function (req, res) {
  res.render('focusManagement/tabindex/tabIndexExample', {title: "Example tabindex", notes: getDataByKey('tabindexExample')});
});

router.get('/about', function (req, res) {
  res.render('focusManagement/tabindex/tabIndexContentExample', { layout: false, h2_title: "About" });
});

router.get('/contact', function (req, res) {
  res.render('focusManagement/tabindex/tabIndexContentExample', { layout: false, h2_title: "Contacts" });
});

export {router as focusManagementRouter};
