const fs = require('fs');  // File System :  permet de créer l'asynchrone 
const sqlite3 = require('sqlite3').verbose();  //  Sqlite3 : permet d'appeler la bibliothèque Sqlite3// Verbose: permet d'afficher les erreurs dû à la base de donée
const express = require('express'); // Express : permet d'appeler le framework Express que l'on vat utiliser.
const cors = require('cors');  // Cors : CORS est un package node.js destiné à fournir un middleware Express // Middleware : crée un réseau d'échange d'informations entre différentes applications informatiques
const dbFile = 'comics.db'; // variable = nom de la base de donées
const db = new sqlite3.Database(dbFile); // Création d'une nouvelle base de données nommé par la valeur de la variable. 
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/js", express.static('./js/'));
app.use("/image", express.static('./image/'));
app.use("/style", express.static('./style/'));

//app.use(cors());

db.serialize(() =>{

            /////////////////Zone d'ecrriture de la base de donnée\\\\\\\\\\\\\\\\\\\

db.run('CREATE TABLE IF NOT EXISTS comics (comics_id INTEGER PRIMARY KEY NOT NULL, comic_name TEXT, number_of_tomes INTEGER, next_issue, genre_id INTEGER, publisher_id INTEGER, writer_id INTEGER, artist_id INTEGER,state_id INTEGER, FOREIGN KEY (genre_id) REFERENCES genre(genre_id) , FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id) , FOREIGN KEY (writer_id) REFERENCES writer(writer_id), FOREIGN KEY (artist_id) REFERENCES artist(artist_id), FOREIGN KEY (state_id) REFERENCES state(state_id) )');
  
  db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id) VALUES (?,?,?,?,?,?,?,?)', 	'The Wicked + The Divine', '4', '2019-04-10', 4, '1', '1', '1','1');
  
  /*db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)', 	'The Wicked + The Divine', 'Kieron Gillen', 'Jamie McKelvie', 'Image Comics', 'Fantasy', 'à définir', '5', 'https://cdn.imagecomics.com/assets/i/releases/7733/the-wicked-the-divine-vol-3-tp_862118e2cd.jpg', '2019-04-10');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)', 	'Paper Girls','Brian K. Vaughan','Cliff Chiang','Image Comics','Sci-fi','à définir','4','https://images-na.ssl-images-amazon.com/images/I/61pkw2X5%2BbL._SX323_BO1,204,203,200_.jpg','2019-04-03');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)', 	'The Vision','Tom King', 'Gabriel Hernandez Walta', 'Marvel Entertainment', 'Superhero','à définir', '2', 'https://images-na.ssl-images-amazon.com/images/I/51mQZQvNpEL._SX323_BO1,204,203,200_.jpg', 'None');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)', 	'The Punisher MAX', 'Ennis Garth', 'Darick Robertson', 'Marvel Entertainment', 'Superhero', 'à définir', '18', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZxiB54es04WgJ1QTFc3h9Kl9JVxWgDIQz-kD-1Y40nhYLOgn', 'None');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'I Killed Adolf Hitler', 'Kim thompson', 'Jason', 'Fantagraphics', 'Sci-fi', 'à définir', '1', 'https://images.gr-assets.com/books/1518960491l/775864.jpg', 'None');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'The Invisibles', 'Grant Morrison', 'Steve Yeowell', 'Vertigo', 'Sci-fi', 'à définir', '2', 'https://www.hipcomic.com/uploads/cache/d61df302acbb682d40ea8555f56e9804-460x699.png', '2019-05-19');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'Fables', 'Bill Willingham', 'Lan Medina', 'Vertigo', 'Fantasy', 'à définir', '23', 'https://www.bedetheque.com/media/Couvertures/Couv_356373.jpg', '2019-03-20');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'Y: The Last Man', 'Brian K. Vaughan', 'Pia Guerra', 'Vertigo', 'Sci-fi', 'à définir', '10', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Y_-_The_Last_Man_23_-_Widow%27s_Pass_03_-_00_-_FC.jpg/250px-Y_-_The_Last_Man_23_-_Widow%27s_Pass_03_-_00_-_FC.jpg', 'None');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'Daytripper', 'Gabriel Ba', 'Fabio Moon', 'Vertigo', 'One-shot', 'à définir', '1', 'https://bdi.dlpdomain.com/album/9782365770132/couv/M385x862/daytripper-au-jour-le-jour.jpg', 'None');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'American Splendor', 'Harvey Pekar', 'Robert Crumb','DC comics','Autobiography','à définir','39', 'https://images-na.ssl-images-amazon.com/images/I/91MXF3WHdOL.jpg','None');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'Ghost World', 'Daniel Clowes', 'Daniel Clowes', 'Fantagraphics', 'One-shot', 'à définir', '11', 'https://images-na.ssl-images-amazon.com/images/I/91xJutQVXLL.jpg', 'None');
  db.run('INSERT INTO desk (title, writer, artist, publisher, genre, synopsis, nombre_de_tome, couverture, nextissue) VALUES (?,?,?,?,?,?,?,?,?)',  'Preacher', 'Ennis Garth', 'Steve Dillon', 'Vertigo', 'Horror', 'à définir', '6', 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3400439.jpg','2019-06-13');  */
 
db.run('CREATE TABLE IF NOT EXISTS title (title_id INTEGER PRIMARY KEY NOT NULL, title TEXT )');
    db.run('INSERT INTO  title (title) VALUES (?)', 'The Wicked + The Divine');
    db.run('INSERT INTO  title (title) VALUES (?)', 'Paper Girl');
    db.run('INSERT INTO  title (title) VALUES (?)', 'The Vision');
    db.run('INSERT INTO  title (title) VALUES (?)', 'The Punisher MAX');
    db.run('INSERT INTO  title (title) VALUES (?)', 'I Killed Adolf Hitler');
    db.run('INSERT INTO  title (title) VALUES (?)', 'The Invisibles');
    db.run('INSERT INTO  title (title) VALUES (?)', 'Fables');
    db.run('INSERT INTO  title (title) VALUES (?)', 'Y: The The Last Man');
    db.run('INSERT INTO  title (title) VALUES (?)', 'Daytripper');
    db.run('INSERT INTO  title (title) VALUES (?)', 'American Splendor');
    db.run('INSERT INTO  title (title) VALUES (?)', 'Ghost World');
    db.run('INSERT INTO  title (title) VALUES (?)', 'Preacher');
    
    


db.run('CREATE TABLE IF NOT EXISTS writer (writer_id INTEGER PRIMARY KEY NOT NULL, writer TEXT )');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Kieron Gillen');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Brian K. Vaughan');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Tom King');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Ennis Garth');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Kim thompson');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Grant Morrison');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Lan Medina');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Fabio Moon');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Harvey Pekar');
    db.run('INSERT INTO  writer (writer) VALUES (?)', 'Daniel Clowes');
 

db.run('CREATE TABLE IF NOT EXISTS artist (artist_id INTEGER PRIMARY KEY NOT NULL, artist TEXT )');
    db.run('INSERT INTO  artist (artist) VALUES (?)', 'Jamie McKelvie');
    db.run('INSERT INTO  artist (artist) VALUES (?)', 'Cliff Chiang');
     db.run('INSERT INTO  artist (artist) VALUES (?)', 'Gabriel Hernandez Walta');
    db.run('INSERT INTO  artist (artist) VALUES (?)', 'Darick Robertson');
     db.run('INSERT INTO  artist (artist) VALUES (?)', 'Jason');
    db.run('INSERT INTO  artist (artist) VALUES (?)', 'Steve Yeowell');
     db.run('INSERT INTO  artist (artist) VALUES (?)', 'Lan Medina');
    db.run('INSERT INTO  artist (artist) VALUES (?)', 'Pia Guerra');
     db.run('INSERT INTO  artist (artist) VALUES (?)', 'Fabio Moon');
    db.run('INSERT INTO  artist (artist) VALUES (?)', 'Robert Crumb');
     db.run('INSERT INTO  artist (artist) VALUES (?)', 'Daniel Clowes');
    db.run('INSERT INTO  artist (artist) VALUES (?)', 'Steve Dillon');


db.run('CREATE TABLE IF NOT EXISTS publisher (publisher_id INTEGER PRIMARY KEY NOT NULL, publisher TEXT )');
 db.run('INSERT INTO  publisher (publisher) VALUES (?)', 'Image Comics');
    db.run('INSERT INTO publisher (publisher) VALUES (?)', 'Marvel Entertainment');
     db.run('INSERT INTO  publisher (publisher) VALUES (?)', 'Fantagraphics');
    db.run('INSERT INTO publisher (publisher) VALUES (?)', 'DC comics');
     db.run('INSERT INTO  publisher (publisher) VALUES (?)', 'Vertigo')



db.run('CREATE TABLE IF NOT EXISTS genre (genre_id INTEGER PRIMARY KEY NOT NULL, genre TEXT )');
 db.run('INSERT INTO  genre (genre) VALUES (?)', 'Fantasy');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'Sci-fi');
db.run('INSERT INTO  genre (genre) VALUES (?)', 'Superhero');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'Fantasy');
db.run('INSERT INTO  genre (genre) VALUES (?)', 'One-shot');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'Autobiography');
db.run('INSERT INTO  genre (genre) VALUES (?)', 'Horror');



db.run('CREATE TABLE IF NOT EXISTS state (state_id INTEGER PRIMARY KEY NOT NULL, state TEXT )');
    db.run('INSERT INTO state (state) VALUES (?)', 'Ongoing');
    db.run('INSERT INTO  state (state) VALUES (?)', 'Completed');
/*
db.run('CREATE TABLE IF NOT EXISTS synopsis (synopsis_id INTEGER PRIMARY KEY NOT NULL, synopsis TEXT )');
        db.run('INSERT INTO  synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO  synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO  synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO  synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO  synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO  synopsis (synopsis) VALUES (?)', '');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', '');


db.run('CREATE TABLE IF NOT EXISTS nombre_de_tome (nombre_de_tome_id INTEGER PRIMARY KEY NOT NULL, nombre_de_tome INTEGER )');
        db.run('INSERT INTO  nombre_de_tome (nombre_de_tome) VALUES (?)', '');
    db.run('INSERT INTO nombre_de_tome (nombre_de_tome) VALUES (?)', '');
    db.run('INSERT INTO  nombre_de_tome (nombre_de_tome) VALUES (?)', '');
    db.run('INSERT INTO nombre_de_tome (nombre_de_tome) VALUES (?)', '');
    db.run('INSERT INTO  nombre_de_tome (nombre_de_tome) VALUES (?)', '');
    db.run('INSERT INTO nombre_de_tome (nombre_de_tome) VALUES (?)', '');
db.run('INSERT INTO  nombre_de_tome (nombre_de_tome) VALUES (?)', '');
    db.run('INSERT INTO nombre_de_tome (nombre_de_tome) VALUES (?)', '');
db.run('INSERT INTO  nombre_de_tome (nombre_de_tome) VALUES (?)', '');
    db.run('INSERT INTO nombre_de_tome (nombre_de_tome) VALUES (?)', '');


db.run('CREATE TABLE IF NOT EXISTS couverture (couverture_id INTEGER PRIMARY KEY NOT NULL, couverture TEXT )');
        db.run('INSERT INTO  couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO couverture (couverture) VALUES (?)', '');
db.run('INSERT INTO  couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO  couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO  couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO couverture (couverture) VALUES (?)', '');
    vdb.run('INSERT INTO  couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO  couverture (couverture) VALUES (?)', '');
    db.run('INSERT INTO couverture (couverture) VALUES (?)', '');

db.run('CREATE TABLE IF NOT EXISTS next_issue (next_issue_id INTEGER PRIMARY KEY NOT NULL, next_issue TEXT )');
db.run('INSERT INTO  next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO  next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO  next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO  next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO  next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO  next_issue (next_issue) VALUES (?)', '');
    db.run('INSERT INTO next_issue (next_issue) VALUES (?)', '');*/
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

    app.get('/basededonees', function(request, response){
        db.all('SELECT * FROM comics', function (error, data) {
     response.send(data);
        });
    });
        
   

app.listen(3000, function (error) {
  if (!error) console.log('app listening port 3000 Poto TKT ça marche maintenant ;)');
});
