let nav = document.querySelector('#nav');
let navToggle = document.querySelector('#navToggle');
navToggle.addEventListener("click",function (event){
    event.preventDefault();
    if(!nav.classList.contains("show")){
        nav.classList.add("show");
    } else{
        nav.classList.remove("show");
    }


});
