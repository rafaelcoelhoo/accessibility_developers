import express from 'express';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/hide-from-all', function (req, res) {
  res.render('showAndHideElements/hideFromAll', {title: "Esconder elementos de todos"});
});

router.get('/hide-from-at', function (req, res) {
  res.render('showAndHideElements/hideFromAssistiveTechnologies', {title: "Esconder elementos das tecnologias assistivas"});
});

router.get('/hide-visually', function (req, res) {
  res.render('showAndHideElements/hideVisually', {title: "Esconder elementos visualmente"});
});

export {router as showAndHideElementsRouter};
