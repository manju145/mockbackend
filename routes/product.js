const express = require("express");
const productRouter = express.Router();
const { ProductModel } = require("../model/doctor");


productRouter.post('/appointments', async (req, res) => {
    const {  name,
        image,
              specialization,
              experience,
              location,
              date,
              slots,
              fee } = req.body;
  
    try {
              const newUser = new ProductModel({
                 name,
                 image,
                specialization,
                experience,
                location,
                date,
                slots,
                fee});
              await newUser.save();
              res.send('Registered Successfully!');
            }
     catch (err) {
      res.send({ msg: err.message });
    }
  });


  productRouter.get("/",async (req, res) => {
    try {
        const notes = await ProductModel.find()
             res.status(200).send(notes)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

productRouter.patch("/update/:noteID", async(req, res) => {
const {noteID} = req.params
try {
    await ProductModel.findByIdAndUpdate({_id:noteID},req.body)
         res.status(200).send({"msg":`The note with id:${noteID} has been updated`})
} catch (err) {
    res.status(400).send({ "err": err.message })
}
})


productRouter.delete("/delete/:noteID",async (req, res) => {
    const {noteID} = req.params
    try {
        await ProductModel.findByIdAndDelete({_id:noteID})
             res.status(200).send({"msg":`The note with id:${noteID} has been delete`})
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})

module.exports = {
    productRouter
}