let Nav = document.querySelector('.list-bar')
let list = document.querySelector('.list')
Nav.addEventListener('click',function(){
   list.classList.toggle("list-actev")
    console.log(Bage);
})

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".images img");
    var background = document.querySelector(".background");
    var currentIndex = 0;
    setInterval(function() {
      currentIndex = (currentIndex + 1) % images.length;
      var imageUrl = images[currentIndex].getAttribute("src");
      background.style.backgroundImage = "url('" + imageUrl + "')";
    }, 1000);
  });
  