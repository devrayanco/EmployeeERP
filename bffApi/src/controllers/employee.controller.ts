import { Request, Response } from 'express';
import axios from 'axios';
import { backendUrl } from '../config/config';

const BACKEND_EMPLOYEE_URL = `${backendUrl}/api/employees`;

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${BACKEND_EMPLOYEE_URL}/`, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error('Erro ao buscar usuários:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });

    res.status(error.response?.status || 500).json({ error: 'Erro ao buscar todos os usuários.' });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(BACKEND_EMPLOYEE_URL, req.body, {
      headers: {
        Authorization: req.headers.authorization 
      }
    });
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Erro ao criar funcionário no backend:', error.message);
    res.status(500).json({ error: 'Erro ao criar funcionário.' });
  }
};

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${BACKEND_EMPLOYEE_URL}/${req.params.id}`, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    res.json(response.data);
  } catch (error: any) {
    console.error('Erro ao buscar funcionário por ID do backend:', error.message);
    res.status(500).json({ error: 'Erro ao buscar funcionário.' });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const response = await axios.put(`${BACKEND_EMPLOYEE_URL}/${req.params.id}`, req.body, {
      headers: {
        Authorization: req.headers.authorization 
      }
    });
    res.json(response.data);
  } catch (error: any) {
    console.error('Erro ao atualizar funcionário no backend:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar funcionário.' });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const response = await axios.delete(`${BACKEND_EMPLOYEE_URL}/${req.params.id}`, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Erro ao deletar funcionário do backend:', error.message);
    res.status(500).json({ error: 'Erro ao deletar funcionário.' });
  }
};