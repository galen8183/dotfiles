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

c.url.yank_ignored_parameters = [
    'ref', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
    'utm_content', 'utm_name', 'from', 'search_item_id', 'search_item_type',
    'search_match_part', 'search_page_id', 'search_page_no', 'search_rank',
    'search_sig', 'pp', 'si', 'ab_channel', 'igshid', 'i_source', 'i_medium',
    'i_campaign', '__cft__', '__tn__'
]

#  use both Brave's ABP-style and host blockers
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

# remove overlays
# from https://reddit.com/r/qutebrowser/comments/mnptey
config.bind(',ro', '''jseval (function () {
    var i, elements = document.querySelectorAll("body *");

    for (i = 0; i < elements.length; i++) {
        var pos = getComputedStyle(elements[i]).position;
        if (pos === "fixed" || pos == "sticky") {
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
})();'''.replace("\n", ""));
