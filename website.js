const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('site.html')
        res.end(data.toString());   
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> This is About the site </h1> <p> Lets see About now!</p>')
    }
    else if (req.url == '/hello') {
        res.statusCode = 200;
        res.end('<h1> Welcome everyone!</h1> <p> Lets get started quickly</p>')
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Error not found!</h1> <p> this page was not found</p>')
        console.log(req.url)
    }
})

server.listen(port, () => {
    console.log(`server is listening in ${port}`)
})