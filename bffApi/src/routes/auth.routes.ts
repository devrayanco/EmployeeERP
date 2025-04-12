import express from 'express';
import * as authController from '../controllers/auth.controller';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/users', authController.getAllUsers);
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);

export default router;

// TODO 
// router.put('/user/:uid', authController.updateUser);
// router.delete('/user/:uid', authController.deleteUser);
