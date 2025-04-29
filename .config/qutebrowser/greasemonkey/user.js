// ==UserScript==
// @name    global
// @include *
// @run-at  document-start
// @grant   GM_addStyle
// ==/UserScript==

'use strict';

(function () {
	// use nord0 as default BG
	document.addEventListener('DOMContentLoaded', (evt) => {
		GM_addStyle(`
		* { font-family: monospace; }

		html body {
			background-color: #2E3440 !important;
			font-size: 16px;
		}

		/* mediawiki tweaks */
		.mw-page-container { background-color: #2E3440; }
		.mw-body { background-color: #2E3440; }
		#mw-page-base {
			background-color: #242933;
			background-image: unset;
		}
		.valuedescription { background-color: #242933 !important; }
		.wikitable { background-color: #3B4252; }
		`);
	});

	// remove youtube embed iframes
	// TODO: doesn't work
	window.addEventListener('message', (evt) => {
		if (evt.data.id === 'yt-replacer') {
			if (evt.data.found) {
				replace(evt.data);
				return;
			}

			console.log('[YouTube] attempting to find player iframe');
			findFrame(evt);
		}
	});
})();

function replace(data) {
	const replacement = document.createElement('a');
	replacement.innerText = data.title;
	replacement.setAttribute('style', 'font-size: 20px;');
	replacement.setAttribute('href', 'https://www.youtube.com/watch?v=' + data.vID);

	const doc = window.frames[data.idx].contentWindow.document;
	doc.open();
	doc.write(replacement);
	console.info('[YouTube] replaced player', data.vID);
}

function findFrame(evt) {
	if (window.location.toLocaleString().startsWith('https://www.youtube.com/embed')) {
		evt.data.found = true
		console.log("[YouTube] found iframe", window);
		top.postMessage(evt.data, '*');
		return;
	}

	for (let i = 0; i < window.frames.length; i++) {
		evt.data.idx = i;
		const frame = window.frames[i];
		frame.postMessage(evt.data, '*');
	}
}
