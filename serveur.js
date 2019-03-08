const fs = require('fs');  // File System :  permet de créer l'asynchrone 
const sqlite3 = require('sqlite3').verbose();  //  Sqlite3 : permet d'appeler la bibliothèque Sqlite3// Verbose: permet d'afficher les erreurs dû à la base de donée
const express = require('express'); // Express : permet d'appeler le framework Express que l'on vat utiliser.
const cors = require('cors');  // Cors : CORS est un package node.js destiné à fournir un middleware Express // Middleware : crée un réseau d'échange d'informations entre différentes applications informatiques
const dbFile = 'comics.db'; // variable = nom de la base de donées
const db = new sqlite3.Database(dbFile); // Création d'une nouvelle base de données nommé par la valeur de la variable. 
const app = express();

//app.use(cors());

db.serialize(() =>{

            /////////////////Zone d'ecrriture de la base de donnée\\\\\\\\\\\\\\\\\\\

});


app.get('/', function(request, response){
    fs.readFile('index.html', function(err, data){
            response.end(data);
    });
});


    app.get('/connexion', function(request, response){
        response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('la page "CONNEXION"que vous cherchez est en cours de travaux');
        });
    

    app.get('/comics', function(request, response){
        response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('la page "COMICS" que vous cherchez est en cours de travaux');
        });


app.listen(3000, function (error) {
  if (!error) console.log('app listening port 3000');
});