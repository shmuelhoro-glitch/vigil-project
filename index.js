import http from "http"
import {getAll} from "./data/storage.js"

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'content-type': 'application/json'})
    if (req.method === "GET" && req.url === '/health'){
        res.end("success")
    }
    else if (req.method === "GET" && req.url === "/heroes"){
        getAll().then(data => res.end(JSON.stringify(data)))
    }
    else {res.end("err")}
})
server.listen(3000,() =>{
    console.log('The server running on port 3000')
})