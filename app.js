const express = require('express')
const router = express.Router()
const os = require('os')
var osu = require('node-os-utils')
const { cpu } = require('node-os-utils')

const app = express()
const port = 8080

app.get('/', (req, res) => {

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

        console.log(`here I was`)

        sendJsonMessage(req, res, message)

    })

})


function sendJsonMessage(req, res, message) {

    res.setHeader('content-type', 'application/json');
    res.send( JSON.stringify(message, null, 4)  )

}

app.listen(port, () => {
  
    console.log(`Example app listening at http://localhost:${port}`)

})

