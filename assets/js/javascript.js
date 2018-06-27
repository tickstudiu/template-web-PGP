$(document).ready(function(){
  // get element
  var nav = document.getElementById("navbar");

  //on scroll event
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    // remove class when offset form top below 350
    if(currentScrollPos < 350){
      nav.classList.remove("bg-brown-light-transparent");
      nav.classList.remove("py-4");
    }
    else {
      nav.classList.add("bg-brown-light-transparent");
      nav.classList.add("py-4");
    }
  }

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 750, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
