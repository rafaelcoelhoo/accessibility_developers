import express from 'express';
import {index} from '../data/index.js';

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/accessibility-tree', function (req, res) {
    res.render('index');
});

/* GET home page. */
router.get('/', function (req, res) {
  const parameter = req.query.id;
  let renderView = "index";
  let options = null;

  if (parameter) {
    const data = index.content.find(item => {
      return item.options.some(option => option.id === parameter);
    });

    if (data) {
      options = data.options.find(option => option.id === parameter);
      renderView = "topicDetail";
    }
  }

  res.render(renderView, options || index);
});

export {router as indexRouter};
