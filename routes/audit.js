import express from 'express';
import {notes} from '../data/audit/notes.js';
import {buildBreadcrumb, getDataByKey} from '../js/components/shared.js';

const router = express.Router();

router.get('/websites', function (req, res) {
  const title = 'Websites audit';
  res.render('audit/websites', {title, notes: getDataByKey('audit', notes), breadcrumb: buildBreadcrumb('', req.path, title)});
});


export {router as auditRouter};
