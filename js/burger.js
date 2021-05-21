const menuElem = document.querySelector(".menu");
const humburgerElem = document.querySelector(".humburger-menu");

const toggleMenu = (event) => {
    
    if (event.target.classList.contains("menu-active") || event.target.classList.contains("humburger-menu-active")) {
        menuElem.classList.remove("menu-active");
        humburgerElem.classList.remove("humburger-menu-active");
    } else {
        menuElem.classList.add("menu-active");
        humburgerElem.classList.add("humburger-menu-active");
    }

};

humburgerElem.addEventListener("click", toggleMenu);
