import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import {indexRouter} from './routes/index.js';
import {accessibilityTreeRouter} from './routes/accessibilityTree.js';
import {showAndHideElementsRouter} from "./routes/showAndHideElements.js";
import {focusManagementRouter} from "./routes/focusManagement.js";
import {ariaRouter} from "./routes/aria.js";
import {screenReadersRouter} from "./routes/screenReaders.js";
import {semanticStructureAndNavigationRouter} from "./routes/semanticStructureAndNavigation.js";
import {ImagesRouter} from "./routes/images.js";
import {SVGRouter} from "./routes/SVG.js";
import {otherVisualConsiderationsRouter} from "./routes/otherVisualConsiderations.js";
import {testsRouter} from "./routes/tests.js";
import {auditRouter} from "./routes/audit.js";

import hbs from "hbs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 3001;

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

// Define the custom Handlebars helper
hbs.registerHelper('anyNotDisabled', function(listOfUrls, options) {
    for (const example of listOfUrls) {
        if (!example.hide) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
});

hbs.registerHelper('isArray', function(value) {
    return Array.isArray(value);
});


app.use('/accessibility-tree', accessibilityTreeRouter);
app.use('/show-and-hide-elements', showAndHideElementsRouter);
app.use('/focus-management', focusManagementRouter);
app.use('/aria', ariaRouter);
app.use('/screen-readers', screenReadersRouter);
app.use('/semantic-structure-navigation', semanticStructureAndNavigationRouter);
app.use('/images', ImagesRouter);
app.use('/SVG', SVGRouter);
app.use('/visual-considerations', otherVisualConsiderationsRouter);
app.use('/tests', testsRouter);
app.use('/audit', auditRouter);

app.use('/', indexRouter);


app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
