import express from 'express';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/link', function (req, res) {
  res.render('aria/links', {title: "Links - Aria"});
});

router.get('/button', function (req, res) {
  res.render('aria/buttons', {title: "Botões - Aria"});
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
  res.render('aria/accessibleNames/initial', {title: "Nomes acessiveis - Aria"});
});

router.get('/accessible-names/solution', function (req, res) {
  res.render('aria/accessibleNames/solution', {title: "Nomes acessiveis - Aria"});
});

router.get('/practical-accessible-names', function (req, res) {
  res.render('aria/practicalAccessibleNames', {title: "Exemplo nomes acessiveis - Aria"});
});

router.get('/aria-live', function (req, res) {
  res.render('aria/aria-live', {title: "Conteúdo dinâmico - Aria"});
});

router.get('/aria-expanded', function (req, res) {
  res.render('aria/aria-expanded', {title: "Conteúdo dinâmico - Aria"});
});
export {router as ariaRouter};
