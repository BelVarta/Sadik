$('.head').click(function(){
  $(this).toggleClass('active');
  $(this).parent().find('.arrow').toggleClass('arrow-animate');
  $(this).parent().find('.content_box').slideToggle(280);
});
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu")
let body =document.querySelector("body")
  menuBtn.addEventListener("click",function(){
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
})