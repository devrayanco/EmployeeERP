import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const backendUrl = process.env.BACKEND_URL;

if (!backendUrl) {
  console.error('Erro: A variável de ambiente BACKEND_URL não foi configurada.');
  process.exit(1);
}