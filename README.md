# Naddymess

## How to build the project

### Requirements

- Ruby + Bundle
- Node.js + npm

### Building

- `npm install`
- `bundle install`
- fetch content from Contentful (see the following section)
- build (for prod): `./node_modules/.bin/gulp --env production`
- watch (for dev): `./node_modules/.bin/gulp watch` and go to `localhost:3000`

### How to fetch content from Contentful

- get the ID your Contentful space
- get an access token to your Contentful space
- `CONTENTFUL_SPACE="<your-space-id>" CONTENTFUL_TOKEN="<your-access-token>" node contentful.js`

You can also set the following environment variables:

- `CONTENTFUL_LOCALE` (default = `fr-FR`)
- `OUTPUT_DIR` (default = `src`)

## How to deploy the project

- go to the GitLab project page
- Repository > Tags
- create a new tag (use a new version number as tag name)
- wait a few minutes
