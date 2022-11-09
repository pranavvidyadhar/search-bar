const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const t = document.querySelector('.t')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
    })