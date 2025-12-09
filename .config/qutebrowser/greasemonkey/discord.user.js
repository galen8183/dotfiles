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
			--custom-app-top-bar-height: 0px;
			--custom-chat-input-margin-bottom: 0px !important;

			--font-primary: Monospace;
			font-size: 15px !important;
		}

		* {
			--theme-base-color: #2E3440 !important;

			--background-base-low: #2E3440 !important;
			--background-base-lower: #2E3440 !important; /* chat */
			--background-base-lowest: #242933 !important; /* channel list */
			--background-surface-high: #3B4252 !important; /* message embed */
			--background-surface-higher: #3B4252 !important; /* context menus */
			--background-surface-highest: #3B4252 !important; /* context menus */
			--background-message-hover: #3B4252 !important;
			--bg-base-tertiary: #242933 !important; /* channel list */
			--chat-background-default: #3B4252 !important;
			--header-secondary: #616E87 !important; /* message reply preview */
		}

		/* smaller message input textarea */
		.visual-refresh {
			--custom-channel-textarea-text-area-height: calc(32px + var(--space-xs));
		}

		/* reduce chat spacing */
		.attachWrapper__0923f {
			padding: 4px 0 0 2px !important;
		}
		.align-chat-input .scrollerSpacer__36d07 {
			height: 30px !important;
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
