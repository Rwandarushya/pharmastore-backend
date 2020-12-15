import express from 'express';
import {
  getAllUsers,signup,
  login, getSpecificUser, updateSpecificUser, deleteSpecificUser
} from '../controller/users.controller';
import {
  userSignupInput, userUpdateInput, userLoginInput
} from '../middleware/user.validation';
import { verifyAdminToken } from '../middleware/verifyAuthToken';

const router = express.Router();

router.post('/signup', [verifyAdminToken, userSignupInput], signup);

router.post('/login', [userLoginInput], login);

router.get('/',  getAllUsers);

router.get('/:id', [verifyAdminToken], getSpecificUser);

router.patch('/:id',
  [verifyAdminToken, userUpdateInput], updateSpecificUser);

router.delete('/:id', [verifyAdminToken], deleteSpecificUser);

export default router;
