import fs from "fs/promises";

export async function getAll() {
  return fs
    .readFile("./data/dataBase.json", "utf8")
    .then((res) => JSON.parse(res))
    .catch((err) => JSON.parse(err.message));
}

export async function saveHeroes(dataForWrite) {
  return fs
    .writeFile("./data/dataBase.json", JSON.stringify(dataForWrite, 2), "utf8")
    .then(() => {
      return { success: true, data: dataForWrite };
    })
    .catch((err) => {
      return { success: false, message: err.message };
    });
}
