// import admin from 'firebase-admin';
// import * as dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// const projectId = process.env.FIREBASE_PROJECT_ID_API; // Use uma variável diferente para a API, se desejar
// const privateKey = process.env.FIREBASE_PRIVATE_KEY_API?.replace(/\\n/g, '\n'); // Use uma variável diferente
// const clientEmail = process.env.FIREBASE_CLIENT_EMAIL_API; // Use uma variável diferente

// if (!projectId || !privateKey || !clientEmail) {
//   console.error('Erro: As variáveis de ambiente do Firebase para a API não foram configuradas corretamente.');
//   process.exit(1);
// }

// if (!admin.apps.length) {
//   try {
//     admin.initializeApp({
//       credential: admin.credential.cert({
//         projectId: projectId,
//         privateKey: privateKey,
//         clientEmail: clientEmail,
//       }),
//     });
//     console.log('Firebase Admin SDK inicializado com sucesso na API!');
//   } catch (error: any) {
//     console.error('Erro ao inicializar o Firebase Admin SDK na API:', error.message);
//     process.exit(1);
//   }
// }

// export default admin;