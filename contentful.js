const contentful = require('contentful');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const yaml = require('js-yaml');

/**********************************************/

const locale = process.env.CONTENTFUL_LOCALE || 'fr-FR';
const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_TOKEN;
const outputDir = process.env.OUTPUT_DIR || 'src';
const contentIds = ['post', 'tag'];
const contentFields = { 'post': 'content', 'tag': 'description' };
const slugFields = { 'post': 'slug', 'tag': 'slug' };
const folderName = { 'post': '_articles', 'tag': '_tags' };

/**********************************************/

function extractType(entry) {
  return entry.sys.contentType.sys.id;
}

function writeEntry(item) {
  const dir = path.join(outputDir, folderName[item.type]);
  mkdirp.sync(dir);

  const filename = path.join(dir, item.slug + '.md');
  const content = item.data.fields[contentFields[item.type]];
  const metadata = yaml.dump(item.data);
  const data = '---\n' + metadata + '\n---\n' + content + '\n';
  fs.writeFileSync(filename, data);
}

/**********************************************/

const client = contentful.createClient({
  accessToken,
  space,
  resolveLinks: true,
  locale,
});

contentIds.forEach(type => {
  client.getEntries({'content_type': type}).then((res) => {
    const data = res.items.map(e => ({ type, slug: e.fields[slugFields[type]], data: e}));
    data.forEach(item => console.log(`[${item.type}] ${item.slug}`));
    data.forEach(writeEntry);
  }).catch((err) => console.log(err));
});
