import express from 'express';
import {reports} from '../data/reports.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: "Acessibilidade para developers"});
});

/* GET Accessibility Tree page. */
router.get('/accessibility-tree', function (req, res) {
  res.render('index');
});

export {router as indexRouter};
