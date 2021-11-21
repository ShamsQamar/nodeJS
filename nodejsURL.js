// import url from 'url';

const myURL = new URL('https://example.org'); // url
myURL.pathname = '/a/b/c';  // adding path 
myURL.search = '?d=e';   // providing get parameters
myURL.hash = '#fgh';   //  nevigate to a particular section(component) of page 

console.log(myURL)
console.log(myURL.href)

import { URL } from 'url';
console.log(URL === globalThis.URL);