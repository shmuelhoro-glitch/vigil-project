import { getAll, save } from "./data/storage.js";
import answer from "./utils/response.js";

export async function getAllHeroes(res){
    const heroes = await getAll()
    res.writeHead(200,{ 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(answer(true,heroes)))
}