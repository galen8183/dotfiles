// ==UserScript==
// @name        discord.com
// @include     *://*.discord.com/channels/*
// @run-at      document-end
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	'use strict';
	GM_addStyle(`
		:root {
			--custom-chat-input-margin-bottom: 0px;
			--custom-app-top-bar-height: 0px;

			--font-primary: Monospace;
			font-size: 15px;

			--custom-chat-input-margin-bottom: 0px;
			--custom-channel-textarea-text-area-height: calc(32px + var(--space-xs));

			--theme-base-color: #2E3440;
		}

		.theme-dark {
			--background-base-low: #2E3440;
			--background-base-lower: #2E3440; /* chat */
			--background-base-lowest: #242933; /* channel list */
			--background-surface-high: #3B4252; /* message embed */
			--background-surface-higher: #3B4252; /* context menus */
			--background-surface-highest: #3B4252; /* context menus */
			--background-message-hover: #3B4252;
			--chat-background-default: #3B4252;
			--header-secondary: #616E87; /* message reply preview */
		}

		/* hide top bar */
		.c38106a3f0c3ca76-bar {
			display: none;
		}

		/* insert colon between username and message */
		span.c19a557985eb7793-username::after {
			content: ":";
			color: white;
		}

		/* reduce chat input height */
		div._0923f156a0410684-attachWrapper {
			padding: 4px;
		}

		/* hide useless buttons */
		div[aria-label="Send a gift"] {
			display: none;
		}
		div[aria-label="Open sticker picker"] {
			display: none;
		}
		div[aria-label="Apps"] {
			display: none;
		}
	`);
	console.info('[Discord] added user CSS');
})();
