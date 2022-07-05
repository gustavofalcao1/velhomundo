/* Scroll */
$(window).on("scroll", function() {
  if($(window).scrollTop() > 220) {
    $(".header").addClass("headerAct");
    $(".navLink").addClass("navLinkAct");
  } else {
    $(".header").removeClass("headerAct");
    $(".navLink").removeClass("navLinkAct");
  }
});

/* Lock Scroll */

function setLeft(){
  $(window).scrollLeft(0);
}
$(window).bind('scroll', setLeft);

/* Menu Scroll */
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop ) {
      current = section.getAttribute("navMenu"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


/* Chat */

function openChat() {
  const chatBox = document.getElementById("chatBox")
  const chat1 = document.getElementById("chat-icon-1")
  const chat2 = document.getElementById("chat-icon-2")
  if (chatBox.style.display === "flex"){
    chatBox.style.display='none';
    chatBox.style.opacity='0';
    chat1.style.display='block'
    chat2.style.display='none'
  } else {
    chatBox.style.display='flex';
    chatBox.style.flexDirection='column';
    chatBox.style.opacity='1';
    chatBox.style.transition= 'opacity .1s linear';
    chat1.style.display='none'
    chat2.style.display='block'
  }
}
/* Active */

$(function () {
  $(".navLink").click(function () {
   $(".navLink").removeClass("active");
   $(this).addClass("active");
  });
 });

 

/* Slider */
$.global = new Object();
$.global.item = 1;
$.global.total = 0;

$(document).ready(function() {
	var WindowWidth = $(window).width();
	var SlideCount = $('#slides li').length;
	var SlidesWidth = SlideCount * WindowWidth;
	
  $.global.item = 0;
  $.global.total = SlideCount; 
    
	$('.slide').css('width',WindowWidth+'px');
	$('#slides').css('width',SlidesWidth+'px');
  $("#slides li:nth-child(1)").addClass('alive'); 
  $('#left').click(function() { Slide('back'); }); 
  $('#right').click(function() { Slide('forward'); });
  setInterval(function() {
    Slide('forward');
  }, 5000);     
});

function Slide(direction) {
  if (direction == 'back') { var $target = $.global.item - 1; }
  if (direction == 'forward') { var $target = $.global.item + 1; }    
  if ($target == -1) { DoIt($.global.total-1); } 
  else if ($target == $.global.total) { DoIt(0); }  
  else { DoIt($target); }
}

function DoIt(target) {
  var $windowwidth = $(window).width();
	var $margin = $windowwidth * target; 
  var $actualtarget = target+1;
    
  $("#slides li:nth-child("+$actualtarget+")").addClass('alive');
  $('#slides').css('transform','translate3d(-'+$margin+'px,0px,0px)');	
  $.global.item = target; 
  $('#count').html($.global.item+1);
}