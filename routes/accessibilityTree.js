import express from 'express';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/good', function (req, res) {
  res.render('accessibilityTree/good/accessibilityTree', {title: "Árvore acessibilidade"});
});

router.get('/bad', function (req, res) {
  res.render('accessibilityTree/bad/accessibilityTree', {title: "Árvore acessibilidade"});
});

export {router as accessibilityTreeRouter};
