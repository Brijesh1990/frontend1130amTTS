const demo=document.querySelector("#demo");
const btnToggle=document.querySelector("#demo");
const menuList=document.querySelector("#menu-list");

btnToggle.addEventListener("click",function(){

    menuList.classList.toggle("active");
})
