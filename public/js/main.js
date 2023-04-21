(function () {
	'use strict';

	var example = () => console.log('The example component ran on the page');

	var start = () => {
	  example();
	};

	if (/complete|interactive/.test(document.readyState)) {
	  start();
	} else {
	  document.addEventListener('DOMContentLoaded', start);
	}

})();
//# sourceMappingURL=main.js.map
