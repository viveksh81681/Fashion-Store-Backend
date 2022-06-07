
const express = require("express");
const router = express.Router();

const Jacket = require("../models/jacketModel");

router.post("/jackets",async(req,res)=>{

    try {
        let jacket = await Jacket.create(req.body);
        return res.status(200).send(jacket)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/jackets",async(req,res)=>{

    let page = req.query.page
    
    try {
        let jacket = await Jacket.find().limit(6).skip((page-1)*6).lean().exec();
        return res.status(200).send(jacket)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/jackets/:id",async(req,res)=>{

    try {
        let jacket = await Jacket.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(jacket)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/jackets/:id",async(req,res)=>{

    try {
        let jacket = await Jacket.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(jacket)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;