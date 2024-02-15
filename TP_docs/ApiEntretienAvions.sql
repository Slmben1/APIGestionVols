CREATE DATABASE ApiEntretienAvions;


CREATE TABLE Avion (
    immatriculation VARCHAR(10) PRIMARY KEY,
    marque VARCHAR(100),
    modele VARCHAR(100),
    dateDernierEntretien DATE,
    reservoir INT,
    nivHuile INT
);


CREATE TABLE Mecanicien (
    id INT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100)
);


CREATE TABLE Entretien (
    dateEntretien DATE PRIMARY KEY,
    immatriculationAvion VARCHAR(10),
    idMecanicien INT,
    duree INT,
    habilitationVol BOOLEAN,
    FOREIGN KEY (immatriculationAvion) REFERENCES Avion(immatriculation),
    FOREIGN KEY (idMecanicien) REFERENCES Mecanicien(id)
);
