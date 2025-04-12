import express from 'express';
import * as employeeController from '../controllers/employees.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', authenticateToken, employeeController.createEmployee);
router.get('/', authenticateToken, employeeController.getAllEmployees);
router.get('/:id', authenticateToken, employeeController.getEmployeeById);
router.put('/:id', authenticateToken, employeeController.updateEmployee);
router.delete('/:id', authenticateToken, employeeController.deleteEmployee);

export default router;
