import { dbconnect } from "./dbconnect.js"

export async function addNewFurniture(req, res) {
    const newFurniture = req.body
    const db = dbconnect()
    await db.collection("furniture").insertOne(newFurniture)
    .catch(err => {
        res.status(500).send(err)
        return
})
res.status(201).send({ message: "New Furniture Added." })
}
