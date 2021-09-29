import express from "express";
import cors from "cors";
import { connectDB, testDB} from "./db/index.js";
import Product from "./db/models/products.js";

const server = express()

const { PORT = 5000 } = process.env

server.use(cors())
server.use(express.json())

server.listen(PORT, async () => {
    console.log(`👂👂 Server listening on port ${PORT}`)
    await testDB()
    await connectDB()
})

server.on("error", (error) => {
    console.log("⛔ Server stopped", error)
})