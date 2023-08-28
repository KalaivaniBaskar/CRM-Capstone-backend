import express from 'express';
import { verifyRolePermission } from '../middleware/verifyRolePermission.js';
import { USER_ROLES } from '../config/user_Roles.js';
import { verifyAccessToken } from '../middleware/verifyAccessToken.js';

const router = express.Router();

// router.post('/get-leads', verifyAccessToken, verifyRolePermission(USER_ROLES.Marketing, USER_ROLES.Admin), getLeads )
// router.post('/get-customers', verifyAccessToken, verifyRolePermission(USER_ROLES.Marketing, USER_ROLES.Admin, USER_ROLES.Sales), getCustomers )
// router.post('/get-product', verifyAccessToken, verifyRolePermission(USER_ROLES.Marketing, USER_ROLES.Admin, USER_ROLES.Sales), getCustomers )
// router.post('/add-leads', verifyAccessToken, verifyRolePermission(USER_ROLES.Marketing, USER_ROLES.Admin), addNewLead )
// router.post('/update-leads', verifyAccessToken, verifyRolePermission(USER_ROLES.Marketing, USER_ROLES.Admin), getLeads )

export const leadsRouter = router;