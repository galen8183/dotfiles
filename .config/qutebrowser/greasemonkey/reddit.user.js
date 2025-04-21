// ==UserScript==
// @name        reddit.com
// @include     *://*.reddit.com/*
// @run-at      document-end
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	GM_addStyle(`
	body {
		background-color: #2E3440;
	}

	#header,#sr-header-area {
		background-color: #3B4252;
	}

	.thing .title {
		color: #D8DEE9;
	}
	`);

	// remove elements by class name
	['promoted', 'promotedlink'].forEach((name) => {
		let els = document.getElementsByClassName(name)
		Array.from(els).forEach((el) => {
			el.parentNode.removeChild(el);
		});
	});
	
	console.log('[Reddit] Removed promotions');
})();
