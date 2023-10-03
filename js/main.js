import {notesAccordion} from "./components/notesAccordion.js";


const init = () => {
	console.log('init');
};

if (/complete|interactive/.test(document.readyState)) {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
