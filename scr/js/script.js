const btnMenu = document.querySelector('.fa-bars')
const container = document.querySelector('.container')

btnMenu.addEventListener('click',() =>{
    container.classList.toggle('active')
    // toggle ativa quando estiver desligado e vice versa
})