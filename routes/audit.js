import express from 'express';
import {getDataByKey} from '../data/tests/notes.js';


const router = express.Router();

router.get('/websites', function (req, res) {
  res.render('audit/websites', {title: "Websites audit", notes: getDataByKey('')});
});


export {router as auditRouter};
