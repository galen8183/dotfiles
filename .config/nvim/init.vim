" basics
let mapleader = ","
set autoread   " reread files if they're changed externally
set history=100

" visual
colorscheme nord
syntax on
set number
set nowrap
set nohlsearch
set ignorecase
set smartcase
set showmatch                              " matching brackets, parens, etc.
set list listchars=tab:»·,trail:·,nbsp:·   " whitespace characters
set listchars+=extends:→,precedes:←        " arrow if line continues
set colorcolumn=80                         " colour 80th column
filetype plugin indent on
autocmd FileType sh setl textwidth=80 formatoptions=jtq
autocmd FileType tex setl textwidth=80 formatoptions=jtq

" indentation
set tabstop=4
set shiftwidth=4
set noexpandtab

" status, position
set statusline=%F\ %m\ %Y%=0x%04B\ (%b)\ \|\ %l:%v\ (%p%%)\ \|\ %Ll\ %{wordcount().chars}c\ 
set laststatus=2   " always display status line
set showcmd        " show commands as they are typed
set showmode       " show current editor mode
set ruler          " show current position

" simplify tab and split pane navigation
map J gt
map K gT
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

" replace all
nnoremap S :%s//g<Left><Left>
" search for/replace selected text
vnoremap // y/\V<C-R>=escape(@",'/\')<CR><CR>
vnoremap /s y:%s/\V<C-R>=escape(@",'/\')<CR>//g<left><left>

" check file with shellcheck
map <leader>s :!clear && shellcheck -x %<CR>
" compile/open documents
map <leader>c :w \| !doc-compile "%:p"<CR>
map <leader>z :w \| !zathura --fork "%:p:r.pdf"<CR><CR>
" clear (La)TeX build files on exit
autocmd FileType tex autocmd VimLeave * !texclear %

" yank/paste to/from X clipboard
map <leader>y "+y
map <leader>p "+p
map <leader>P "+P
map <leader>a :%y+<CR>

" annoyances
set noerrorbells
set novisualbell
set splitbelow splitright
set mouse=

" xbps templates filetype=sh
autocmd BufNewFile,BufRead ~/src/void-packages/srcpkgs/*/template setl ft=sh

let g:netrw_liststyle = 3
let g:yagpdbcc_override_ft = 1

" csv.vim
let g:csv_default_delim=','
let g:csv_arrange_align = 'l*'
let g:csv_nomap_j = 1
let g:csv_nomap_k = 1
