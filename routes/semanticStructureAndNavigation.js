import express from 'express';
import {getDataByKey} from '../data/semanticStructureAndNavigation/notes.js';


const router = express.Router();

router.get('/page-title', function (req, res) {
  res.render('semanticStructureAndNavigation/pageTitle', {title: "Page Title", notes: getDataByKey('pageTitle')});
});

router.get('/languages', function (req, res) {
  res.render('semanticStructureAndNavigation/languages', {title: "Languages", notes: getDataByKey('languages')});
});

export {router as semanticStructureAndNavigationRouter};
