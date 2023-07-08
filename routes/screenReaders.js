import express from 'express';
import {getDataByKey} from '../data/screenReaders/notes.js';


const router = express.Router();

router.get('/', function (req, res) {
  res.render('accessibilityTree/good/accessibilityTree', {title: "How to use - Screen readers", notes: getDataByKey('screenReaders')});
});

export {router as screenReadersRouter};
