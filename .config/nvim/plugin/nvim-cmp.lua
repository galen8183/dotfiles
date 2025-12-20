local cmp = require('cmp')

cmp.setup({
	snippet = {
		expand = function(args)
			vim.fn["vsnip#anonymous"](args.body)
		end,
	},
	window = {
		-- completion = cmp.config.window.bordered(),
		-- documentation = cmp.config.window.bordered(),
	},
	mapping = cmp.mapping.preset.insert({
		['<C-b>'] = cmp.mapping.scroll_docs(-4),
		['<C-f>'] = cmp.mapping.scroll_docs(4),
		['<C-Space>'] = cmp.mapping.complete(),
		['<C-e>'] = cmp.mapping.abort(),
		['<CR>'] = cmp.mapping.confirm({ select = false }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
	}),

	sources = cmp.config.sources({
		{ name = 'nvim_lsp' },
		{ name = 'vsnip' },
	}, {
		{ name = 'buffer' },
	})
})

-- Use buffer source for `/` and `?` (if you enabled `native_menu`, this won't work anymore).
cmp.setup.cmdline({ '/', '?' }, {
	mapping = cmp.mapping.preset.cmdline(),
	sources = {
		{ name = 'buffer' }
	}
})

-- Set up lsp.
local capabilities = require('cmp_nvim_lsp').default_capabilities()

local lsps = {
	{ 'gopls' },
	{ 'texlab' },
	{ 'ccls' },
	{ 'pylsp' },
	{ 'rust_analyzer' },
}

for _, lsp in pairs(lsps) do
	local name, config = lsp[1], lsp[2]
	if not config then
		config = { ["capabilites"] = capabilities }
	end
	vim.lsp.config(name, config)
	vim.lsp.enable(name)
end


vim.keymap.set('c', '<tab>', '<C-z>', { silent = false }) -- fix cmd mode completion
