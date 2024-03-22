//********** Imports **********//
import { Request, Response, NextFunction } from "express";
import { avionModel } from "../models/avionModel";
import { sendSuccess, sendError } from "../../functions";
import { Avion } from '../types/types';



//********** Managers **********//

// GET - Récupérer tous les avions
export const getAllAvions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const avions = await avionModel.getAll();
    sendSuccess(res, avions); // Utilisation de la fonction utilitaire sendSuccess
  } catch (error) {
    next(error);
  }
};

// POST - Créer un nouvel avion
export const createAvion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newAvionData: Avion = req.body;
    const newAvion = await avionModel.create(newAvionData);
    sendSuccess(res, newAvion, 201); // Utilisation de la fonction utilitaire sendSuccess
  } catch (error: any) {
    sendError(res, error.message); // Utilisation de la fonction utilitaire sendError
  }
};

// GET - Récupérer un avion par immatriculation
export const getAvionByImmatriculation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { immatriculation } = req.params;
    const avion = await avionModel.findByImmatriculation(immatriculation);
    if (!avion) {
      sendError(res, 'Avion not found', 404); // Utilisation de la fonction utilitaire sendError
    } else {
      sendSuccess(res, avion); // Utilisation de la fonction utilitaire sendSuccess
    }
  } catch (error) {
    next(error);
  }
};

// PUT - Mettre à jour un avion
export const updateAvion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { immatriculation } = req.params;
    const updateData: Partial<Avion> = req.body;
    const updatedAvion = await avionModel.update(immatriculation, updateData);
    sendSuccess(res, updatedAvion); // Utilisation de la fonction utilitaire sendSuccess
  } catch (error) {
    next(error);
  }
};

// DELETE - Supprimer un avion
export const deleteAvion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { immatriculation } = req.params;
    await avionModel.delete(immatriculation);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
