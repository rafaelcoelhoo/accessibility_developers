import express from 'express';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/good', function (req, res) {
  res.render('accessibilityTree/good/accessibilityTree');
});

export {router as accessibilityTreeRouter};
