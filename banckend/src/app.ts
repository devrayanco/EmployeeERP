import express from 'express';
import './services/firebase';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.routes';
import employeeRoutes from '../src/routes/employees.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
  res.send('API Funcionando! 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
