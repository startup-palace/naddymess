# Naddymess

## How to build the project

### Requirements

- Ruby + Bundle
- Node.js + npm

### Building

- `npm install`
- `bundle install`
- fetch content from Contentful (see the following section)
- build (for prod): `npm run build && bundle exec jekyll build -t`
- watch (for dev):
  - `npm run watch`
  - `bundle exec jekyll build -t -w` (in another terminal)

### How to fetch content from Contentful

- get the ID your Contentful space
- get an access token to your Contentful space
- `CONTENTFUL_SPACE="<your-space-id>" CONTENTFUL_TOKEN="<your-access-token>" node contentful.js`

You can also set the following environment variables:

- `CONTENTFUL_LOCALE` (default = `fr-FR`)
- `CONTENTFUL_PREVIEW` (default = `0`)
- `OUTPUT_DIR` (default = `src`)

## How to deploy the project

- go to the GitLab project page
- CI/CD > Pipelines
- click on `Run Pipeline` (create for `master`, which is the default value)
- wait a few minutes
- if the website site looks good on preproduction, run the manual job in the pipeline page to deploy it to production
