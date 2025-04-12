import express from 'express';
import cors from 'cors';
import employeeRoutes from './routes/employee.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

export default app;