import {notesAccordion} from "./components/notesAccordion.js";

if (/complete|interactive/.test(document.readyState)) {
	notesAccordion();
} else {
	document.addEventListener('DOMContentLoaded', notesAccordion);
}
