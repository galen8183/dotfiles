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

		.buttons a, .buttons button {
			background-color: #434c5e;
		}

		div.mp, span.mp, table.tbl tr.mp td, table.tbl tr.mp th, tr.diff-changes {
			background: #5e81ac !important;
		}

		div.tabs ul li.sel a, div.tabs ul li.sel a:focus, div.tabs ul li.sel a:hover {
			background-color: #5e81ac;
			border-color: #5e81ac;
		}

		.ui-state-focus, .ui-state-hover, .ui-widget-content .ui-state-focus, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-focus, .ui-widget-header .ui-state-hover {
			background: #4c566a;
		}
		table.tbl tr.even td, table.tbl tr.even th {
			background: #4c566a;
		}
		}

		div.autocomplete2 ul, ul.ui-widget-content {
			background: #3b4252;
			li {
				background: #3b4252;
			}
			li.highlighted {
				background: #4c566a;
			}
		}

		.header .right ul.menu>li .menu-header, .header .right ul.menu>li>a {
			color: #b48ead;
		}
		.header .right ul.menu li.fake-active, .header .right ul.menu li:active, .header .right ul.menu li:hover {
			background-color: #3b4252;
		}
		legend, h2 {
			color: #b48ead !important;
		}
		.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited {
			color: #3b4252;
		}
		.header .right ul.menu li ul, .header .right ul.menu li ul li {
			background-color: #3b4252;
		}

		.ui-tabs .ui-tabs-nav {
			background: #3b4252;
			li {
				background: #2e3440;
			}
		}

		.search-help, .bubble {
			background-color: #3b4252;
		}

		.edit-header a {
			color: #d8dee9;
			text-decoration: underline;
		}

		.edit-list {
			background-color: #3b4252;
		}
		.edit-list .edit-actions {
			background-color: #434c5e;
		}
		.edit-add, .open.edit-add {
			background-color: #a3be8c;
		}
		.open.edit-remove {
			background-color: #d08770;
		}
		.open.edit-edit {
			background-color: #ebcb8b;
		}
		.edit-notes .edit-note h3 {
			background-color: #434c5e;
		}

		table.details td span.old, table.details td.old {
			background: #bf616a;
		}
		table.details td span.new, table.details td.new {
			background: #a3be8c;
		}

		input.lookup-performed, input.success {
			background: #5e81ac;
		}

		#release-editor #recordings fieldset table tr.even td {
			background-color: #3b4252;
		}
	`);
	console.info('[MusicBrainz] added user CSS');
})();
