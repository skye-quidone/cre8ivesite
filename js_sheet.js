<!-- Header -->

<script src="https://kit.fontawesome.com/dd04f97c73.js" crossorigin="anonymous"></script>

<!-- Footer -->
  
<!-- slide show in code box -->
<script>
let slideIndex = [1, 1, 1, 1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1
  }
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
</script>


<!--fade swap words for home header -->
<script>
var text = ["STUDIOS.", "LOFTS.", "OFFICES."];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 3000);

function change() {
  elem.classList.add('hide');
  setTimeout(function() {
    elem.innerHTML = text[counter];
    elem.classList.remove('hide');
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
  }, 200);
}
</script>

<!-- dropdown with links -->
<script>
function dropdown_function() {
  document.getElementById("myDropdown").classList.toggle("show_dropdown");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown_button')) {
    var dropdowns = document.getElementsByClassName("dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_dropdown')) {
        openDropdown.classList.remove('show_dropdown');
      }
    }
  }
} 

function Copy() {
  let url = document.location.href

  navigator.clipboard.writeText(url).then(function() {
    console.log('Copied!');
  }, function() {
    console.log('Copy error')
  });
}
</script>



<!-- modals (not in use) -->
<script>
// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
</script>
