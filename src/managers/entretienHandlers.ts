import { Request, Response, NextFunction } from "express";
import { entretienModel } from "../models/entretienModel";
import { sendSuccess, sendError } from '../../functions';
import { Entretien } from '../types/types';



// GET - Récupérer tous les entretiens
export const getAllEntretiens = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const entretiens = await entretienModel.getAll();
    sendSuccess(res, entretiens);
  } catch (error) {
    next(error);
  }
};

// POST - Créer un nouvel entretien
export const createEntretien = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newEntretienData: Entretien = req.body;
    const newEntretien = await entretienModel.create(newEntretienData);
    sendSuccess(res, newEntretien, 201);
  } catch (error: any) {
    sendError(res, error.message);
  }
};

// GET - Récupérer un entretien par sa date
export const getEntretienByDate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { dateEntretien } = req.params;
    const entretien = await entretienModel.findByDateEntretien(dateEntretien);
    if (!entretien) {
      sendError(res, 'Entretien not found', 404);
    } else {
      sendSuccess(res, entretien);
    }
} catch (error) {
    next(error);
  }
};

// PUT - Mettre à jour un entretien
export const updateEntretien = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { dateEntretien } = req.params;
    const updateData: Partial<Entretien> = req.body;
    const updatedEntretien = await entretienModel.update(dateEntretien, updateData);
    if (updatedEntretien) {
      sendSuccess(res, updatedEntretien);
    } else {
      sendError(res, 'Entretien not found or could not be updated', 404);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE - Supprimer un entretien
export const deleteEntretien = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { dateEntretien } = req.params;
        const deletionSuccess = await entretienModel.delete(dateEntretien);
        if (deletionSuccess !== undefined) {
            res.status(204).end(); // Pas de contenu, mais confirmation que l'entité a été supprimée
        } else {
            sendError(res, 'Entretien not found or could not be deleted', 404);
        }
    } catch (error) {
        next(error);
    }
};
