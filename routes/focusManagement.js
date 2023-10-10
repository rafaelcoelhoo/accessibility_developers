import express from 'express';
import fs from 'fs';
import {notes} from '../data/focusManagement/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';

const router = express.Router();

router.get('/keyboard', function (req, res) {
  const title = 'Keyboard Accessibility';
  res.render('focusManagement/keyboardAccessibility', {title, notes: getDataByKey('keyboardAccessibility', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'focus_management_root')});
});

router.get('/focus-indicator', function (req, res) {
  const title = 'Focus Indicator';
  res.render('focusManagement/focus', {title, notes: getDataByKey('focus', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'focus_management_root')});
});

router.get('/content-order', function (req, res) {
  const title = 'Tab order';
  res.render('focusManagement/contentOrder', {title, notes: getDataByKey('tabOrder', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'focus_management_root')});
});

router.get('/focus-on-modals', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/modal-focus-on-modals.hbs', 'utf8');
  const title = 'Focus management in modals';
  res.render('focusManagement/focusOnModals', {title, modal: modalCode, notes: getDataByKey('focusOnModals', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'focus_management_root')});
});

router.get('/keyboard-trap', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/modal-focus-on-modals.hbs', 'utf8');
  const title = 'Keyboard Trap';
  res.render('focusManagement/keyboardTrap', {title, modal: modalCode, notes: getDataByKey('keyboardTrap', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'focus_management_root')});
});

router.get('/tabindex', function (req, res) {
  const title = 'Tabindex attribute';
  res.render('focusManagement/tabindex/tabIndex', {title, notes: getDataByKey('tabindex', notes), breadcrumb: buildBreadcrumb('focus_management_tabindex', req.path, title)});
});

router.get('/tabindex-example', function (req, res) {
  const title = 'Example tabindex';
  res.render('focusManagement/tabindex/tabIndexExample', {title, notes: getDataByKey('tabindexExample', notes), breadcrumb: buildBreadcrumb('focus_management_tabindex', req.path, title)});
});

router.get('/about', function (req, res) {
  res.render('focusManagement/tabindex/tabIndexContentExample', { layout: false, h2_title: "About" });
});

router.get('/contact', function (req, res) {
  res.render('focusManagement/tabindex/tabIndexContentExample', { layout: false, h2_title: "Contacts" });
});

export {router as focusManagementRouter};
