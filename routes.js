import { getAllHeroes } from "./controllers.js"

export function handleFromServer(req, res){
    if (req.url === "/heroes" && req.method === "GET"){
        return getAllHeroes(res)
    }
    else if (req.url === "/heroes" && req.method === "POST"){

    }
    else if (req.url === "/health" && req.method === "GET"){
        
    }
    else if (req.url === "/stats" && req.method === "GET"){
        
    }
    else if (req.url.startsWith('/heroes/')){
        const [path, query] = req.url.split('/');

    }

}



























































