const cop = document.querySelector("#copy");

const toggleB = document.querySelector("#color");

const changeTitle = document.querySelector("#title");

const deleteButton = document.querySelector("#delete");

const detailButton = document.querySelector('#details'); //changed getElementById to querySelector


const card = document.getElementById('base');

const words = document.querySelector('p1');

const body = document.querySelector('body');





cop.addEventListener('click', function(e) {
  const node = document.getElementById('base');
  let clone = node.cloneNode(true);

  document.body.appendChild(clone);
});


toggleB.addEventListener("click", function() {
  card.classList.toggle("tog");
  body.classList.toggle("tog2");
});

changeTitle.addEventListener('click', function(e) {
  var x = document.getElementById("name");
  if (x.innerHTML === "Dog Facts") {
    x.innerHTML = "Something Else";
  } else {
    x.innerHTML = "Dog Facts";
  }
});
deleteButton.addEventListener("click", function() { 
  const cardContainer = document.getElementById("base"); // Defined cardContainer, set to base ID
  cardContainer.remove(cardContainer.lastChild); // changed .removeChild to .remove, removeChild gets rid of each inside div independently, remove gets rid of the div selected
});


detailButton.addEventListener('click', function(e) {
  const p = document.getElementById("desc"); // defined p and added a desc id to the text in HTML
  if (p.style.display === "none"){
    p.style.display = "block"
  } 
  else {
    p.style.display = "none";
  }
});

// brackets were unmatched; Fixed