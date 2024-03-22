import { Request, Response, NextFunction } from "express";
import { mecanicienModel } from "../models/mecanicienModel";
import { sendSuccess, sendError } from "../../functions";
import { Mecanicien } from '../types/types';

// GET - Récupérer tous les mécaniciens
export const getAllMecaniciens = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const mecaniciens = await mecanicienModel.getAll();
    sendSuccess(res, mecaniciens);
  } catch (error) {
    next(error);
  }
};

// POST - Créer un nouveau mécanicien
export const createMecanicien = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newMecanicienData: Mecanicien = req.body;
    const newMecanicien = await mecanicienModel.create(newMecanicienData);
    sendSuccess(res, newMecanicien, 201);
  } catch (error: any) {
    sendError(res, error.message);
  }
};

// GET - Récupérer un mécanicien par ID
export const getMecanicienById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const mecanicien = await mecanicienModel.findById(Number(id));
    if (!mecanicien) {
      sendError(res, 'Mecanicien not found', 404);
    } else {
      sendSuccess(res, mecanicien);
    }
  } catch (error) {
    next(error);
  }
};

// PUT - Mettre à jour un mécanicien
export const updateMecanicien = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updateData: Partial<Mecanicien> = req.body;
    const updatedMecanicien = await mecanicienModel.update(Number(id), updateData);
    sendSuccess(res, updatedMecanicien);
  } catch (error) {
    next(error);
  }
};

// DELETE - Supprimer un mécanicien
export const deleteMecanicien = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await mecanicienModel.delete(Number(id));
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
