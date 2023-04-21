import express from 'express';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/', function (req, res) {
  res.render('accessibilityTree');
});

export {router as accessibilityTreeRouter};
