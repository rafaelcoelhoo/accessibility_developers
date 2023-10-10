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
  const moduleId = req.query.moduleId;
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
      optionsDetails.title = `${optionsDetails.label} Lessons`;
      renderView = "topicDetail";
    }
  }

  if (moduleId) {
    isHomepage = false;
    optionsDetails = index.content.find(item => item && item?.id === moduleId);
    optionsDetails.isModule = !!moduleId;
    renderView = "module";
  }

  const response = optionsDetails || index;
  response.isHomepage = isHomepage;
  response.breadcrumb = buildBreadcrumb(parameter, req.path, response.title, moduleId, true)

  res.render(renderView, response);
});

export {router as indexRouter};
