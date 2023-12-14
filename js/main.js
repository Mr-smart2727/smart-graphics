const menuBar = document.querySelector(".ri-menu-line")
const menuCloseBar = document.querySelector(".ri-close-fill")
const menu = document.querySelector(".nav-links")

console.log(menu);
// menuBar.addEventListener('click', function(){
//     menu.style.top = "35%"
//     menuBar.style.display = "none"
//     menuCloseBar.style.display = "block"
// })

// menuCloseBar.addEventListener('click', function(){
//     menu.style.top = "-35%"
//     menuBar.style.display = "block"
//     menuCloseBar.style.display = "none"
// })

$(".image").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    arrows: true,
    nav: false,
    // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });