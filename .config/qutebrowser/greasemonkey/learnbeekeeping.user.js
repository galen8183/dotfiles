// ==UserScript==
// @name        learningbeekeeping.com dark mode fixes
// @include     *://learningbeekeeping.com/*
// @run-at      document-end
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	'use strict';

	GM_addStyle(`
#content, #top {
	background: unset;
	font-size: 1.6em;
}
	`)
})();

