My dotfiles tracked in a (XDG base dir compliant) git repo, inspired by [Drew
DeVault's dotfiles](https://drewdevault.com/2019/12/30/dotfiles.html). I highly
recommend giving it a read whether you track your dotfiles with a VCS or not!

This repo's [`.git`](.config/dotfiles/repo.git) and related files are stored in
[`.config/dotfiles`](.config/dotfiles).

Repo management is done exclusively with a helper script
([`cfg`](.local/bin/cfg)) to keep all extraneous files out of the home
directory. See `cfg h` or the script source for available shorthands.


## Initialisation

- To begin managing dotfiles with `cfg`, create a git repository rooted in your
  home directory:

  ```sh
  $ mkdir -p "$XDG_CONFIG_DIR/dotfiles"
  $ git init --separate-git-dir="$XDG_CONFIG_HOME/dotfiles/repo.git" "$HOME"
  $ rm .git
  $ echo '*' > "$XDG_CONFIG_DIR/dotfiles/.gitignore"
  ```

  Note the git dir can be placed elsewhere, but must be configured in the `cfg`
  script by altering `$CFG_DIR`.

- Download the [`cfg`](.local/bin/cfg) script and place it in your `$PATH`.

That's it! Now you can check in any file with `git add -f FILE...` -- the
`-f`/`--force` option is required the first time a file is staged since we
ignore all files by default. This makes it difficult to accidentally check in
secret files.

Files can be included in the root directory (`$HOME`) of the git repo but
normally located elsewhere in the filesystem by listing them in `cfg`'s
`$CFG_FILES` variable. These should be checked in relative to `$HOME`, *not*
where they are normally located! See the `cfg` script for details.
