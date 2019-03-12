console.log($)


$.get('https://3000-dot-6498359-dot-devshell.appspot.com/basededonees', function (afficher) {
  afficher.forEach(function (desks) {
    const div = document.createElement('div');
    div.innerHTML = desks.comic_name;
    document.body.appendChild(div);
    console.log(desks);
    console.table(desks);
  })
});

$.get('https://3000-dot-6498359-dot-devshell.appspot.com/basededonees', function(response) {
    console.log(response[0]);

    response.forEach(function (comics, index) {  
        creercomic(comics, index);
    });
});

function creercomic(comics, index) {
    var comic = document.createElement("div");
    comic.className = "comic_wrapper";
    comic.id = "comic_wrapper"+index;

    comic.titre = document.createElement("h2");
    comic.titre.className = "comic_titre";
    comic.titre.id = "comic_titre"+index;
    comic.titre.textContent = comics.comic_name;

    comic.resume = document.createElement("div");
    comic.resume.className = "resume_wrapper";
    comic.resume.id = "resume_wrapper"+index;

    comic.image = document.createElement("img");
    comic.image.src = comics.img_url;
    console.log(comic.image.src);

    comic.p = document.createElement("p");
    comic.p.className = "resume";
    comic.p.id = "resume"+index;

    comic.genre = document.createElement("span");
    comic.genre.className= "genre";
    comic.genre.id= "genre"+index;
    comic.genre.textContent = "Genre : "+comics.genre;
    console.log(comics.genre);

    comic.state = document.createElement("span");
    comic.state.className= "state";
    comic.state.id= "state"+index;
    comic.state.textContent = comics.state;

    comic.synopsis = document.createElement("div");
    comic.synopsis.className = "synopsis";
    comic.synopsis.id = "synopsis"+index;
    comic.synopsis.textContent = comics.synopsis;

    comic.detail = document.createElement("div");
    comic.detail.className = "detail";
    comic.detail.id = "detail"+index;

    comic.writer = document.createElement("div");
    comic.writer.className = "writer";
    comic.writer.id = "writer"+index;
    comic.writer.textContent = "Writer : "+comics.writer;

    comic.artist = document.createElement("div");
    comic.artist.className = "artist";
    comic.artist.id = "artist"+index;
    comic.artist.textContent = "Artist : "+comics.artist;

    comic.publisher = document.createElement("div");
    comic.publisher.className = "publisher";
    comic.publisher.id = "publisher"+index;
    comic.publisher.textContent = "Publisher : "+comics.publisher;

    comic.next_issue = document.createElement("div");
    comic.next_issue.className = "next_issue";
    comic.next_issue.id = "next_issue"+index;
    comic.next_issue.textContent = "Next Issue : "+comics.next_issue;


    document.getElementById("dbcontainer").appendChild(comic);

    document.getElementById(comic.id).appendChild(comic.titre);
    document.getElementById(comic.id).appendChild(comic.resume);

    document.getElementById(comic.id).appendChild(comic.image);
    document.getElementById(comic.resume.id).appendChild(comic.p);
    document.getElementById(comic.p.id).appendChild(comic.genre);
    document.getElementById(comic.p.id).appendChild(comic.state);
    document.getElementById(comic.p.id).appendChild(comic.synopsis);

    document.getElementById(comic.id).appendChild(comic.detail);
    document.getElementById(comic.detail.id).appendChild(comic.writer);
    document.getElementById(comic.detail.id).appendChild(comic.artist);
    document.getElementById(comic.detail.id).appendChild(comic.publisher);
    document.getElementById(comic.detail.id).appendChild(comic.next_issue);
}

function searchcheck() {
    // Declare variables
    var input, filter, content, wrap, titre, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    content = document.getElementById("dbcontainer");
    wrap = content.getElementsByClassName("comic_wrapper");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < wrap.length; i++) {
      titre = wrap[i].getElementsByClassName("comic_titre")[0];
      txtValue = titre.textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        wrap[i].style.display = "";
      } else {
        wrap[i].style.display = "none";
      }
    }
  }

/*
 
function send () {
  var comic_name = document.querySelector('#comic_name').value;
  console.log(comic_name);
  $.post('https://3000-dot-6498359-dot-devshell.appspot.com/basededonees', {comic_name : comic_name}, function (response) {
      
     console.log(response);
  });
}




console.log(send);

*/

//$.get("https://3000-dot-6498359-dot-devshell.appspot.com/acceuil");
