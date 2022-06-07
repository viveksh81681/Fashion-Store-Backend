
const express = require("express");
const router = express.Router();

const Middi = require("../models/middiModel");

router.post("/middi",async(req,res)=>{

    try {
        
        let middi = await Middi.create(req.body);
        return res.status(200).send(middi)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/middi",async(req,res)=>{

    let page = req.query.page

    try {
        let middi = await Middi.find().limit(6).skip((page-1)*6).lean().exec(); 
        return res.status(200).send(middi)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/middi/:id",async(req,res)=>{

    try {
        let middi = await Middi.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(middi)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/middi/:id",async(req,res)=>{

    try {
        let middi = await Middi.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(middi)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;