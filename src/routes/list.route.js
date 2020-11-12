import express from 'express'
import {saveProduct,getAllProducts,getProductById,deleteProductById} from '../controller/list.controller'

const router = express.Router();


router.post('/',saveProduct);
router.get('/', getAllProducts);
router.get('/:id',getProductById);
router.delete('/:id',deleteProductById);

export default router;