var swiper = new Swiper(".slide-content", {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".swiper-pagination-cv",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
    
    
  });

  var swiper = new Swiper(".slide-contente", {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".swiper-pagination-cv2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
    
    
  });

  var swiper = new Swiper(".slide-skills", {
    slidesPerView: "auto",
    spaceBetween:30 ,
    loop: true,
    autoplay: {
        delay: 2000, // Définissez la vitesse de défilement (en millisecondes)
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    autoplay: {
        delay: 2000, // Définissez la vitesse de défilement (en millisecondes)
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  var swiper = new Swiper(".slide-stage", {
    slidesPerView: "auto",
    spaceBetween: 25,
    loop: true,
    autoplay: {
        delay: 2000, // Définissez la vitesse de défilement (en millisecondes)
    },
    pagination: {
        el: ".swiper-pagination-photo",
        clickable: true,
        
    },
  });

  var swiper = new Swiper('.client-swiper', {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".swiper-pagination-veille",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
  });

  var swiper = new Swiper('.swiper-container-img', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000, // Animation speed
});

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("openModalBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "flex";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  