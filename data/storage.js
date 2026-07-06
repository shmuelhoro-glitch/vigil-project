import fs from "fs/promises"


export async function getAll(){
    return fs.readFile('./dataBase.json','utf8')
    .then(res => {return {"success":true,"data":JSON.parse(res)}})
    .catch(err => {return {"success":false, "message": err.message}})
}


export async function save(dataForWrite){
    return fs.writeFile('./dataBase.json',JSON.stringify(dataForWrite,2),'utf8')
    .then(() => {return {"success":true, "data":dataForWrite}})
    .catch(err => {return{"success":false, "message": err.message}})
}






