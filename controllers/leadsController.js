import { Product } from "../models/productModel.js";
import { nanoid } from 'nanoid' ;
import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import { transporter, verifyTransporter } from "../config/mailTransporter.js";
const client_URL = process.env.CLIENT_URL;