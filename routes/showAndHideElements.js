import express from 'express';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/', function (req, res) {
  res.render('showAndHideElements/showAndHideElements', {title: "Técnicas para esconder e mostrar elementos "});
});

export {router as showAndHideElementsRouter};
