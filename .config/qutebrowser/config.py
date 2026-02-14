# qute://help/configuring.html
# qute://help/settings.html

# load config-cycle set options
config.load_autoconfig(True)

config.source('config/nord.py')
config.source('config/debloat.py')

c.confirm_quit = ['multiple-tabs', 'downloads']

c.completion.open_categories = ['searchengines', 'quickmarks',
                                'bookmarks', 'history']
c.completion.shrink = True
c.completion.use_best_match = True
c.completion.web_history.max_items = 2000
c.downloads.location.remember = True
c.downloads.location.suggestion = 'both'
c.keyhint.delay = 500
c.scrolling.bar = 'when-searching'
c.tabs.mousewheel_switching = False
c.tabs.padding = {'bottom': 1, 'left': 1, 'right': 3, 'top': 1}
c.tabs.pinned.frozen = False
c.url.default_page = 'about:blank'
c.url.incdec_segments = ['path', 'query', 'anchor'] # :navigate URL segments
c.url.start_pages = 'qute://version'

c.editor.command = ['st', '-e', 'nvim', '{}']

# Search engines which can be used via the address bar.
c.url.searchengines = {
    'DEFAULT': 'https://duckduckgo.com/?q={}',
    'aw': 'https://wiki.archlinux.org/title/Special:Search?search={}',
    'bc': 'https://bandcamp.com/search?q={}',
    'bs': 'https://baresearch.org/search?q={}',
    'di': 'https://en.wiktionary.org/wiki/Special:Search?search={}',
    'disc': 'https://www.discogs.com/search?q={}',
    'do': 'http://dict.org/bin/Dict?Database=all&Form=Dict2&Query={}',
    'gh': 'https://github.com/search?q={}',
    'josm': 'https://josm.openstreetmap.de/search?q={}',
    'mb': 'https://musicbrainz.org/search/textsearch?type=release&query={}',
    'mbd': 'https://musicbrainz.org/search?type=doc&query={}',
    'mbw': 'https://wiki.musicbrainz.org/Special:Search?search={}',
    'mdn': 'https://developer.mozilla.org/en-US/search?q={}',
    'mw': 'https://mwmbl.org/?q={}',
    'om': 'https://www.openstreetmap.org/search?query={}',
    'ot': 'https://taginfo.openstreetmap.org/search?q={}',
    'ow': 'https://wiki.openstreetmap.org/wiki/Special:Search?search={}',
    'sp': 'https://www.startpage.com/do/search?query={}',
    'ta': 'https://ctan.org/search?phrase={}',
    'ug': 'https://www.ultimate-guitar.com/search.php?value={}',
    'vd': 'file:///usr/share/doc/void/html/about/index.html?search={}',
    'wa': 'https://web.archive.org/web/*/{unquoted}',
    'wc': 'https://commons.wikimedia.org/wiki/Special:Search?search={}',
    'wd': 'https://www.wikidata.org/wiki/Special:Search?search={}',
    'wi': 'https://en.wikipedia.org/wiki/Special:Search?search={}',
    'yt': 'https://youtube.com/results?search_query={}',
}
c.url.open_base_url = True # open searchengine base URL if no search phrase

c.zoom.default = '80%'
c.zoom.levels = ['25%', '33%', '50%', '67%', '75%', '80%', '90%', '100%',
                 '110%', '125%', '150%', '175%', '200%', '250%', '300%',
                 '400%', '500%']

# Default font size (in pixels) for regular text.
c.fonts.web.size.default = 14

# media
config.bind(';v', 'hint links spawn yt-mpv {hint-url}')
config.bind(';m', 'hint links spawn yt-dlp --config-locations ~/.config/yt-dlp/music.conf {hint-url}')
config.bind(';i', 'hint images spawn nsxiv -u {hint-url}')

# general
config.bind('<Alt-f>', 'hint all tab-fg')
config.bind('pP', 'open -t -- {clipboard}')
config.bind('<Ctrl+j>', 'tab-move +')
config.bind('<Ctrl+k>', 'tab-move -')
config.bind('<Ctrl+a>', 'mode-enter caret')
config.bind(';;', 'hint all right-click')
config.bind('<Ctrl-x>', 'download-open')
config.bind('ZQ', 'close')
config.bind(',ce', 'config-edit')
config.bind(',cs', 'config-source')
config.bind('<Alt+p>', 'spawn --userscript qute-pass -U secret -u "user(?:name)?: (.+)" -d dmenu')
config.bind('gG', 'cmd-set-text -s :tab-give')

# global dark theme
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
# canvas reading
config.bind('tvh', 'config-cycle -p -t -u *://{url:host}/* content.canvas_reading ;; reload')
config.bind('tvu', 'config-cycle -p -t -u {url} content.canvas_reading ;; reload')
config.bind('tvH', 'config-cycle -p -t -u *://*.{url:host}/* content.canvas_reading ;; reload')
config.bind('tVh', 'config-cycle -p -u *://{url:host}/* content.canvas_reading ;; reload')
config.bind('tVu', 'config-cycle -p -u {url} content.canvas_reading ;; reload')
config.bind('tVH', 'config-cycle -p -u *://*.{url:host}/* content.canvas_reading ;; reload')

c.content.webgl = True
c.content.unknown_url_scheme_policy = 'disallow'
c.content.tls.certificate_errors = 'ask-block-thirdparty'
c.content.webrtc_ip_handling_policy = 'disable-non-proxied-udp'
c.content.xss_auditing = True
c.content.headers.user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/{webkit_version} (KHTML, like Gecko) {upstream_browser_key}/{upstream_browser_version} Safari/{webkit_version}'
c.content.user_stylesheets = 'userstyles/user.css'
