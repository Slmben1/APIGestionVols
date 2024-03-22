// Définition de l'interface pour un Avion
export interface Avion {
    immatriculation: string;
    marque: string;
    modele: string;
    dateDernierEntretien: Date | string;
    reservoir: number;
    nivHuile: number;
  }
  
  // Définition de l'interface pour un Mecanicien
  export interface Mecanicien {
    id: number;
    nom: string;
    prenom: string;
  }
  
  // Définition de l'interface pour un Entretien
  export interface Entretien {
    dateEntretien: Date | string;
    immatriculationAvion: string;
    idMecanicien: number;
    duree: number;
    habilitationVol: boolean;
  }
