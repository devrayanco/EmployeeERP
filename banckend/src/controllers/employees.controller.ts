import { Request, Response } from 'express';
import admin from '../services/firebase';

const db = admin.firestore();
const employeesCollection = db.collection('employees');

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const now = admin.firestore.Timestamp.now();

    const docRef = await employeesCollection.add({
      ...data,
      createdAt: now,
      updatedAt: now
    });

    res.status(201).json({ id: docRef.id, message: 'Funcionário criado com sucesso.' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllEmployees = async (_: Request, res: Response) => {
  try {
    const snapshot = await employeesCollection.get();
    const employees = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(employees);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const getEmployeeById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const doc = await employeesCollection.doc(req.params.id).get();
      if (!doc.exists) {
        res.status(404).json({ error: 'Funcionário não encontrado.' });
        return;
      }
  
      res.json({ id: doc.id, ...doc.data() });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await employeesCollection.doc(id).update({
      ...data,
      updatedAt: admin.firestore.Timestamp.now()
    });

    res.json({ message: 'Funcionário atualizado com sucesso.' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    await employeesCollection.doc(req.params.id).delete();
    res.json({ message: 'Funcionário deletado com sucesso.' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
