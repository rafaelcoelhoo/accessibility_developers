import express from 'express';
import {notes} from '../data/screenReaders/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/notesData.js';



const router = express.Router();

router.get('/', function (req, res) {
  const title = 'How to use - Screen readers';
  res.render('accessibilityTree/good/accessibilityTree', {title, notes: getDataByKey('screenReaders', notes), breadcrumb: buildBreadcrumb('', req.path, title)});
});

export {router as screenReadersRouter};
