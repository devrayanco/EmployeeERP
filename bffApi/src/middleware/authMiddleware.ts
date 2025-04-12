import { Request, Response as ExpressResponse, NextFunction } from 'express';

interface CustomRequest extends Request {
  uid?: string;
}

const authMiddleware = async (req: CustomRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    req.uid = 'fake-uid';
    next();
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    res.status(401).json({ message: 'Token inválido' });
  }
};


export default authMiddleware;
