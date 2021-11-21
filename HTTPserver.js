const http = require('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Welcome everyone!</h1> <p> Lets get started quickly</p>')
})

server.listen(port, ()=>{
    console.log(`server is listening in ${port}`)
})