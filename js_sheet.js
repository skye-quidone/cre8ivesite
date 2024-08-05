<!-- home page- mouseover for process -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $('.block a:contains("clickable")').addClass('text-click');
});
</script>


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
