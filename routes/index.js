import express from 'express';
import {index} from '../data/index.js';
import {buildBreadcrumb} from "../js/components/shared.js";

const router = express.Router();

/* GET Accessibility Tree page. */
router.get('/accessibility-tree', function (req, res) {
    res.render('index');
});

/* GET home page. */
router.get('/', function (req, res) {
  const parameter = req.query.id;
  let renderView = "index";
  let optionsDetails = undefined;
  let isHomepage = true;

  if (parameter) {
    isHomepage = false;
    const data = index.content.find(item => {
      return item.options.some(option => option.id === parameter);
    });

    if (data) {
      optionsDetails = data.options.find(option => option.id === parameter);
      optionsDetails.title = `Lessons ${optionsDetails.label}`;
      renderView = "topicDetail";
    }
  }
  const response = optionsDetails || index;
  response.isHomepage = isHomepage;
  response.breadcrumb = buildBreadcrumb('', req.path, response.title)

  res.render(renderView, response);
});

export {router as indexRouter};
