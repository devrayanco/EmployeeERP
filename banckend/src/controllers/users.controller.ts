import { Request, Response, RequestHandler } from 'express'; 
import admin from '../services/firebase';
import axios from 'axios';

export const register = async (req: Request, res: Response) => {
  const { email, password, displayName } = req.body;

  try {
    const user = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    res.status(201).json({ uid: user.uid, email: user.email });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { uid } = req.body;

  try {
    const token = await admin.auth().createCustomToken(uid);
    res.json({ token });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    const user = await admin.auth().getUser(uid);
    res.json(user);
  } catch (err: any) {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers: admin.auth.UserRecord[] = [];
    let nextPageToken: string | undefined;

    do {
      const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
      allUsers.push(...listUsersResult.users);
      nextPageToken = listUsersResult.pageToken;
    } while (nextPageToken);

    res.json(allUsers);
  } catch (err: any) {
    console.error('Erro ao listar todos os usuários:', err);
    res.status(500).json({ error: 'Erro ao buscar todos os usuários' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const { displayName, email } = req.body;

  try {
    const updated = await admin.auth().updateUser(uid, {
      displayName,
      email,
    });
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { uid } = req.params;

  try {
    await admin.auth().deleteUser(uid);
    res.send('Usuário removido com sucesso');
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const apiKey = process.env.FIREBASE_API_KEY;

    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,
      {
        requestType: 'PASSWORD_RESET',
        email,
      }
    );

    res.status(200).json({ message: 'E-mail de recuperação enviado com sucesso.' });
  } catch (error: any) {
    res.status(500).json({ error: error.response?.data?.error?.message || 'Erro ao enviar e-mail.' });
  }
};

export const verifyToken = async (req: Request, res: Response): Promise<void> => {
  const { idToken } = req.body;

  if (!idToken) {
    res.status(400).json({ error: 'Token JWT não fornecido.' });
    return;
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).json({ uid: decodedToken.uid });
  } catch (error: any) {
    console.error('Erro ao verificar token no backend:', error);
    res.status(401).json({ error: 'Token JWT inválido.' });
  }
};
