# Documentation:
#   qute://help/configuring.html
#   qute://help/settings.html
config.load_autoconfig(False)

# - always: Always show a confirmation.
# - multiple-tabs: Show a confirmation if multiple tabs are opened.
# - downloads: Show a confirmation if downloads are running
# - never: Never show a confirmation.
c.confirm_quit = ['multiple-tabs', 'downloads']

# debloat
c.content.autoplay = False
#c.content.canvas_reading = False
c.qt.workarounds.disable_hangouts_extension = True
c.content.geolocation = False
c.content.notifications.enabled = False
c.content.prefers_reduced_motion = True

c.content.webgl = True

c.content.cookies.accept = 'no-3rdparty'
config.set('content.cookies.accept', 'all', 'chrome-devtools://*')
config.set('content.cookies.accept', 'all', 'devtools://*')

# disallow, allow-from-user-interaction, allow-all
c.content.unknown_url_scheme_policy = 'disallow'

# User agent to send.
c.content.headers.user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/{webkit_version} (KHTML, like Gecko) {upstream_browser_key}/{upstream_browser_version}'
c.content.headers.accept_language = 'en-CA,en;q=0.5'

# Enable the ad/host blocker, use both Brave's ABP-style adblocker and host
# blocking
c.content.blocking.enabled = True
c.content.blocking.method = "both"
c.content.blocking.adblock.lists = [
    'file:///home/galen/.config/qutebrowser/adblock',
    'https://easylist.to/easylist/easylist.txt',
    'https://easylist.to/easylist/easyprivacy.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/annoyances-cookies.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/annoyances-others.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/filters.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/privacy.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/unbreak.txt',
    'https://github.com/AdguardTeam/AdguardFilters/raw/master/TrackParamFilter/sections/general_url.txt',
    'https://github.com/AdguardTeam/AdguardFilters/raw/master/TrackParamFilter/sections/specific.txt',
    'https://github.com/AdguardTeam/AdguardFilters/raw/master/AnnoyancesFilter/Popups/sections/popups_general.txt',
    'https://github.com/AdguardTeam/AdguardFilters/raw/master/AnnoyancesFilter/Popups/sections/popups_specific.txt',
    'https://github.com/AdguardTeam/AdguardFilters/raw/master/AnnoyancesFilter/Popups/sections/antiadblock.txt',
    'https://github.com/AdguardTeam/AdguardFilters/raw/master/AnnoyancesFilter/Other/sections/annoyances.txt',
    'https://github.com/AdguardTeam/AdguardFilters/raw/master/AnnoyancesFilter/Other/sections/tweaks.txt',
    'https://pgl.yoyo.org/adservers/serverlist.php?hostformat=adblockplus&showintro=1',
    'https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt',
]

# ask, ask-block-thirdparty, block, load-insecurely
c.content.tls.certificate_errors = 'ask-block-thirdparty'

# Which interfaces to expose via WebRTC.
c.content.webrtc_ip_handling_policy = 'disable-non-proxied-udp'

# Shrink the completion to be smaller than the configured size if there
# are no scrollbars.
c.completion.shrink = True

# Number of URLs to show in the web history
c.completion.web_history.max_items = 1000

# Which categories to show (in which order) in the :open completion.
# searchengines, quickmarks, bookmarks, history, filesystem
c.completion.open_categories = ['searchengines', 'quickmarks', 'bookmarks',
                                'history']

# What to display in the download filename input: 'path', 'filename', or 'both'
c.downloads.location.suggestion = 'both'
c.downloads.location.remember = True
# Duration (in milliseconds) to wait before removing finished downloads.
#c.downloads.remove_finished = 5000

c.editor.command = ['st', '-e', 'nvim', '{}']
# Command (and arguments) to use for selecting file(s) in forms.
#c.fileselect.single_file.command = ['st', '-e', '']
#c.fileselect.multiple_files.command = ['st', '-e', '']
#c.fileselect.folder.command = ['st', '-e', '']

# Scatter hint key chains
#c.hints.scatter = False

# Time (in milliseconds) from pressing a key to seeing the keyhint dialog.
c.keyhint.delay = 500

# When/how to show the scrollbar.
c.scrolling.bar = 'when-searching'

# Don't switch between tabs using the mouse wheel.
c.tabs.mousewheel_switching = False

# Padding (in pixels) around text for tabs.
c.tabs.padding = {'bottom': 1, 'left': 1, 'right': 3, 'top': 1}

# Force pinned tabs to stay at fixed URL
c.tabs.pinned.frozen = False

# Page to open if :open -t/-b/-w is used without URL.
c.url.default_page = 'about:blank'
c.url.start_pages = 'qute://version'

# URL segments where `:navigate increment/decrement` will search for a number.
# host, port, path, query, anchor
c.url.incdec_segments = ['path', 'query', 'anchor']

# Search engines which can be used via the address bar.
c.url.searchengines = {
    'DEFAULT': 'https://duckduckgo.com/?q={}',
    'bc': 'https://bandcamp.com/search?q={}',
    'di': 'https://en.wiktionary.org/wiki/Special:Search?search={}',
    'gh': 'https://github.com/search?q={}',
    'mw': 'https://mwmbl.org/?q={}',
    'om': 'https://www.openstreetmap.org/search?query={}',
    'ot': 'https://taginfo.openstreetmap.org/search?q={}',
    'ow': 'https://wiki.openstreetmap.org/wiki/Special:Search?search={}',
    'sp': 'https://www.startpage.com/do/search?query={}',
    'ta': 'https://ctan.org/search?phrase={}',
    'ug': 'https://www.ultimate-guitar.com/search.php?value={}',
    'wa': 'https://web.archive.org/web/*/{unquoted}',
    'wc': 'https://commons.wikimedia.org/wiki/Special:Search?search={}',
    'wd': 'https://www.wikidata.org/wiki/Special:Search?search={}',
    'wi': 'https://en.wikipedia.org/wiki/Special:Search?search={}',
    'yt': 'https://youtube.com/results?search_query={}',
    'josm': 'https://josm.openstreetmap.de/search?q={}',
}

# Open searchengine base URL if no search phrase given
c.url.open_base_url = True

c.url.yank_ignored_parameters = [
    'ref', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
    'utm_content', 'utm_name', 'from', 'search_item_id', 'search_item_type',
    'search_match_part', 'search_page_id', 'search_page_no', 'search_rank',
    'search_sig', 'pp', 'si', 'ab_channel', 'igshid', 'i_source', 'i_medium',
    'i_campaign', '__cft__', '__tn__'
]

c.zoom.default = '80%'
c.zoom.levels = ['25%', '33%', '50%', '67%', '75%', '80%', '90%', '100%',
                 '110%', '125%', '150%', '175%', '200%', '250%', '300%',
                 '400%', '500%']

# Background color of unselected tabs.
c.colors.tabs.odd.bg = '#444444'
c.colors.tabs.even.bg = '#252525'

# Render all web contents using a dark theme.
#c.colors.webpage.preferred_color_scheme = 'dark'
c.colors.webpage.darkmode.enabled = True
c.colors.webpage.darkmode.algorithm = 'lightness-hsl'
c.colors.webpage.darkmode.policy.images = 'never'
config.set('colors.webpage.darkmode.enabled', False, 'https://canary.discord.com/*')
config.set('colors.webpage.darkmode.enabled', False, 'https://adventofcode.com/*')

# Default font size (in pixels) for regular text.
c.fonts.web.size.default = 14

# media
config.bind(';v', 'hint links spawn mpv {hint-url}')
config.bind(';m', 'hint links spawn yt-mpv {hint-url}')
config.bind(';i', 'hint images spawn sh -c "curl -Lo /tmp/qb-img \'{hint-url}\' && nsxiv /tmp/qb-img"')

# util
config.bind('pP', 'open -t -- {clipboard}')
config.bind('<Ctrl+a>', 'mode-enter caret')
config.bind(';;', 'hint all right-click')
config.bind('<Ctrl+j>', 'tab-move +')
config.bind('<Ctrl+k>', 'tab-move -')
config.bind('<Alt+p>', 'spawn --userscript qute-pass -U secret -u "username: (.+)" -d dmenu')
config.bind('<Ctrl-x>', 'download-open')

# darkmode
config.bind('tdh', 'config-cycle -p -t -u *://{url:host}/* colors.webpage.darkmode.enabled ;; reload')
config.bind('tdu', 'config-cycle -p -t -u {url} colors.webpage.darkmode.enabled ;; reload')
config.bind('tdH', 'config-cycle -p -t -u *://*.{url:host}/* colors.webpage.darkmode.enabled ;; reload')
config.bind('tDh', 'config-cycle -p -u *://{url:host}/* colors.webpage.darkmode.enabled ;; reload')
config.bind('tDu', 'config-cycle -p -u {url} colors.webpage.darkmode.enabled ;; reload')
config.bind('tDH', 'config-cycle -p -u *://*.{url:host}/* colors.webpage.darkmode.enabled ;; reload')
# ABP/host blocking
config.bind('tbh', 'config-cycle -p -t -u *://{url:host}/* content.blocking.enabled ;; reload')
config.bind('tbu', 'config-cycle -p -t -u {url} content.blocking.enabled ;; reload')
config.bind('tbH', 'config-cycle -p -t -u *://*.{url:host}/* content.blocking.enabled ;; reload')
config.bind('tBh', 'config-cycle -p -u *://{url:host}/* content.blocking.enabled ;; reload')
config.bind('tBu', 'config-cycle -p -u {url} content.blocking.enabled ;; reload')
config.bind('tBH', 'config-cycle -p -u *://*.{url:host}/* content.blocking.enabled ;; reload')

# only close active window
config.bind('ZQ', 'close')
