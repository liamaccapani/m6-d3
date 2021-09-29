import createHttpError from "http-errors";
import db from "../../db/models/models.js";
import express from "express";
import s from "sequelize";
import { productValidation } from "./validation.js";
import { validationResult } from "express-validator";


const router = express.Router()
const { Product, Review } = db
const { Op } = s

router.get("/", async (req, res, next) => {
    try {
        const data = await Product.findAll({
            attributes: {exclude: ["id", "createdAt"]},
            include: Review
        })
        res.send(data)

    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.post("/", productValidation, async (req, res, next) => {
    const errorsList = validationResult(req);
    if (!errorsList.isEmpty()) {
        next(createHttpError(400, { errorsList }));

    } else {
        try {
            const data = await Product.create(req.body)
            res.status(201).send(data)

        } catch (error) {
        console.log(error)
        next(error)  
        }
    }
})


export default router