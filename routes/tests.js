import express from 'express';
import {notes} from '../data/tests/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';

const router = express.Router();

router.get('/duplicated-id', function (req, res) {
  const title = 'Duplicated Ids';
  res.render('tests/duplicatedIds', {title, notes: getDataByKey('duplicatedIds', notes), breadcrumb: buildBreadcrumb('', req.path, title)});
});

router.get('/accesslint', function (req, res) {
  const title = 'Accesslint';
  res.render('tests/accessLint', {title, notes: getDataByKey('accessLint', notes), breadcrumb: buildBreadcrumb('', req.path, title)});
});

export {router as testsRouter};
