import express from 'express'
import {saveProduct,getAllProducts,getProductById,deleteProductById} from '../controller/list.controller'
import { verifyAdminToken } from '../middleware/verifyAuthToken';
const router = express.Router();


router.post('/',[verifyAdminToken],saveProduct);
router.get('/', getAllProducts);
router.get('/:id',getProductById);
router.delete('/:id',[verifyAdminToken],deleteProductById);

export default router;