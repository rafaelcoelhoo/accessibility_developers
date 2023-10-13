import express from 'express';
import {notes} from '../data/tests/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';

const router = express.Router();

router.get('/duplicated-id', function (req, res) {
  const title = 'Duplicated Ids';
  res.render('tests/duplicatedIds', {title, notes: getDataByKey('duplicatedIds', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'tests_root')});
});

router.get('/keyboardNavigation', function (req, res) {
  const title = 'Keyboard navigation';
  res.render('tests/keyboardNavigation', {title, notes: getDataByKey('keyboardNavigation', notes), breadcrumb: buildBreadcrumb('', req.path, title, 'tests_root')});
});

export {router as testsRouter};
