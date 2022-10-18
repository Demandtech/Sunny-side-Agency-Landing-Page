
const navList = document.querySelector(".nav-list");
const navLinks =
    document.querySelectorAll(".nav-link");
document.querySelector('.hamburger').addEventListener('click', function(){
  navList.classList.toggle('open')
  navLinks.forEach(function (link) {
   link.addEventListener("click",function () {
        navList.classList.remove("open");
     });
  });
});

// document.querySelectorAll('.nav-link').forEach(function(link){
//  link.addEventListener('click', function(){
//    navList.classList.remove('open')
//  })
// })