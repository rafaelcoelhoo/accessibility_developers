import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/keyboard', function (req, res) {
  res.render('focusManagement/keyboardAccessibility', {title: "Acessibilidade teclado"});
});

router.get('/focus-indicator', function (req, res) {
  res.render('focusManagement/focus', {title: "Indicação focus"});
});

router.get('/content-order', function (req, res) {
  res.render('focusManagement/contentOrder', {title: "Ordem de leitura"});
});

router.get('/focus-on-modals', function (req, res) {
  const modalCode = fs.readFileSync('./views/partials/modal-focus-on-aria-modals.hbs', 'utf8');

  res.render('focusManagement/focusOnModals', {title: "Focus em modais", modal: modalCode});
});

router.get('/keyboard-trap', function (req, res) {
  res.render('focusManagement/keyboardTrap', {title: "Bloquear utilizadores de teclado"});
});

router.get('/tabindex', function (req, res) {
  res.render('focusManagement/tabIndex', {title: "Atributo tabindex"});
});

router.get('/tabindex-example', function (req, res) {
  res.render('focusManagement/tabIndexExample', {title: "Exemplo tabindex"});
});

router.get('/about', function (req, res) {
  res.render('focusManagement/tab-index-content-example', { layout: false, h2_title: "Sobre" });
});

router.get('/contact', function (req, res) {
  res.render('focusManagement/tab-index-content-example', { layout: false, h2_title: "Contatos" });
});

export {router as focusManagementRouter};
