import express from "express";
import cors from "cors";
import { connectDB, testDB } from "./db/index.js";
import { badRequest, forbidden, notFound, serverError } from "./errorHandlers.js";
// import db from "./db/models/models.js"
import productsRouter from "./services/products/routes.js"

const server = express()

const { PORT = 5000 } = process.env

server.use(cors())
server.use(express.json())

server.use("/products", productsRouter)

server.use(badRequest)
server.use(forbidden)
server.use(notFound)
server.use(serverError)

server.listen(PORT, async () => {
    console.log(`👂👂 Server listening on port ${PORT}`)
    await testDB()
    await connectDB()
})

server.on("error", (error) => {
    console.log("⛔ Server stopped", error)
})