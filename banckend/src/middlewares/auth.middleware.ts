import { Request, Response, NextFunction } from 'express';

export async function authenticateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
}



// TODO: pensar no futuro perfil de acesso

