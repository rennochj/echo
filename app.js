const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {

    var message = {
        url: req.url,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        ip: req.ip,
        ips: req.ips,
        route: req.route,
        xhr: req.xhr,
        protocol: req.protocol,
        secure: req.secure,
        headers: req.headers,
        query: req.query,
        environment: process.env
    }

    res.setHeader('content-type', 'application/json');
    res.send( JSON.stringify(message, null, 4)  )
    
})


app.listen(port, () => {
  
    console.log(`Example app listening at http://localhost:${port}`)

})

