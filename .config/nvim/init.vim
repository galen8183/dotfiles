" -- basics --
let mapleader = ","
let maplocalleader = "\\"
set autoread   " reread files if they're changed externally
set history=100

colorscheme nord
set number
set relativenumber
set nowrap
set cursorline

set nohlsearch
set ignorecase
set smartcase
set showmatch                              " matching brackets, parens, etc.

set list listchars=tab:»·,trail:·,nbsp:·   " whitespace characters
set listchars+=extends:→,precedes:←        " arrow if line continues
set colorcolumn=80                         " colour 80th column

set tabstop=4
set shiftwidth=4
set noexpandtab

set noerrorbells
set novisualbell
set splitbelow splitright
set mouse=

" -- status line --
set statusline=%F\ %m\ %Y%=0x%04B\ (%b)\ \|\ %l:%v\ (%p%%)\ \|\ %Ll\ %{wordcount().chars}c\ 
set laststatus=2 " always display
set showcmd
set showmode
set ruler

" -- tab/split nav --
nnoremap <M-j> gt
nnoremap <M-k> gT
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" -- sys clipboard --
map <leader>y "+y
map <leader>p "+p
map <leader>P "+P
map <leader>a :%y+<CR>

" -- write without quitting --
nnoremap ZW :write<cr>

filetype plugin indent on
" recognise xbps template shell scripts
autocmd BufNewFile,BufRead ~/src/void-packages/srcpkgs/*/template setl filetype=sh

set spelllang=en
nnoremap <silent> <F11> :setlocal spell!<cr>
inoremap <silent> <F11> <C-O>:setlocal spell!<cr>

let timeoutlen = 1000           " wait for 1s before which-key dialog
let g:netrw_liststyle = 3       " tree style listing
let g:yagpdbcc_override_ft = 1  " also detect .go.tmpl .gotmpl

" -- shellcheck --
map <leader>s :ShellCheck!<cr>

" -- csv.vim --
let g:csv_default_delim = ','
let g:csv_arrange_align = 'l*'
