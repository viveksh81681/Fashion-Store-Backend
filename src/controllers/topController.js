
const express = require("express");
const router = express.Router();

const Top = require("../models/topModel");

router.post("/tops",async(req,res)=>{

    try {
        let top = await Top.create(req.body);
        return res.status(200).send(top)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/tops",async(req,res)=>{

    let page = req.query.page

    try {
        let top = await Top.find().limit(6).skip((page-1)*6).lean().exec(); 
        return res.status(200).send(top)


    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/tops/:id",async(req,res)=>{

    try {
        let top = await Top.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(top)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/tops/:id",async(req,res)=>{

    try {
        let top = await Top.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(top)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;