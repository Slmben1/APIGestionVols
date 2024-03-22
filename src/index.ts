import express from 'express';
import cors from 'cors';
import * as avionHandlers from './managers/avionHandlers'; 

const app = express();

// Configuration de CORS
app.use(cors({
    // Définir les origines autorisées ou utiliser '*' pour permettre toutes les origines
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));

// Middleware pour analyser les corps des requêtes en JSON
app.use(express.json());

// Utiliser les gestionnaires d'avions pour la route '/avions'
// Supposons que avionHandlers soit un objet contenant les middlewares pour chaque opération CRUD
app.use('/avions', avionHandlers.getAllAvions);
app.use('/avions', avionHandlers.createAvion);
app.use('/avions/:immatriculation', avionHandlers.getAvionByImmatriculation);
app.use('/avions/:immatriculation', avionHandlers.updateAvion);
app.use('/avions/:immatriculation', avionHandlers.deleteAvion);

export default app;
