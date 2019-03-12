const fs = require('fs');  // File System :  permet de créer l'asynchrone 
const sqlite3 = require('sqlite3').verbose();  //  Sqlite3 : permet d'appeler la bibliothèque Sqlite3// Verbose: permet d'afficher les erreurs dû à la base de donée
const express = require('express'); // Express : permet d'appeler le framework Express que l'on vat utiliser.
const cors = require('cors');  // Cors : CORS est un package node.js destiné à fournir un middleware Express // Middleware : crée un réseau d'échange d'informations entre différentes applications informatiques
const dbFile = 'comics.db'; // variable = nom de la base de donées
const db = new sqlite3.Database(dbFile); // Création d'une nouvelle base de données nommé par la valeur de la variable. 
const bodyParser = require('body-parser');
const app = express();

//var urlencodedparser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/js", express.static('./js/'));
app.use("/image", express.static('./image/'));
app.use("/style", express.static('./style/'));

//app.use(cors());

db.serialize(() => {

    /////////////////Zone d'ecrriture de la base de donnée\\\\\\\\\\\\\\\\\\\

    db.run('CREATE TABLE IF NOT EXISTS comics (comics_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, comic_name TEXT, number_of_tomes INTEGER, next_issue TEXT, genre_id INTEGER, publisher_id INTEGER, writer_id INTEGER, artist_id INTEGER, state_id INTEGER, synopsis_id INTEGER, img_url TEXT,FOREIGN KEY (genre_id) REFERENCES genre(genre_id) , FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id) , FOREIGN KEY (writer_id) REFERENCES writer(writer_id), FOREIGN KEY (artist_id) REFERENCES artist(artist_id), FOREIGN KEY (state_id) REFERENCES state(state_id), FOREIGN KEY (synopsis_id) REFERENCES synopsis(synopsis_id) )');

    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'The Wicked + The Divine', 5, '2019-04-10', 1, 1, 1, 1, 1, 1, 'https://cdn.imagecomics.com/assets/i/releases/7733/the-wicked-the-divine-vol-3-tp_862118e2cd.jpg');
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'Paper Girls', 4, '2019-04-03', 2, 2, 2, 2, 1, 2, 'https://images-na.ssl-images-amazon.com/images/I/61pkw2X5%2BbL._SX323_BO1,204,203,200_.jpg');
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'The Vision', 2, 'None', 5, 3, 3, 3, 1, 3, 'https://images-na.ssl-images-amazon.com/images/I/51mQZQvNpEL._SX323_BO1,204,203,200_.jpg');
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'The Punisher MAX ', 4, '2019-05-06', 5, 1, 4, 4, 1, 4, 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/431440/431440._SX1280_QL80_TTD_.jpg');
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'I Killed Adolf Hitler', 4, 'None', 4, 1, 5, 5, 1, 5, 'https://images.gr-assets.com/books/1518960491l/775864.jpg');
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'The Invisibles', 4, '2019-04-20', 5, 1, 6, 6, 1, 6, 'https://www.hipcomic.com/uploads/cache/d61df302acbb682d40ea8555f56e9804-460x699.png');
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'Fables', 4, '2019-04-12', 1, 1, 7, 7, 1, 7, 'https://www.bedetheque.com/media/Couvertures/Couv_356373.jpg');
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'Y: The Last Man', 4, 'None', 3, 1, 8, 8, 1, 8, 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Y_-_The_Last_Man_23_-_Widow%27s_Pass_03_-_00_-_FC.jpg/250px-Y_-_The_Last_Man_23_-_Widow%27s_Pass_03_-_00_-_FC.jpg')
    db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', 'Daytripper', 4, 'None', 4, 1, 9, 9, 1, 9, 'https://bdi.dlpdomain.com/album/9782365770132/couv/M385x862/daytripper-au-jour-le-jour.jpg');


    db.run('CREATE TABLE IF NOT EXISTS title (title_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title TEXT )');
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

    db.run('CREATE TABLE IF NOT EXISTS writer (writer_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, writer TEXT )');
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

    db.run('CREATE TABLE IF NOT EXISTS artist (artist_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, artist TEXT )');
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

    db.run('CREATE TABLE IF NOT EXISTS publisher (publisher_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, publisher TEXT )');
    db.run('INSERT INTO publisher (publisher) VALUES (?)', 'Image Comics');
    db.run('INSERT INTO publisher (publisher) VALUES (?)', 'Marvel Entertainment');
    db.run('INSERT INTO publisher (publisher) VALUES (?)', 'Fantagraphics');
    db.run('INSERT INTO publisher (publisher) VALUES (?)', 'DC comics');
    db.run('INSERT INTO publisher (publisher) VALUES (?)', 'Vertigo')


    db.run('CREATE TABLE IF NOT EXISTS genre (genre_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, genre TEXT )');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'Fantasy');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'Sci-fi');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'Horror');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'One-shot');
    db.run('INSERT INTO genre (genre) VALUES (?)', 'Superhero');


    db.run('CREATE TABLE IF NOT EXISTS state (state_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, state TEXT )');
    db.run('INSERT INTO state (state) VALUES (?)', 'Ongoing');
    db.run('INSERT INTO state (state) VALUES (?)', 'Completed');

    db.run('CREATE TABLE IF NOT EXISTS synopsis (synopsis_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, synopsis TEXT )');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'Tous les quatre-vingt-dix ans ou presque, douze dieux se réincarnent dans le corps de jeunes adultes. Ils sont charismatiques et brillants. Ils se tiennent devant des foules immenses, qu\'ils emmènent dans l\'extase à travers des langues inconnues. La rumeur veut qu\'ils soient capables de miracles. Ils sauvent des vies, que ce soit métaphorique ou concret. Ils sont aimés. Ils sont détestés. Dans moins de deux ans, ils seront tous morts...');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'Au lendemain de la célèbre fête d\'Halloween, la petite ville de Stony Stream, Ohio, s\'éveille. C\'est du moins le cas de Mac, KJ, Tiffany et Erin, quatre jeunes livreuses de journaux. La routine des tournées matinales est enclenchée, jusqu\'au moment où leur itinéraire croise celui d\'un groupe d\'étranges individus encapuchonnés, violents et au langage inconnu ; et d\'une mystérieuse machine dont tout semble indiquer qu\'elle ne viendrait pas de la Terre... Une découverte qui pourrait bien changer leur vie à jamais.');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'L\'avenger Vision a décidé de fonder une famille. Le synthézoïde emménage en banlieue afin de vivre l\'existence paisible de la classe moyenne américaine. Mais l\'intégration va s\'avérer plus compliquée que prévu. Cest bien connu, une famille trop tranquille cache souvent des secrets.');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'Franck Castle est plus connu aujourd\'hui sous le nom de Punisher. Il est devenu ce justicier sans peur et sans pitié après avoir vu sa famille massacrée sous ses yeux lors d\'une fusillade entre mafieux. Ou l\'était-il déjà avant? C\'est ce que vous allez découvrir dans la mini-série Born de Garth Ennis et Darick Robertson qui placent le héros dans l\'enfer de la guerre du Vietnam et nous font assister à la véritable naissance de Punisher.');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'In this full-color graphic novel, Jason posits a strange, violent world in which contract killers can be hired to rub out pests, be they dysfunctional relatives, abusive co-workers, loud neighbors, or just annoyances in general — and as you might imagine, their services are in heavy demand. One such killer is given the unique job of traveling back in time to kill Adolf Hitler in 1939... but things go spectacularly wrong');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'Tout au long de l\'histoire, une société secrète se faisant appelée Les Invisibles, et comptant parmi ses membres des personnages aussi illustres que le poète Lord Byron, se bat contre les forces de l\'ordre dont le but, semble-t-il, est de nuire à l\'épanouissement de la race humaine. Dans ce premier album, la dernière recrue des Invisibles, un adolescent de Londres, doit survivre à un étrange et perturbant entraînement avant d\'être projeté dans le passé pour tenter d\'enrôler le Marquis de Sade.');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'Voici le monde des Fables, tel que nous le connaissons depuis que le Dernier Château est tombé devant les armées conquérantes de l\'Adversaire. Un monde où les héros des contes de notre enfance se sont réfugiés, dans un voisinage calme mais tendu, entre les murs de Fableville. Ils vivent heureux... Jusqu\'à la mort de Rose Rouge. La sœur de cette dernière, Blanche Neige, ne trouve la force de surmonter son chagrin que pour confier à Bigby, le loup détective, la charge d\'élucider cet assassinat.');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'Y: The Last Man is a comic book series about the only man to survive the apparent simultaneous death of every male mammal (barring the same man\'s pet monkey) on Earth. The series was published in sixty issues by Vertigo and collected in a series of ten paperback volumes (and now as a series of five hardcover "Deluxe" volumes). The series received five Eisner Awards.');
    db.run('INSERT INTO synopsis (synopsis) VALUES (?)', 'Les mille et une vies d’un aspirant écrivain… et ses mille et une morts. Brás de Oliva Domingos, fils du célèbre écrivain brésilien, passe ses journées à chroniquer les morts de ses contemporains pour le grand quotidien de Sao Paulo… et ses nuits à rêver que sa vie commence enfin. Mais remarque-t-on seulement le jour où notre vie commence vraiment ? Cela commence-t-il à 21 ans, lorsque l’on rencontre la fille de ses rêves ? À 11 ans, au moment du premier baiser ? À la naissance de son premier enfant peut-être ? Ou au crépuscule de sa vie');
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
    //    db.all('SELECT * FROM comics NATURAL JOIN genre', function (error, data) {

    db.all('SELECT * FROM comics NATURAL JOIN genre NATURAL JOIN publisher NATURAL JOIN state NATURAL JOIN artist NATURAL JOIN writer NATURAL JOIN synopsis', function (error, data) {
            response.send(data);
        });
    });
        
   app.get('/formulaire', function(request, response){
        fs.readFile('formulaire.html', function(err, data){
            response.end(data);
        });
   });
    
    app.get('/index.html', function(request, response) {
  response.sendFile( __dirname  + '/index.html');
});

// urlencodedparser, 
app.post('/basededonees', function(req, res) {
  console.log(req.body.comic_name)
  console.log(req.body.writer)
  
  db.run('INSERT INTO comics (comic_name, number_of_tomes, next_issue, genre_id, publisher_id, writer_id, artist_id, state_id, synopsis_id, img_url) VALUES (?,?,?,?,?,?,?,?,?,?)', req.body.comic_name, parseInt(req.body.number_of_tomes), req.body.next_issue, parseInt(req.body.genre_id), parseInt(req.body.publisher_id), parseInt(req.body.writer_id), parseInt(req.body.artist_id), parseInt(req.body.state_id), parseInt(req.body.synopsis_id), req.body.img_url) function (error, data){
      res.send();
  });
});

    

app.listen(3000, function (error) {
  if (!error) console.log('app listening port 3000 Poto TKT ça marche maintenant ;)');
});