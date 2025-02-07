 
 
 CREATE DATABASE chainetv;

SHOW DATABASE;


 USE chainetv;
 
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

   ALTER TABLE programmedeffusion ADD liens_video VARCHAR (500);
   
   UPDATE programmediffusion SET lien_video = ' https://www.youtube.com/watch?v=ZlRvPRMGoOU |'WHERE id = 3;

    DELETE FROM equipe WHERE id = 3;   


 CREATE TABLE utilisateur(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,nom VARCHAR(100) NOT NULL, 
 prenom VARCHAR(100)NOT NULL,email VARCHAR (255) NOT  NULL,mot_de_passe VARCHAR(255) NOT NULL,date_de_naissance DATE);

  INSERT INTO utilisateur (nom,prenom,email,mot_de_passe,date_de_naissance) VALUES 
  ('Nabil','Bachira','bachiranabil@gmail.com','bachi125', '1990-05-15');

INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, date_de_naissance) VALUES 
('Djibril', 'Ikrima', 'djibril.ikrima@gmail.com', 'ikra90k', '1985-11-22');

INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, date_de_naissance) VALUES 
('Hachim', 'Yazid', 'yazid.hachim@gmail.com', 'yazi4697', '1992-09-29');

 INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, date_de_naissance) VALUES 
 ('Oussama', 'Brahim', 'oussama.brahim@gmail.com', 'brahima446', '1978-03-08');

 