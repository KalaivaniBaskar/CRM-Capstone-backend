import mongoose from "mongoose";
import { LEAD_STATUS } from '../config/lead_status.js';

const LEAD_STATUS_VALUES = Object.values(LEAD_STATUS);

const userSchema = new mongoose.Schema(
        {
        lead_name: {
            type: String,
            required: true,
            trim: true,
        },
        lead_email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        lead_address: {
            type: String,
            trim: true,
            default: "na"
        },
        lead_source: {
            type: String,
            trim: true,
            default: "na"
            
        },
        lead_status : {
            type: String,
            required: true,
            enum: LEAD_STATUS_VALUES,
            default: LEAD_STATUS.Approached,
        },
        lead_created: {
            type: String,
            trim: true,
            default: "na"
        }
        },
        
        { timestamps: true }
  );
  
  export const User = mongoose.model("user", userSchema);