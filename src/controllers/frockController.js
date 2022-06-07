
const express = require("express");
const router = express.Router();

const Frock = require("../models/frockModel");

router.post("/frock",async(req,res)=>{

    try {
        let frock = await Frock.create(req.body);
        return res.status(200).send(frock)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/frock",async(req,res)=>{

    let page = req.query.page
    
    try {
        let frock = await Frock.find().limit(6).skip((page-1)*6).lean().exec();
        return res.status(200).send(frock)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/frock/:id",async(req,res)=>{

    try {
        let frock = await Frock.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(frock)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/frock/:id",async(req,res)=>{

    try {
        let frock = await Frock.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(frock)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;