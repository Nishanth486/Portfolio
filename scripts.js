const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
console.log("scripts.js loaded");

$(document).ready(function() {
  $("h1").fadeIn(1000);
});

$(document).ready(function() {
  $('.progress-bar').each(function() {
    $(this).animate({
      width: $(this).attr('aria-valuenow') + '%'
    }, 2000);
  });
});

$(window).scroll(function() {
  $("table").each(function(){
    var position = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (position < topOfWindow + 600) {
      $(this).addClass("fadeIn");
    }
  });
});

$(document).ready(function() {
  $("#contactForm").submit(function(event) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name == "" || email == "" || message == "") {
      alert("Please fill out all fields.");
      event.preventDefault();
    }
  });
});

$(document).ready(function() {
  $('#carouselExampleRide').carousel();
});
