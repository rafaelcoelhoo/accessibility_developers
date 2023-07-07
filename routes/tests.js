import express from 'express';
import {getDataByKey} from '../data/tests/notes.js';


const router = express.Router();

router.get('/duplicated-id', function (req, res) {
  res.render('tests/duplicatedIds', {title: "Duplicated Ids", notes: getDataByKey('duplicatedIds')});
});

router.get('/accesslint', function (req, res) {
  res.render('tests/accessLint', {title: "Accesslint", notes: getDataByKey('accessLint')});
});

export {router as testsRouter};