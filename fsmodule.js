const fs = require('fs');

// fs.readFile("fs.text", "utf8", (err,data)=> {
//     console.log(err, data)
// })

// const a = fs.readFileSync("fs.text");
// console.log(a)
// console.log(a.toString())
// console.log("Finished reading file")

// fs.writeFile('fs2.text', 'this is an updated fs', ()=> {
//      console.log('writing on the file')
// })

const b = fs.writeFileSync('fs2.text', 'this is an updated 2')
console.log(b)
console.log("Finished writing file")