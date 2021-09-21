const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEvenListener('click', () => container.classList.add
('show-nav'))

close.addEvenListener('click', () => container.classList.
remove('show-nav'))