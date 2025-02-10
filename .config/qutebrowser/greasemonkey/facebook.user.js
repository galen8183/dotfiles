// ==UserScript==
// @name        Remove NYT distractions
// @description Remove ads, offer popups, etc. on NY Times games
// @include     *://*.facebook.com/*
// @run-at      document-idle
// ==/UserScript==

function main() {
	'use strict';

	// remove elements by class
	['xzkaem6'].forEach((name) => {
		let els = document.getElementsByClassName(name)
		Array.from(els).forEach((el) => {
			el.parentNode.removeChild(el);
		});
	});

	console.info('[Facebook] Removed distractions');
}

document.addEventListener('dblclick', (evt) => { main(); }, {capture: false, passive: true})
