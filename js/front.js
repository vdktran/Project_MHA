console.log($)


$.get('https://3000-dot-6498359-dot-devshell.appspot.com/basededonees', function (afficher) {
  afficher.forEach(function (desks) {
    const div = document.createElement('div');
    div.innerHTML = desks.comic_name;
    document.body.appendChild(div)
    console.log(desks);
  })
});

 
function send () {
  var student_name = document.querySelector('#student_name').value;
  console.log(student_name);
  $.post('http://localhost:3000/students', {student_name : student_name}, function (response) {
     console.log(response);
  });
}

console.log(send);



//$.get("https://3000-dot-6498359-dot-devshell.appspot.com/acceuil");
