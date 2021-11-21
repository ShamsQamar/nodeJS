const express = require('express')
const app = express()
// const fs = require('fs')
const path = require('path')
const port = 3001

// const customMiddleware = (req, res, next) =>{
//   console.log(req)
//   next()
// }

// const newMiddleware = (req, res, next) =>{
//   console.log(req.url )
// }

// app.use(customMiddleware)
// app.use(newMiddleware)
app.use(express.static(path.join(__dirname, 'Public')))
// app.use('/hello', express.static(path.join(__dirname, 'Public')))


app.get('/hello', (req, res) => {
  // const data = fs.readFileSync('site.html')s
  // res.send(data.toString())
  res.sendFile(path.join(__dirname, 'site.html'))
  // res.sendFile(path.join('/home/wilcosource/tabish/javascript/nodejs', 'site.html'))
  // res.sendFile('/home/wilcosource/tabish/javascript/nodejs/site.html')
})

app.get('/about/:name', (req, res) => {
    // res.send('<h1> This is About the site </h1> <p> Lets see About now!</p>')
    // res.status(500)
    // res.json({'Shams' : 21})
    res.send("about this site! " + req.params.name)

  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})