// ==UserScript==
// @name        musicbrainz.org
// @include     *://musicbrainz.org/*
// @include     *://beta.musicbrainz.org/*
// @run-at      document-end
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	'use strict';
	GM_addStyle(`
		table.tbl thead {
			background: none;
		}

		.ui-widget-content {
			background: #2e3440;
		}
	`);
	console.info('[MusicBrainz] added user CSS');
})();
