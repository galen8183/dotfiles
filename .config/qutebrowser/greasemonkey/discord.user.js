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
			--font-primary: Monospace;
			font-size: 15px;

			--custom-app-top-bar-height: 0px;
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
		.bar_c38106 {
			display: none;
		}

		/* remove custom username font, insert colon after */
		span.username_c19a55 {
			font-family: Monospace;
			&:after {
				content: ":";
				color: white;
			}
		}

		/* reduce chat input height */
		div.attachWrapper__0923f {
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
