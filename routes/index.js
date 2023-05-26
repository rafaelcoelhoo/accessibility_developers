import express from 'express';
import {index} from '../data/index.js';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', index);
});

/* GET Accessibility Tree page. */
router.get('/accessibility-tree', function (req, res) {
  res.render('index');
});

export {router as indexRouter};
