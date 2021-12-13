const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/micro-fe-element-one/runtime.js',
'./dist/micro-fe-element-one/polyfills.js',
'./dist/micro-fe-element-one/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/elOne.js');
await fs.copyFile('./dist/micro-fe-element-one/styles.css', 'elements/styles.css')
})()