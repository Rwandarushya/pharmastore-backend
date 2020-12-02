import express from 'express'
import {createProduct,getAllProducts,getProductById,deleteProductById,updateProductById} from '../controller/product.controller'
import { verifyAdminToken } from '../middleware/verifyAuthToken';
const router = express.Router();

router.post('/', createProduct);
router.get('/:email',getAllProducts);
router.get('/:id',getProductById);
router.patch('/:id',updateProductById);
router.delete('/:id',[verifyAdminToken],deleteProductById);


  export default router;