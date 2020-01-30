const express = require("express")
const app = express()
const server = require("http").createServer(app)
const socket = require("socket.io")
const io = socket(server)
const cors = require('cors')

const port = 8080 || process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let data = []
app.all('/', (req, res) => {
    const topic = "asrul-dev"

    let pesan = req.body.pesan
    let ip = req.connection.remoteAddress
    let waktu = new Date()

    data.push({pesan, ip, waktu})

    io.emit(topic, data)
    res.json("JALAN DONG....")
})

server.listen(port, console.log('running'))