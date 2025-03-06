" basics
let mapleader = ","
let maplocalleader = "\\"
set autoread   " reread files if they're changed externally
set history=100

" visual
colorscheme nord
set number
set nowrap
set nohlsearch
set ignorecase
set smartcase
set showmatch                              " matching brackets, parens, etc.
set list listchars=tab:»·,trail:·,nbsp:·   " whitespace characters
set listchars+=extends:→,precedes:←        " arrow if line continues
set colorcolumn=80                         " colour 80th column

" indentation
set tabstop=4
set shiftwidth=4
set noexpandtab

" status, position
set statusline=%F\ %m\ %Y%=0x%04B\ (%b)\ \|\ %l:%v\ (%p%%)\ \|\ %Ll\ %{wordcount().chars}c\ 
set laststatus=2   " always display status line
set showcmd
set showmode
set ruler

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

" yank/paste to/from X clipboard
map <leader>y "+y
map <leader>p "+p
map <leader>P "+P
map <leader>a :%y+<CR>

set noerrorbells
set novisualbell
set splitbelow splitright
set mouse=

filetype plugin indent on
autocmd FileType sh setl textwidth=80 formatoptions=jtq
autocmd FileType tex setl textwidth=80 formatoptions=jtq

let g:netrw_liststyle = 3       " tree style listing
let g:yagpdbcc_override_ft = 1  " also detect .go.tmpl .gotmpl
let timeoutlen = 1500           " wait for 1.5s before which-key dialog

" check file with shellcheck
map <leader>s :w \| !shellcheck -x %:p<CR>

" LaTeX
map <leader>z :w \| !zathura --fork "%:p:r.pdf"<CR><CR>
let g:vimtex_view_method = 'zathura'
let g:vimtex_view_zathura_options = '--fork'
let g:vimtex_doc_handlers = ['vimtex#doc#handlers#texdoc']
let g:vimtex_delim_list = {'delim_tex':{'name':[['`', "'"]]}} " LaTeX style `quotes'

" xbps templates filetype=sh
autocmd BufNewFile,BufRead ~/src/void-packages/srcpkgs/*/template setl ft=sh

" csv.vim
let g:csv_default_delim = ','
let g:csv_arrange_align = 'l*'
let g:csv_nomap_j = 1
let g:csv_nomap_k = 1
