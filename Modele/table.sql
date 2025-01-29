 CREATE TABLE equipe(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,nom VARCHAR(100) 
 NOT NULL,prenom VARCHAR(100) NOT NULL,poste VARCHAR(100) NOT NULL);


   CREATE TABLE programmediffusion (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nom_programme VARCHAR(100)
    NOT NULL,date_diffusion DATE NOT NULL, heure_diffusion TIME NOT NULL);

    INSERT INTO equipe (nom,prenom,poste) VALUES ("Youssef","Zahra","directrice générale");

     INSERT INTO equipe (nom,prenom,poste) VALUES ("Tarek","Ali","chef d'émission");

      SELECT * FROM equipe;


 INSERT INTO programmediffusion (nom_programme, date_diffusion, heure_diffusion)
     VALUES ("chigoma", '2025-10-01', '20:00:00');

INSERT INTO programmediffusion (nom_programme, date_diffusion, heure_diffusion) 
    VALUES ("débat", '2025-02-15', '23:30:00');


 INSERT INTO programmediffusion (nom_programme, date_diffusion, heure_diffusion)
     VALUES ("mazaraka", '2025-11-01', '14:15:00');

   SELECT * FROM programmediffusion;


    DELETE FROM equipe WHERE id = 3;   