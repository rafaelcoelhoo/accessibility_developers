(function () {
	'use strict';

	var init = () => {
	  console.log('init');
	};

	if (/complete|interactive/.test(document.readyState)) {
	  init();
	} else {
	  document.addEventListener('DOMContentLoaded', init);
	}

})();
//# sourceMappingURL=main.js.map
