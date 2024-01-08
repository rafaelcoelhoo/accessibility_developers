import express from 'express';
import {notes} from '../data/accessibilityTree/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';



const router = express.Router();

router.get('/consistent-help/world', function (req, res) {
  res.render('wcag/consistentHelp/world', {title: 'World Blog', layout: false});
});

router.get('/consistent-help/travel', function (req, res) {
  res.render('wcag/consistentHelp/travel', {title: 'Travel Blog',layout: false});
});

export {router as WCAGRouter};
