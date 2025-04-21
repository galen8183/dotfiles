// ==UserScript==
// @name        nytimes.com
// @include     *://*.nytimes.com/*
// @run-at      document-idle
// ==/UserScript==

function main() {
	'use strict';

	// remove elements by ID
	['standalone-header', 'standalone-footer', 'modal-overlay',
	 'portal-toolbar-forum-tooltip', 'archiveAwareness-dialog',
	 'cache-safe-games-sale-banner-a'].forEach((id) => {
		let el = document.getElementById(id)
		if (el) {
			el.parentNode.removeChild(el);
		}
	});

	// remove elements by class
	['pz-ad-box', 'Ad-module_adContainer__ZAFEc', 'Ad-module_hasAdLabel__IXofl'].forEach((name) => {
		let els = document.getElementsByClassName(name)
		Array.from(els).forEach((el) => {
			el.parentNode.removeChild(el);
		});
	});

	console.info('Removed distractions [NYTimes]');
}

main()
document.addEventListener('click', (evt) => { main(); }, {capture: false, passive: true})
