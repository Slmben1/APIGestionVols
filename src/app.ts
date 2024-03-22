import express from "express";
import cors from "cors";
import * as middlewares from "./middlewares";
// Importation des gestionnaires pour Avion
import { getAllAvions, createAvion, getAvionByImmatriculation, updateAvion, deleteAvion } from './managers/avionHandlers';
import { getAllMecaniciens, createMecanicien, getMecanicienById, updateMecanicien, deleteMecanicien } from './managers/mecanicienHandlers';
import { getAllEntretiens, createEntretien, getEntretienByDate, updateEntretien, deleteEntretien } from './managers/entretienHandlers';

require("dotenv").config();

const allowedOrigins = ["http://localhost:8080", "http://127.0.0.1:8080"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(cors(options));
app.use(express.json());

// Routes pour les avions
app.get('/avions', getAllAvions);
app.post('/avions', createAvion);
app.get('/avions/:immatriculation', getAvionByImmatriculation);
app.put('/avions/:immatriculation', updateAvion);
app.delete('/avions/:immatriculation', deleteAvion);

// Routes pour les mécaniciens
app.get('/mecaniciens', getAllMecaniciens);
app.post('/mecaniciens', createMecanicien);
app.get('/mecaniciens/:id', getMecanicienById); // Notez l'utilisation de :id pour la récupération par ID
app.put('/mecaniciens/:id', updateMecanicien);
app.delete('/mecaniciens/:id', deleteMecanicien);

// Routes pour les entretiens
app.get('/entretiens', getAllEntretiens);
app.post('/entretiens', createEntretien);
app.get('/entretiens/:dateEntretien', getEntretienByDate); // Utilisation de :dateEntretien pour la récupération par date
app.put('/entretiens/:dateEntretien', updateEntretien);
app.delete('/entretiens/:dateEntretien', deleteEntretien);

// Middlewares pour gérer les erreurs et les 404 not found
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
