// ==UserScript==
// @name        amazon.ca
// @include     *://*.amazon.ca/*
// @run-at      document-end
// ==/UserScript==

(function main() {
	'use strict';

	// remove elements by tag name
	['AdHolder'].forEach((name) => {
		let els = document.getElementsByClassName(name)
		Array.from(els).forEach((el) => {
			el.parentNode.removeChild(el);
		});
	});

	console.info('Removed spam [Amazon]');
})();

document.addEventListener('touchstart', function () {
	main();
}, {passive: true});
// setTimeout(main, 1500);
