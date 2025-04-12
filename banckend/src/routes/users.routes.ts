import { Router, Request, Response } from 'express';
import {
    register,
    loginUser,
    getUser,
    updateUser,
    deleteUser,
    forgotPassword,
    verifyToken,
    getAllUsers 
} from '../controllers/users.controller';

import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

router.get('/getAllUsers', authenticateToken, getAllUsers);
router.post('/register', register);
router.post('/login', loginUser);
router.get('/:uid', authenticateToken, getUser);
router.post('/forgot-password', authenticateToken, forgotPassword);
router.post('/verify-token', verifyToken);


// TODO: IMPLETAR NO FUTURO OPÇÕES
// router.delete('/:uid',authenticateToken, deleteUser);
// router.put('/:uid', authenticateToken, updateUser);
// adicionar logs

export default router;