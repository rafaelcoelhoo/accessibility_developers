import express from 'express';

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

router.get('/checkbox', function (req, res) {
  res.render('aria/checkbox', {title: "Checkbox - Aria"});
});


router.get('/switch-control/initial', function (req, res) {
  res.render('aria/switchControl/initial', {title: "Switch - Aria"});
});

router.get('/switch-control/solution', function (req, res) {
  res.render('aria/switchControl/solution', {title: "Switch - Aria"});
});

router.get('/tabs', function (req, res) {
  res.render('aria/tabs', {title: "Tabs - Aria"});
});

router.get('/modal', function (req, res) {
  res.render('aria/modal-aria', {title: "Modal - Aria"});
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

router.get('/aria-live', function (req, res) {
  res.render('aria/aria-live', {title: "Conteúdo dinâmico - Aria"});
});

router.get('/aria-expanded', function (req, res) {
  res.render('aria/aria-expanded', {title: "Conteúdo dinâmico - Aria"});
});
export {router as ariaRouter};
