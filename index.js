import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { corsOptions } from './config/corsOptions.js'
import { mongoConnection } from './db.js'
import { userRouter } from './routes/users.js'
import { adminRouter } from './routes/admin.js'
import { productsRouter } from './routes/products.js'
import { ordersRouter } from './routes/orders.js'
import { requestRouter } from './routes/requests.js'

const PORT = process.env.PORT || 3500;
const app = express();

//DataBase connection 
mongoConnection(); 

//in-built middleware for JSON
app.use(express.json())

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// To handle Cross Origin Resource Sharing
app.use(cors(corsOptions)); 

//Base Route - Router 
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.use('/request', requestRouter)


// Listening to server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import crypto from 'crypto'
// console.log(crypto.randomBytes(64).toString('hex'));     