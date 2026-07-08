import { getAll } from "../data/storage";

export async function checkNewVigil(data){
    const heroes = await getAll()
    // const includeAll = data.includes()
    const isNameExists = heroes.some(hero => hero.codeName !== data.codeName)
}
