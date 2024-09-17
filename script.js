const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')

menuBtn.addEventListener('click', ()=> {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'
  if(isExpanded) {
    menuBtn.setAttribute('aria-expanded', false)
  } else {
    menuBtn.setAttribute('aria-expanded', true)
  }
})