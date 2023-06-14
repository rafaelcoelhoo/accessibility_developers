import express from 'express';
import {getDataByKey} from '../data/screenReaders/notes.js';


const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/', function (req, res) {
  res.render('screenReaders/howToUse', {title: "How to use - Screen readers", notes: getDataByKey('screenReaders')});
});

export {router as screenReadersRouter};
