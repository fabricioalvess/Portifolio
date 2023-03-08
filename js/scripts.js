var botaoAbrir = document.querySelector(".threeline-icon")
var nav = document.querySelector(".navigation")
var closedMenu = document.querySelector(".closedMenu")

botaoAbrir.addEventListener('click', abrirMenu)

closedMenu.addEventListener('click', closed)

function abrirMenu(){
    nav.classList.add("menuJs")
    botaoAbrir.style.display="none"
    closedMenu.style.display="initial"

   
}

function closed(){
    nav.classList.remove("menuJs")
    botaoAbrir.style.display="initial"
    closedMenu.style.display="none"
}
