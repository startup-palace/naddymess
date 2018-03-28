# Naddymess

## Requirement

* jekyll (ruby)
* gulp
* npm

## Install Environment

### Ruby
Install RVM: https://rvm.io
Solve a lots of issues when multiple ruby versions have been installed.

`$ \curl -sSL https://get.rvm.io | bash -s stable --ruby`

MacOS : need Homebrew
`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Windows: install with the ruby installer

`https://rubyinstaller.org/downloads/`

### Gems

1. Download RubyGems: https://rubygems.org/pages/download
2. Unpack into a directory and cd there
3. Install with: `ruby setup.rb` (you may need admin/root privilege)

Windows: install DevKit from

`https://rubyinstaller.org/downloads/`

Download it, run it to extract it somewhere (permanent).
Then cd to it, run `ruby dk.rb init` and `ruby dk.rb install` to bind it to ruby installations in your path.
(more information at https://github.com/oneclick/rubyinstaller/wiki/Development-Kit)

### Jekyll
Install Jekyll: http://jekyllrb.com/

`$ gem install jekyll bundler`

### Install gulp

`npm install --global gulp-cli`


## Init the project

`npm install`

## Export Contentful data to Jekyll

- get the ID your Contentful space
- get an access token to your Contentful space
- `CONTENTFUL_SPACE="<your-space-id>" CONTENTFUL_TOKEN="<your-access-token" node contentful.js`

You can also set the following environment variables:

- `CONTENTFUL_LOCALE` (default = `fr-FR`)
- `OUTPUT_DIR` (default = `src`)

## Start developping

`gulp watch`

Then go to
`localhost:3000`

## Build for production

`gulp --env production`
