const url = 'https://github.com/LeonardoTellesBosch'
const btn = document.querySelector('#btn')

function openinNewtab(url) {
    const win = window.open(url, 'blank')
    win.focus()
}

btn.addEventListener('click', () => {
    openinNewtab(url)
})