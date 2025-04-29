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
map <M-j> gt
map <M-k> gT
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

" -- sys clipboard --
map <leader>y "+y
map <leader>p "+p
map <leader>P "+P
map <leader>a :%y+<CR>

filetype plugin indent on
autocmd FileType sh,tex setl textwidth=80 formatoptions=jtq
" xbps templates filetype=sh
autocmd BufNewFile,BufRead ~/src/void-packages/srcpkgs/*/template setl ft=sh

" -- LSP --
lua <<
	require'lspconfig'.gopls.setup{}
	require'lspconfig'.texlab.setup{}
.

" -- vsnip --
let g:vsnip_snippet_dir = '~/.config/nvim/vsnip'
" Expand
imap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'
smap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'
imap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'
smap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'
imap <expr> <Tab>   vsnip#jumpable(1)   ? '<Plug>(vsnip-jump-next)'      : '<Tab>'
smap <expr> <Tab>   vsnip#jumpable(1)   ? '<Plug>(vsnip-jump-next)'      : '<Tab>'
imap <expr> <S-Tab> vsnip#jumpable(-1)  ? '<Plug>(vsnip-jump-prev)'      : '<S-Tab>'
smap <expr> <S-Tab> vsnip#jumpable(-1)  ? '<Plug>(vsnip-jump-prev)'      : '<S-Tab>'
" Select or cut text to use as $TM_SELECTED_TEXT in the next snippet.
xmap        s   <Plug>(vsnip-cut-text)
xmap        S   <Plug>(vsnip-select-text)

set spelllang=en
nnoremap <silent> <F11> :set spell!<cr>
inoremap <silent> <F11> <C-O>:set spell!<cr>

let timeoutlen = 1500           " wait for 1.5s before which-key dialog
let g:netrw_liststyle = 3       " tree style listing
let g:yagpdbcc_override_ft = 1  " also detect .go.tmpl .gotmpl

" -- shellcheck --
map <leader>s :w \| !shellcheck -x %:p<CR>

" -- VimTeX --
let g:vimtex_view_method = 'zathura'
let g:vimtex_doc_handlers = ['vimtex#doc#handlers#texdoc']
let g:vimtex_delim_list = {'delim_tex':{'name':[['`', "'"]]}} " LaTeX style `quotes'

" -- csv.vim --
let g:csv_default_delim = ','
let g:csv_arrange_align = 'l*'
