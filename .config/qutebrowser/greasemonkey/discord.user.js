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
			--background-base-low: #2E3440 !important;
			--background-base-lower: #2E3440 !important; /* chat */
			--background-base-lowest: #242933 !important; /* channel list */
			--bg-base-tertiary: #242933 !important; /* channel list */
			--background-surface-high: #3B4252 !important; /* message embed */
			--header-secondary: #616E87 !important; /* message reply preview */
			--chat-background-default: #3B4252 !important; /* message input textarea */

			--font-primary: Monospace;
			font-size: 15px !important;
		}

		/* smaller message input textarea */
		.visual-refresh {
			--custom-channel-textarea-text-area-height: calc(32px + var(--space-xs));
		}

		/* reduce margin to bottom of window */
		.container_c48ade {
			--custom-chat-input-margin-bottom: 14px !important;
		}

		/* insert colon between username and message */
		.username_c19a55::after {
			content: ":";
			color: white;
		}
	`);

	console.info('[Discord] added user CSS');
})();
