const MenuIcon = document.getElementById("menu-icon");
const Menu = document.getElementById("menu");

MenuIcon.addEventListener("click", () =>{
    if(Menu.className = "hidden") {
     Menu.classList.remove("hidden");
    }
     else{
        Menu.classList.add("hidden");
       }
});
