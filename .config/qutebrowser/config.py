# qute://help/configuring.html
# qute://help/settings.html

# load config-cycle set options
config.load_autoconfig(True)

c.confirm_quit = ['multiple-tabs', 'downloads']

c.completion.open_categories = ['searchengines', 'quickmarks',
                                'bookmarks', 'history']
c.completion.shrink = True
c.completion.web_history.max_items = 2000
c.keyhint.delay = 500
c.scrolling.bar = 'when-searching'
c.tabs.mousewheel_switching = False
c.tabs.padding = {'bottom': 1, 'left': 1, 'right': 3, 'top': 1}
c.tabs.pinned.frozen = False
c.url.default_page = 'about:blank'
c.url.incdec_segments = ['path', 'query', 'anchor'] # :navigate URL segments
c.url.start_pages = 'qute://version'
c.downloads.location.suggestion = 'both'
c.downloads.location.remember = True

c.editor.command = ['st', '-e', 'nvim', '{}']

# Search engines which can be used via the address bar.
c.url.searchengines = {
    'DEFAULT': 'https://duckduckgo.com/?q={}',
    'bs': 'https://baresearch.org/search?q={}',
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
c.url.open_base_url = True # open searchengine base URL if no search phrase

c.zoom.default = '80%'
c.zoom.levels = ['25%', '33%', '50%', '67%', '75%', '80%', '90%', '100%',
                 '110%', '125%', '150%', '175%', '200%', '250%', '300%',
                 '400%', '500%']

# Background color of unselected tabs.
c.colors.tabs.odd.bg = '#444444'
c.colors.tabs.even.bg = '#252525'

# Default font size (in pixels) for regular text.
c.fonts.web.size.default = 14

# media
config.bind(';v', 'hint links spawn mpv {hint-url}')
config.bind(';m', 'hint links spawn yt-mpv {hint-url}')
config.bind(';i', 'hint images spawn sh -c "curl -Lo /tmp/qb-img \'{hint-url}\' && nsxiv /tmp/qb-img"')

# general
config.bind('pP', 'open -t -- {clipboard}')
config.bind('<Ctrl+a>', 'mode-enter caret')
config.bind(';;', 'hint all right-click')
config.bind('<Ctrl+j>', 'tab-move +')
config.bind('<Ctrl+k>', 'tab-move -')
config.bind('<Alt+p>', 'spawn --userscript qute-pass -U secret -u "username: (.+)" -d dmenu')
config.bind('<Ctrl-x>', 'download-open')
config.bind('ZQ', 'close')

# global dark theme
c.colors.webpage.preferred_color_scheme = 'dark'
c.colors.webpage.darkmode.enabled = True
c.colors.webpage.darkmode.algorithm = 'lightness-hsl'
c.colors.webpage.darkmode.policy.images = 'never'
config.bind('tdh', 'config-cycle -p -t -u *://{url:host}/* colors.webpage.darkmode.enabled ;; reload')
config.bind('tdu', 'config-cycle -p -t -u {url} colors.webpage.darkmode.enabled ;; reload')
config.bind('tdH', 'config-cycle -p -t -u *://*.{url:host}/* colors.webpage.darkmode.enabled ;; reload')
config.bind('tDh', 'config-cycle -p -u *://{url:host}/* colors.webpage.darkmode.enabled ;; reload')
config.bind('tDu', 'config-cycle -p -u {url} colors.webpage.darkmode.enabled ;; reload')
config.bind('tDH', 'config-cycle -p -u *://*.{url:host}/* colors.webpage.darkmode.enabled ;; reload')
# content blocking
config.bind('tbh', 'config-cycle -p -t -u *://{url:host}/* content.blocking.enabled ;; reload')
config.bind('tbu', 'config-cycle -p -t -u {url} content.blocking.enabled ;; reload')
config.bind('tbH', 'config-cycle -p -t -u *://*.{url:host}/* content.blocking.enabled ;; reload')
config.bind('tBh', 'config-cycle -p -u *://{url:host}/* content.blocking.enabled ;; reload')
config.bind('tBu', 'config-cycle -p -u {url} content.blocking.enabled ;; reload')
config.bind('tBH', 'config-cycle -p -u *://*.{url:host}/* content.blocking.enabled ;; reload')

c.content.webgl = True
c.content.unknown_url_scheme_policy = 'disallow'
c.content.tls.certificate_errors = 'ask-block-thirdparty'
c.content.webrtc_ip_handling_policy = 'disable-non-proxied-udp'

# debloat
c.content.autoplay = False
c.content.canvas_reading = False
c.qt.workarounds.disable_hangouts_extension = True
c.content.geolocation = False
c.content.notifications.enabled = False
c.content.prefers_reduced_motion = True
c.content.cookies.accept = 'no-3rdparty'
config.set('content.cookies.accept', 'all', 'chrome-devtools://*')
config.set('content.cookies.accept', 'all', 'devtools://*')

c.content.headers.user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/{webkit_version} (KHTML, like Gecko) {upstream_browser_key}/{upstream_browser_version}'
c.content.headers.accept_language = 'en-CA,en;q=0.5'

c.url.yank_ignored_parameters = [
    'ref', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
    'utm_content', 'utm_name', 'from', 'search_item_id', 'search_item_type',
    'search_match_part', 'search_page_id', 'search_page_no', 'search_rank',
    'search_sig', 'pp', 'si', 'ab_channel', 'igshid', 'i_source', 'i_medium',
    'i_campaign', '__cft__', '__tn__'
]

# Enable the ad/host blocker, use both Brave's ABP-style adblocker and host
# blocking
c.content.blocking.enabled = True
c.content.blocking.method = "both"
c.content.blocking.adblock.lists = [
    'file:///home/galen/.config/qutebrowser/adblock',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/badware.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/filters.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/privacy.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/quick-fixes.txt',
    'https://github.com/uBlockOrigin/uAssets/raw/master/filters/unbreak.txt',
]
