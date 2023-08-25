import express from 'express';
import {} from '../controllers/userController.js'
import { verifyRolePermission } from '../middleware/verifyRolePermission.js';
import { USER_ROLES } from '../config/user_Roles.js';
import { handleAddProduct } from '../controllers/adminController.js';
import { verifyAccessToken } from '../middleware/verifyAccessToken.js';

const router = express.Router();

router.post('/add-product', verifyAccessToken, verifyRolePermission(USER_ROLES.Admin), handleAddProduct )  

export const adminRouter = router;