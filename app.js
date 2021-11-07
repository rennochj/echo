const express = require('express')
<<<<<<< HEAD
const router = express.Router()
const os = require('os')
var osu = require('node-os-utils')
const { cpu } = require('node-os-utils')
=======
>>>>>>> 39599cb6cd4f8b07565c9c830a33b545d8697ca3

const app = express()
const port = 8080

app.get('/', (req, res) => {

<<<<<<< HEAD
    Promise.all( [

        cpu.usage(),
        cpu.free()

    ])
    .then( (results) => {

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
            environment: {
                cpu: {
                    count: cpu.count(),
                    model: cpu.model(),
                    usage: results[0],
                    free: results[1]
                },
                variables: process.env
            }
        }

        sendJsonMessage(req, res, message)

    })

})


function sendJsonMessage(req, res, message) {

    res.setHeader('content-type', 'application/json');
    res.send( JSON.stringify(message, null, 4)  )

}
=======
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

>>>>>>> 39599cb6cd4f8b07565c9c830a33b545d8697ca3

app.listen(port, () => {
  
    console.log(`Example app listening at http://localhost:${port}`)

})

