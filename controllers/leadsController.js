import { nanoid } from 'nanoid' ;
import { Lead } from "../models/leadModel.js"
import { nanoid } from "nanoid";
import dotenv from 'dotenv'
dotenv.config()
import { transporter, verifyTransporter } from "../config/mailTransporter.js";
const client_URL = process.env.CLIENT_URL; 

// get all leads
export const getLeads = async(req,res) => {
    console.log("get leads")
    try{
        //  if(! req.body)
        //  return res.status(401).json({message : "Invalid Credentials"});
  
         const leadsList = await Lead.find(req.body).sort({lead_created: -1})
         console.log(leadsList)
         if(leadsList.length > 0) {
          return res.status(200).json({ leadsList });
         }
         else {
          return res.status(404).json({message : "No leads found"});
         }
  
      }
    catch(error){
      console.log(error)
        res.status(500).send({message: "Internal server error", error: error})
      }
  } 

  // add new lead : 
  export const addNewLead = async(req,res) => {
    console.log("get leads,")
    try{
         if(! req.body)
         return res.status(401).json({message : "No data provided"});
        const id = nanoid(6)
        const lead_id = "LD-"+id

        try{
         const newLead = new Lead({...req.body, lead_id })
         await newLead.save();
         console.log("NEW lead added");
       
          return res.status(200).json({message: "Lead added", lead_id });
         
        }
        catch(error){
          return res.status(404).json({message : "DB error"});
         }
  
      }
    catch(error){
      console.log(error)
        res.status(500).send({message: "Internal server error", error: error})
      }
  } 
