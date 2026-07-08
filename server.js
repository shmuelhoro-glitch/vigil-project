import http from "http"
import { handleFromServer } from "./routes.js"

const server = http.createServer((req,res) =>{
    try{
    handleFromServer(req, res)
    }
    catch{
        err => res.end({"error":err})
    }
})

server.listen(3000, ()=>{
    console.log('running on port 3000')
})