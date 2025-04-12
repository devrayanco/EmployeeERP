import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();


router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

export default router;