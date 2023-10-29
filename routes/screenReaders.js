import express from 'express';
import {notes} from '../data/screenReaders/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';



const router = express.Router();

router.get('/', function (req, res) {
  const title = 'How to use - Screen readers';

  res.render('screenReaders/howToUse', {title, notes: getDataByKey('screenReaders', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'screen_readers_root')});
});

export {router as screenReadersRouter};
