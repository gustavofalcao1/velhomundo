/* Loading */
var loadingPage = setInterval(function() {
  if ($('#slides').length) {
     clearInterval(loadingPage);
     document.getElementById("body").style.display='block';
  }
}, 100)
