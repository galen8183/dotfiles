// ==UserScript==
// @name        Remove YT distractions
// @description Remove inline ads, shorts, promotional youtube series, etc.
// @include     *://www.youtube.com/*
// @run-at      document-idle
// ==/UserScript==

function replacePlayer() {
	'use strict';

	// replace embed with video URL
	let player = document.getElementById('player')
	if (player) {
		const urlParams = new URL(window.location.toLocaleString()).searchParams;
		const replacement = document.createElement('a');
		replacement.innerText = document.title;
		replacement.setAttribute('style', 'font-size: 20px;');

		let vID = ''
		if (window.location.pathname.startsWith('/watch')) {
			vID = urlParams.get('v');

			player.parentNode.replaceChild(replacement, player);
			console.info('Replaced YouTube player', vID);
		} else if (window.location.pathname.startsWith('/embed')) {
			vID = window.location.pathname.replace('/embed/', '');
			top.postMessage({'id': 'yt-replacer', 'vID': vID, 'title': document.title}, '*');
		} else {
			console.warn('Failed finding youtube video ID!');
			return;
		}

		replacement.setAttribute('href', 'https://www.youtube.com/watch?v='+vID);
		player.parentNode.replaceChild(replacement, player);
	}
}

function onScroll() {
	// remove elements by ID
	['standalone-header', 'standalone-footer', 'masthead-ad'].forEach((id) => {
		let el = document.getElementById(id)
		if (el) {
			el.parentNode.removeChild(el);
		}
	});

	// remove elements by tag name
	['ytd-ad-slot-renderer', 'ytd-rich-section-renderer', 'ytd-reel-shelf-renderer'].forEach((name) => {
		let els = document.getElementsByTagName(name)
		Array.from(els).forEach((el) => {
			el.parentNode.removeChild(el);
		});
	});

	console.info('Removed distractions [YouTube]');
}

(async function () {
	if (window.location.pathname.startsWith('/watch') || window.location.pathname.startsWith('/embed')) {
		while (document.getElementById('player')) {
			try { replacePlayer(); } catch (e) { console.log(e); }
			await new Promise(r => setTimeout(r, 2000));
		}
		onScroll();
	} else {
		onScroll();
		document.addEventListener('scroll', (evt) => { onScroll(); }, {capture: false, passive: true});
	}
})();
