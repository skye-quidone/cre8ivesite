<!-- home page- mouseover for process -->
< script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js" > < /script> 
< script >
  $(document).ready(function() {
    $('.block a:contains("clickable")').addClass('text-click');
  }); 
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
