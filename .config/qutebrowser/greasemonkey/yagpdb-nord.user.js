// ==UserScript==
// @name        yagpdb.xyz
// @include     *://yagpdb.xyz/*
// @run-at      document-end
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	'use strict';

/* This work is released into the public domain under the terms
 * of the creative commons legal code CC0 1.0 Universal.
 *
 * Please review the LICENSE.md file at <https://github.com/l-zeuch/yag-nord>
 * for more information.
 */

/*
 * Set up the nord palette, as per
 * https://www.nordtheme.com/docs/colors-and-palettes
 */
	GM_addStyle(`
		:root {
		/* Polar Night */
		--nord0:  #2E3440;
		--nord1:  #3B4252;
		--nord2:  #434C5E;
		--nord3:  #4C566A;
	
		/* Snow Storm */
		--nord4:  #D8DEE9;
		--nord5:  #E5E9F0;
		--nord6:  #ECEFF4;
	
		/* Frost */
		--nord7:  #8FBCBB;
		--nord8:  #88C0D0;
		--nord9:  #81A1C1;
		--nord9-darker: hsl(210, 34%, 56%);
		--nord10: #5E81AC;
		--nord10-darker: hsl(213, 32%, 47%);
	
		/* Aurora */
		--nord11: #BF616A;
		--nord12: #D08770;
		--nord13: #EBCB8B;
		--nord14: #A3BE8C;
		--nord15: #B48EAD;
	}
	
		/* Base stuff */
		html.dark body, header {
			background-color: var(--nord0) !important;
			color: var(--nord4) !important;
		}
	
		p {
			color: var(--nord4) !important;
		}
	
		[class*="card"] {
			background-color: var(--nord1) !important;
		}
	
		[class*="shard-status-"] {
			border-radius: 5px !important;
			margin: 1px !important;
		}
	
		/* Navigation / Sidebar */
		[class*="sidebar-"], [class*="nano"] {
			background-color: var(--nord0) !important;
			color: var(--nord4) !important;
		}
	
	    /* These exclude anchors of the btn class, so that they appear and behave
	     * exactly like buttons, as they should.
	     */
	
		a:not(.btn) {
			color: var(--nord9) !important;
			transition-duration: 0.2s !important;
		}
	
		a:focus:not(.btn), a:hover:not(.btn) {
			background-color: transparent !important;
			color: var(--nord7) !important;
		}
	
		code {
			color: var(--nord7) !important;
		}
	
		h1, h2 {
			border-color: var(--nord10-darker) !important;
			color: var(--nord6) !important;
		}
	
		h3, h4 {
			color: var(--nord5) !important;
		}
	
		h5, h6 {
			color: var(--nord4) !important;
		}
	
		input:hover, input:focus,
		select:hover, select:focus,
		.btn-group > *:hover, .btn-group > *:focus {
			border: 1px solid var(--nord8) !important;
		}
	
		tbody > tr:nth-child(even) > * {
			background-color: var(--nord1) !important;
		}
	
		tbody > tr:nth-child(odd) > * {
			background-color: var(--nord2) !important;
		}
	
		.tgl-btn {
			border-color: var(--nord11) !important;
		}
	
		.tgl-btn::after {
			background-color: var(--nord11) !important;
		}
	
		.tgl.tgl-flat:checked+label {
			border-color: var(--nord14) !important;
		}
	
		.tgl.tgl-flat:checked+label::after {
			background-color: var(--nord14) !important;
		}
	
		/* Don't apply the above to tables inside hljs
		 * (the thing you get when expanding a cusom command),
		 * because that looks ugly
		 */
		table.hljs-ln > tbody > tr > * {
			background-color: transparent !important;
		}
	
		textarea {
			background-color: var(--nord0) !important;
			transition-duration: 0.2s !important;
		}
	
		textarea:focus, textarea:hover {
			border: 1px solid var(--nord8) !important;
		}
	
		thead > tr > * {
			background-color: var(--nord1) !important;
		}
	
		.alert-danger {
			background-color: var(--nord11) !important;
			border-color: var(--nord11) !important;
			color: var(--nord3) !important;
		}
	
		.alert-info {
			background-color: var(--nord8) !important;
			border-color: var(--nord8) !important;
			color: var(--nord3) !important;
		}
	
		.alert-warning {
			background-color: var(--nord13) !important;
			border-color: var(--nord13) !important;
			color: var(--nord3) !important;
		}
	
		.automod-rule-part-table > table > tbody > tr > * {
			background-color: var(--nord1) !important;
		}
	
		.bg-danger {
			background-color: var(--nord11) !important;
			color: var(--nord0) !important;
		}
	
		.bg-success {
			background-color: var(--nord14) !important;
			color: var(--nord0) !important;
		}
	
		.border-primary, .card-featured {
			border-color: var(--nord14) !important;
		}
	
		.btn-danger:active, .btn-warning:active,
		.btn-success:active, .btn-info:active, .btn-primary:active,
		.btn-secondary:active, .btn-tertiary:active, .btn-quarternary:active {
			box-shadow: 4px 4px 0px -2px var(--nord0) inset !important;
		}
	
		.btn-primary {
			background-color: var(--nord9) !important;
			border-color: var(--nord9) !important;
			color: var(--nord4) !important;
			transition-duration: 0.2s !important;
		}
	
		.btn-primary:hover, .btn-primary:focus {
			background-color: var(--nord9) !important;
			border-color: var(--nord9) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
		.btn-secondary {
			background-color: var(--nord8) !important;
			border-color: var(--nord8) !important;
			transition-duration: 0.2s !important;
		}
	
		.btn-secondary:hover, .btn-secondary:focus {
			background-color: var(--nord8) !important;
			border-color: var(--nord8) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
		.btn-tertiary {
			background-color: var(--nord10) !important;
			border-color: var(--nord10) !important;
			transition-duration: 0.2s !important;
		}
	
		.btn-tertiary:hover, .btn-tertiary:focus {
			background-color: var(--nord10) !important;
			border-color: var(--nord10) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
		.btn-quarternary {
			background-color: var(--nord10-darker) !important;
			border-color: var(--nord10-darker) !important;
			transition-duration: 0.2s !important;
		}
	
		.btn-quarternary:hover, .btn-quarternary:focus {
			background-color: var(--nord10-darker) !important;
			border-color: var(--nord10-darker) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
		.btn-info {
			background-color: var(--nord9-darker) !important;
			border-color: var(--nord9-darker) !important;
			transition-duration: 0.2s !important;
			color: var(--nord4) !important;
		}
	
		.btn-info:hover, .btn-info:focus {
			background-color: var(--nord9-darker) !important;
			border-color: var(--nord9-darker) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
	
		.btn-success {
			background-color: var(--nord14) !important;
			border-color: var(--nord14) !important;
			transition-duration: 0.2s !important;
		}
	
		.btn-success:hover, .btn-success:focus {
			background-color: var(--nord14) !important;
			border-color: var(--nord14) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
		.btn-warning {
			background-color: var(--nord13) !important;
			border-color: var(--nord13) !important;
			transition-duration: 0.2s !important;
		}
	
		.btn-warning:hover, btn-warning:focus {
			background-color: var(--nord13) !important;
			border-color: var(--nord13) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
		.btn-danger {
			background-color: var(--nord11) !important;
			border-color: var(--nord11) !important;
			border-width: 3px !important;
			transition-duration: 0.2s !important;
		}
	
		.btn-danger:hover, .btn-danger:focus {
			background-color: var(--nord11) !important;
			border-color: var(--nord11) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
		}
	
		.card-body .host-status > .row .node-row > .col-0 {
			flex: 0 0 23% !important;
			padding-left: 23px !important;
		}
	
		.card-title {
			background-color: var(--nord1) !important;
		}
	
		.cc-disabled,
		.cc-disabled > h2 > a {
			background-color: var(--nord3) !important;
			text-decoration: line-through !important;
		}
	
		.cc-panel {
			border: 5px solid var(--nord1) !important;
			border-radius: 5px !important;
			border-top: none !important;
		}
	
		.code.gotmplmd {
			background-color: var(--nord0) !important;
		}
	
		/* Front-Page */
		.highlight {
			border: 0px solid var(--nord1) !important;
		}
	
	    /* exclude pre.CodeMirror-line otherwise we have insane jank */
		.highlight, pre:not(.CodeMirror-line) {
			background-color: var(--nord0) !important;
			color: var(--nord4) !important;
			border-radius: 5px !important;
			padding: 1em !important;
		}
	
		pre > code {
			background-color: transparent !important;
		}
	
		.host-status > .node-row:nth-child(odd) {
			background-color: var(--nord2) !important;
		}
	
		/*
		 * code highlighting on expanded custom commands on the home tab
		 * for available scopes, refer to
		 * https://highlightjs.readthedocs.io/en/latest/css-classes-reference.html.
		 *
		 * For the actual colours as intended by Nord, we're basically copying
		 * https://github.com/arcticicestudio/nord-highlightjs, just trimmed down a little.
		 *
		 * For what we actually need to modify, refer to
		 * https://github.com/botlabs-gg/yagpdb/blob/master/customcommands/assets/customcommands.html#L186
		*/
		.hljs-keyword {
			color: var(--nord9) !important;
		}
	
		.hljs-literal {
			color: var(--nord9) !important;
		}
	
		.hljs-built-in {
			color: var(--nord7) !important;
		}
	
		.hljs-comment {
			color: var(--nord3) !important;
			filter: brightness(1.2) !important;
		}
	
		.hljs-string {
			color: var(--nord14) !important;
		}
	
		.hljs-number {
			color: var(--nord15) !important;
		}
	
		.hljs-name {
			color: var(--nord9) !important;
		}
	
		.indicator-danger::before {
			color: var(--nord11) !important;
		}
	
		.indicator-success::before {
			color: var(--nord14) !important;
		}
	
		/* Buttons */
		.input-group-text,
		input, select, .btn-group > * {
			background-color: var(--nord3) !important;
			border: 1px solid var(--nord3) !important;
			transition-duration: 0.2s !important;
		}
	
		.nav-children > li > a:hover, .nav-children > li > a:focus {
			background-color: var(--nord3) !important;
		}
	
		.nav-item,
		.nav-item > .nav-link, .nav-children {
			background-color: var(--nord1) !important;
		}
	
		/* Now we can safely modify the tabs listing */
		.nav-item:last-child > form > .nav-link {
			border-top: 3px solid var(--nord3) !important;
			background-color: var(--nord0) !important;
		}
	
		.nav-item:last-child > form > .nav-link:hover {
			border-top: 3px solid var(--nord7) !important;
			background-color: var(--nord1) !important;
			color: var(--nord7) !important;
		}
	
		/* reset the weird \"+\" button on tabs row */
		.nav-item:last-child > form > input,
		.nav-item:last-child > form > input:hover {
			border: none !important;
			padding: none !important;
			margin: none !important;
		}
	
		.nav-link {
			color: var(--nord4) !important;
		}
	
		.nav-main > .nav-active > a {
			box-shadow: 3px 0 0 var(--nord14) inset !important;
			background-color: var(--nord1) !important;
		}
	
		.nav-parent, .nav-expanded {
			background-color: var(--nord0) !important;
			color: var(--nord4) !important;
		}
	
		.nav-tabs > .nav-item > a {
			color: var(--nord4) !important;
			background-color: var(--nord0) !important;
			border-top-color: var(--nord3) !important;
		}
	
		.nav-tabs > .nav-item > a:hover,
		.nav-tabs > .nav-item .active {
			border-top-color: var(--nord7) !important;
			background-color: var(--nord1) !important;
			color: var(--nord7) !important;
		}
	
		.nav-tabs > .nav-item {
			background-color: var(--nord0) !important;
		}
	
		.notification-danger {
			background-color: var(--nord11) !important;
			color: var(--nord4) !important;
		}
	
		/* Notifications */
		.notification-success {
			background-color: var(--nord14) !important;
			color: var(--nord4) !important;
		}
	
		.page-header {
			background-color: var(--nord0) !important;
		}
	
		.popover {
			border-color: var(--nord0) !important;
		}
	
		.popover-body {
			background-color: var(--nord2) !important;
			color: var(--nord4) !important;
			border: none !important;
		}
	
		.popover-header {
			border-bottom: 3px solid var(--nord3) !important;
			background-color: var(--nord2) !important;
			color: var(--nord8) !important;
		}
	
		.question-tooltip {
			color: var(--nord15) !important;
		}
	
		.shard-low-events {
			background-color: var(--nord12) !important;
			border-color: var(--nord12) !important;
		}
	
		.shard-quick-details > p {
			line-height: 20px !important;
			color: var(--nord2) !important;
		}
	
		.shard-quick-details > p:nth-child(1) {
			text-align: left !important;
			font-weight: bold !important;
		}
	
		.shard-quick-details > p:nth-child(2) {
			text-align: right !important;
			font-weight: bold !important;
			text-shadow: none !important;
			color: var(--nord3) !important;
		}
	
		.shard-quick-details {
			filter: none !important;
			-webkit-filter: none !important;
		}
	
		.shard-status-connecting {
			border-color: var(--nord13) !important;
			background-color:  var(--nord13) !important;
			border-width: 3px !important;
		}
	
		.shard-status-disconnected {
			background-color: var(--nord11) !important;
			border-color: var(--nord11) !important;
		}
	
		.shard-status-identifying {
			border-color: var(--nord13) !important;
			background-color:  var(--nord13) !important;
			border-width: 3px !important;
		}
	
		.shard-status-ready {
			background-color: var(--nord14) !important;
			border-color: var(--nord14) !important;
			border-width: 3px !important;
		}
	
		.shard-status-resuming {
			border-color: var(--nord13) !important;
			background-color:  var(--nord13) !important;
			border-width: 3px !important;
		}
	
		.shard:hover {
			border-color: var(--nord8) !important;
			border-width: 3px !important;
		}
	
		.tab-content {
			background-color: var(--nord1) !important;
		}
	
		.text-danger {
			color: var(--nord11) !important;
		}
	
		.text-success {
			color: var(--nord14) !important;
		}
	
		.tooltip > .tooltip-inner {
			background-color: var(--nord0) !important;
			color: var(--nord4) !important;
			box-shadow: 4px 4px 0px 2px var(--nord0) !important;
			border: 1px solid var(--nord9) !important;
		}
	
		.tooltip {
			opacity: 0.9 !important;
		}
	
		.ui-pnotify > span {
			border-color: var(--nord15) !important;
		}
	
		/* CodeMirror, blatantly copied from https://codemirror.net/5/theme/nord.css */
		.CodeMirror { background: #2e3440!important; color: #d8dee9!important; }
		div.CodeMirror-selected { background: #434c5e!important; }
		.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #3b4252!important; }
		.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #3b4252!important; }
		.CodeMirror-gutters { background: #2e3440!important; border-right: 0px!important; }
		.CodeMirror-guttermarker { color: #4c566a!important; }
		.CodeMirror-guttermarker-subtle { color: #4c566a!important; }
		.CodeMirror-linenumber { color: #4c566a!important; }
		.CodeMirror-cursor { border-left: 1px solid #f8f8f0!important; }
		
		span.cm-comment { color: #4c566a!important; }
		span.cm-atom { color: #b48ead!important; }
		span.cm-number { color: #b48ead!important; }
		
		span.cm-comment.cm-attribute { color: #97b757!important; }
		span.cm-comment.cm-def { color: #bc9262!important; }
		span.cm-comment.cm-tag { color: #bc6283!important; }
		span.cm-comment.cm-type { color: #5998a6!important; }
		
		span.cm-property, span.cm-attribute { color: #8FBCBB!important; }
		span.cm-keyword { color: #81A1C1!important; }
		span.cm-builtin { color: #81A1C1!important; }
		span.cm-string { color: #A3BE8C!important; }
		
		span.cm-variable { color: #d8dee9!important; }
		span.cm-variable-2 { color: #d8dee9!important; }
		span.cm-variable-3, span.cm-type { color: #d8dee9!important; }
		span.cm-def { color: #8FBCBB!important; }
		span.cm-bracket { color: #81A1C1!important; }
		span.cm-tag { color: #bf616a!important; }
		span.cm-header { color: #b48ead!important; }
		span.cm-link { color: #b48ead!important; }
		span.cm-error { background: #bf616a!important; color: #f8f8f0!important; }
		
		.CodeMirror-activeline-background { background: #3b4252!important; }
		.CodeMirror-matchingbracket {
			text-decoration: underline!important;
			color: white !important;
		}
	`)
})();

