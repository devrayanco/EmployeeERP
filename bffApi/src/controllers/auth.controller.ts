import { Request, Response } from 'express';
import axios from 'axios';
import { backendUrl } from '../config/config';

const BACKEND_AUTH_URL = `${backendUrl}/api/users`;

export const register = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${BACKEND_AUTH_URL}/register`, req.body);
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Erro ao registrar usuário no backend:', error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'Erro ao registrar.' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${BACKEND_AUTH_URL}/login`, req.body);
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Erro ao fazer login no backend:', error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'Erro ao fazer login.' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${BACKEND_AUTH_URL}/getAllUsers`, {
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


export const updateUser = async (req: Request, res: Response) => {
  try {
    const response = await axios.put(`${BACKEND_AUTH_URL}/${req.params.uid}`, req.body, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    res.json(response.data);
  } catch (error: any) {
    console.error('Erro ao atualizar usuário no backend:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Erro ao atualizar usuário.' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const response = await axios.delete(`${BACKEND_AUTH_URL}/${req.params.uid}`, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    res.status(response.status).send(response.data);
  } catch (error: any) {
    console.error('Erro ao deletar usuário do backend:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Erro ao deletar usuário.' });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${BACKEND_AUTH_URL}/forgot-password`, req.body);
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Erro ao solicitar recuperação de senha no backend:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Erro ao solicitar recuperação de senha.' });
  }
};