// ==UserScript==
// @name     OSM Analysis Tools
// @include  https://www.openstreetmap.org/*
// @grant    GM_addStyle
// @run-at   document-end
// ==/UserScript==

"use strict";

function style() {
	GM_addStyle(`
		[data-bs-theme=dark] {
			--bs-body-color: #242933 !important;
			--bs-body-bg: #2E3440 !important;
		}
	`);
}

function inject() {
	const loc = location.pathname.match(/^\/(changeset|relation|way|node|user)\/([^\/?&#]+)/);
	if (!loc) {
		return
	}

	const [, type, ref] = loc;
	let details

	if (type !== "user") {
		let browse = document.querySelector(".browse-section");
		browse.insertAdjacentHTML("afterbegin", "<ul></ul>");
		details = browse.querySelector("ul");
	} else {
		details = document.querySelector(".secondary-actions > ul");
	}

	if (type === "user") {
		let uid = document.querySelector("head").dataset.user;
		for (const li of details.children) {
			const child = li.firstElementChild
			if (!child) { continue; }
			if (child.textContent !== "Report this User") {
				continue;
			}

			const params = new URL(child.getAttribute("href")).searchParams;
			uid = params.get("reportable_id");
		}

		details.insertAdjacentHTML("afterbegin",
			`<li>UID: ${uid}</li>` +
			`<li><a href="https://hdyc.neis-one.org/?${ref}">HDYC</a></li>`
		);
	}

	if (type === "changeset") {
		details.insertAdjacentHTML("afterbegin",
			`<li><a href="https://overpass-api.de/achavi?changeset=${ref}">Achavi</a></li>` +
			`<li><a href="https://osmlab.github.io/changeset-map/#${ref}">OSM Lab Changeset Map</a></li>`
		);
	}

	if (["node", "way", "relation", "changeset"].includes(type)) {
		details.insertAdjacentHTML("afterbegin",
			`<li><a href="https://facilmap.org/#q=${type}%20${ref}">Open on FacilMap</a></li>`);
	}

	if (["node", "way", "relation"].includes(type)) {
		details.insertAdjacentHTML("afterbegin",
		`<li><a href="https://osmlab.github.io/osm-deep-history/#/${type}/${ref}">OSM Deep History</a></li>`);
	}

	if (["way", "relation"].includes(type)) {
		details.insertAdjacentHTML("afterbegin",
			`<li><a href="https://facilmap.org/#q=blame%20${type}%20${ref}">Blame on FacilMap</a></li>`);
	}
}

function callback(muts) {
	if (!muts[0].addedNodes.length) {
		return
	}

	inject();
}

(function () {
	style();
	inject();

	const loader = document.getElementById("sidebar_content");
	if (!loader) {
		return
	};

	const observer = new MutationObserver(callback);
	observer.observe(loader, { childList: true });
})();
