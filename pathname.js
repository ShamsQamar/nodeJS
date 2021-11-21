const path = require('path')

let a = path.basename('C:\\temp\\myfile.html')
let c = path.win32.basename('C:\\temp\\myfile.html');
let a1 = path.win32.dirname('C:\\temp\\myfile.html');

console.log(a)
console.log(c)
console.log(a1)

const ext1 = path.extname(__filename)
const ext2 = path.dirname(__filename)
const ext = path.extname("/home/wilcosource/tabish/javascript/new.html")
console.log(ext1, ext)
console.log(ext2)

const f = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log(f)
const p = path.parse('/home/user/dir/file.txt');
const p2 = path.parse('/home/wilcosource/tabish/javascript/new.js');
console.log(p)
console.log(p2)
