
const express = require("express");
const router = express.Router();

const Kurti = require("../models/kurtiModel");

router.post("/kurti",async(req,res)=>{

    try {
        let kurti = await Kurti.create(req.body);
        return res.status(200).send(kurti)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/kurti",async(req,res)=>{

    let page = req.query.page
    
    try {
        let kurti = await Kurti.find().limit(6).skip((page-1)*6).lean().exec();
        return res.status(200).send(kurti)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/kurti/:id",async(req,res)=>{

    try {
        let kurti = await Kurti.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(kurti)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/kurti/:id",async(req,res)=>{

    try {
        let kurti = await Kurti.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(kurti)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;