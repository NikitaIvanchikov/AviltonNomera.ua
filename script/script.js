


// Poupup's
let orderPoupup = document.getElementById('orderPoupUp'),
    orderToggle = document.getElementById('headerOrderButton'),
    poupupClose = document.getElementsByClassName('close');


    orderToggle.onclick = function() {
      orderPoupup.style.display = "flex";
    }



    for (let i = 0; i < poupupClose.length; i++) {
    poupupClose[i].onclick = function() {
      orderPoupup.style.display = "none";
      }
    }
    window.onclick = function (e) {
      
      if (e.target === orderPoupup) {
        orderPoupup.style.display = "none";
      }
    }

    let orderToggleSeviceItem = document.getElementsByClassName('service-item__order');
console.log(orderToggleSeviceItem);
    for (let i = 0; i < orderToggleSeviceItem.length; i++) {
      orderToggleSeviceItem[i].onclick = function () {
        orderPoupup.style.display = "flex";
      }
    }

//Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName('slider__slides');
  console.log(slides);

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//scroll
let anchors = document.querySelectorAll('a[href*="#"');
console.log(anchors);
    for (let anchor of anchors) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior:  "smooth",
          block: "start"
        })
      })
    }
