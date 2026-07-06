import http from "http"

const server = http.createServer((req, res) =>{
    if (req.method === "GET" && req.url === '/health'){
        res.end("success")
    }
    else {res.end("err")}
})
server.listen(3000,() =>{
    console.log('The server running on port 3000')
})