import {example} from "./components/example";
import {modal} from "./components/modal.js";

const start = () => {
	example();
	modal()
};

if (/complete|interactive/.test(document.readyState)) {
	start();
} else {
	document.addEventListener('DOMContentLoaded', start);
}
