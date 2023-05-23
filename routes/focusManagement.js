import express from 'express';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/', function (req, res) {
  res.render('focusManagement/focusManagement', {title: "Gestão do focus"});
});

export {router as focusManagementRouter};
