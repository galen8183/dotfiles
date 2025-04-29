# derived from https://github.com/Linuus/nord-qutebrowser

# MIT License
#
# Copyright (c) 2018 Linus Marton
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

nord = {
    # Polar Night
    'nord0': '#2e3440',
    'nord1': '#3b4252',
    'nord2': '#434c5e',
    'nord3': '#4c566a',
    # Snow Storm
    'nord4': '#d8dee9',
    'nord5': '#e5e9f0',
    'nord6': '#eceff4',
    # Frost
    'nord7': '#8fbcbb',
    'nord8': '#88c0d0',
    'nord9': '#81a1c1',
    'nord10': '#5e81ac',
    # Aurora
    'nord11': '#bf616a',
    'nord12': '#d08770',
    'nord13': '#ebcb8b',
    'nord14': '#a3be8c',
    'nord15': '#b48ead',
}

# Completion
c.colors.completion.category.bg                 = nord['nord0']
c.colors.completion.category.border.bottom      = nord['nord0']
c.colors.completion.category.border.top         = nord['nord0']
c.colors.completion.category.fg                 = nord['nord5']
c.colors.completion.even.bg                     = nord['nord1']
c.colors.completion.odd.bg                      = nord['nord1']
c.colors.completion.fg                          = nord['nord4']
c.colors.completion.item.selected.bg            = nord['nord3']
c.colors.completion.item.selected.border.bottom = nord['nord3']
c.colors.completion.item.selected.border.top    = nord['nord3']
c.colors.completion.item.selected.fg            = nord['nord6']
c.colors.completion.match.fg                    = nord['nord13']
c.colors.completion.scrollbar.bg                = nord['nord1']
c.colors.completion.scrollbar.fg                = nord['nord5']

# Downloads
c.colors.downloads.bar.bg    = nord['nord0']
c.colors.downloads.error.bg  = nord['nord11']
c.colors.downloads.error.fg  = nord['nord5']
c.colors.downloads.stop.bg   = nord['nord15']
c.colors.downloads.system.bg = 'none'

# Hints
c.colors.hints.bg       = nord['nord13']
c.colors.hints.fg       = nord['nord0']
c.colors.hints.match.fg = nord['nord10']

# Keyhints (which-key like)
c.colors.keyhint.bg        = nord['nord1']
c.colors.keyhint.fg        = nord['nord5']
c.colors.keyhint.suffix.fg = nord['nord13']

# Messages
c.colors.messages.error.bg       = nord['nord11']
c.colors.messages.error.border   = nord['nord11']
c.colors.messages.error.fg       = nord['nord6']
c.colors.messages.info.bg        = nord['nord8']
c.colors.messages.info.border    = nord['nord8']
c.colors.messages.info.fg        = nord['nord0']
c.colors.messages.warning.bg     = nord['nord13']
c.colors.messages.warning.border = nord['nord13']
c.colors.messages.warning.fg     = nord['nord6']

# Prompts (JS prompts, file selector, etc.)
c.colors.prompts.bg          = nord['nord2']
c.colors.prompts.border      = '1px solid ' + nord['nord0']
c.colors.prompts.fg          = nord['nord5']
c.colors.prompts.selected.bg = nord['nord3']

# Statusbar
c.colors.statusbar.caret.bg             = nord['nord15']
c.colors.statusbar.caret.fg             = nord['nord5']
c.colors.statusbar.caret.selection.bg   = nord['nord15']
c.colors.statusbar.caret.selection.fg   = nord['nord5']
c.colors.statusbar.command.bg           = nord['nord2']
c.colors.statusbar.command.fg           = nord['nord5']
c.colors.statusbar.command.private.bg   = nord['nord2']
c.colors.statusbar.command.private.fg   = nord['nord5']
c.colors.statusbar.insert.bg            = nord['nord14']
c.colors.statusbar.insert.fg            = nord['nord1']
c.colors.statusbar.normal.bg            = nord['nord0']
c.colors.statusbar.normal.fg            = nord['nord5']
c.colors.statusbar.passthrough.bg       = nord['nord10']
c.colors.statusbar.passthrough.fg       = nord['nord5']
c.colors.statusbar.private.bg           = nord['nord3']
c.colors.statusbar.private.fg           = nord['nord5']
c.colors.statusbar.progress.bg          = nord['nord5']
c.colors.statusbar.url.error.fg         = nord['nord11']
c.colors.statusbar.url.fg               = nord['nord5']
c.colors.statusbar.url.hover.fg         = nord['nord8']
c.colors.statusbar.url.success.http.fg  = nord['nord5']
c.colors.statusbar.url.success.https.fg = nord['nord14']
c.colors.statusbar.url.warn.fg          = nord['nord12']

# Tab bar
c.colors.tabs.bar.bg                  = nord['nord3']
c.colors.tabs.even.bg                 = nord['nord3']
c.colors.tabs.even.fg                 = nord['nord5']
c.colors.tabs.odd.bg                  = nord['nord3']
c.colors.tabs.odd.fg                  = nord['nord5']
c.colors.tabs.pinned.even.bg          = nord['nord3']
c.colors.tabs.pinned.even.fg          = nord['nord5']
c.colors.tabs.pinned.odd.bg           = nord['nord3']
c.colors.tabs.pinned.odd.fg           = nord['nord5']
c.colors.tabs.indicator.error         = nord['nord11']
c.colors.tabs.indicator.system        = 'none'
c.colors.tabs.selected.even.bg        = nord['nord4']
c.colors.tabs.selected.even.fg        = nord['nord0']
c.colors.tabs.selected.odd.bg         = nord['nord4']
c.colors.tabs.selected.odd.fg         = nord['nord0']
c.colors.tabs.pinned.selected.even.bg = nord['nord4']
c.colors.tabs.pinned.selected.even.fg = nord['nord0']
c.colors.tabs.pinned.selected.odd.bg  = nord['nord4']
c.colors.tabs.pinned.selected.odd.fg  = nord['nord0']

# BG for all webpages (when unset)
c.colors.webpage.bg = nord['nord0']
