const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/micro-fe-element-two/runtime.js',
'./dist/micro-fe-element-two/polyfills.js',
'./dist/micro-fe-element-two/main.js',
]
await fs.ensureDir('../elements')
await concat(files, '../elements/elTwo.js');
await fs.copyFile('./dist/micro-fe-element-two/styles.css', '../elements/styles.css')
})()