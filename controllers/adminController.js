import { Product } from "../models/productModel.js";
import { nanoid } from 'nanoid' ;

export const handleAddProduct = async(req, res) => {
    try{

        const {product} = req.body;
        const id = nanoid(7);
        const product_ID = product.product_type + "-" + id
        console.log("handleprod",req.body) 
        const newProduct = new Product({...product, product_ID})
        const result = await newProduct.save();
        console.log(result)
        if( result)
        res.status(200).json({message:"ok"});
        else
        res.status(400).json({message:"Error occured"});

    }
    catch(error){
        res.status(500).send({message: "Internal server error", error: error})
      }
}