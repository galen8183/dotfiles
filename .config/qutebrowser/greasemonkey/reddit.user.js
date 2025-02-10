// ==UserScript==
// @name        Reddit custom CSS
// @namespace   https://github.com/olmokramer
// @description Custom CSS for *.reddit.com
// @include     *://*.reddit.com
// @run-at      document-start
// @version     2
// @author      Olmo Kramer
// ==/UserScript==

(function() {
	'use strict';

	alert('loading reddit CSS');
	document.addEventListener('readystatechange', function onReadyStateChange() {
		if (document.readyState == 'interactive') {
			const style = document.createElement('style');
			document.head.appendChild(style);
			style.innerHTML = `

/* Sticky header. */
#header {
	position: sticky !important;
	top: 0 !important;
	z-index: 1000 !important;
}

#sr-header-area {
	position: relative !important;
	z-index: 1000 !important;
}

			`;
		}
	});
	console.log('done loading reddit CSS');
})();
