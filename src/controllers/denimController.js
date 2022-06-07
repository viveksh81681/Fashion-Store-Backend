
const express = require("express");
const router = express.Router();

const Denim = require("../models/denimModel");

router.post("/denims",async(req,res)=>{

    try {
        let denim = await Denim.create(req.body);
        return res.status(200).send(denim)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/denims",async(req,res)=>{

    let page = req.query.page
    
    try {
        let denim = await Denim.find().limit(6).skip((page-1)*6).lean().exec();
        return res.status(200).send(denim)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/denims/:id",async(req,res)=>{

    try {
        let denim = await Denim.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(denim)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/denims/:id",async(req,res)=>{

    try {
        let denim = await Denim.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(denim)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;