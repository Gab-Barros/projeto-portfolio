const btn = document.querySelector('.dropdown-btn')
const menu = document.querySelector('.menu')

btn.addEventListener('click', (event) => {
  menu.classList.toggle('ativo')
  btn.classList.toggle('ativo')
  event.stopPropagation();
})

window.document.body.addEventListener('click', (event) => {
  if (!menu.contains(event.target)) {
    menu.classList.remove('ativo')
    btn.classList.remove('ativo')
  }
}
)
