import { Mecanicien } from "../types/types";

export const mecanicienModel = {
  getAll: async (): Promise<Mecanicien[]> => {
    // Implémentation pour récupérer tous les mécaniciens
    return [];
  },
  create: async (data: Mecanicien): Promise<Mecanicien> => {
    // Implémentation pour créer un nouveau mécanicien
    return {} as Mecanicien;
  },
  findById: async (id: number): Promise<Mecanicien | null> => {
    // Implémentation pour trouver un mécanicien par son id
    return null;
  },
  update: async (id: number, data: Partial<Mecanicien>): Promise<Mecanicien> => {
    // Implémentation pour mettre à jour un mécanicien
    return {} as Mecanicien;
  },
  delete: async (id: number): Promise<void> => {
    // Implémentation pour supprimer un mécanicien
  },
};
