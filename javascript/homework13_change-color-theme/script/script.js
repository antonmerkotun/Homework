'use strict'


const selectTheme = () => {

    const check = document.getElementById('theme_css').classList[0] === 'light';
    const style = document.getElementById('theme_css');
    if (check) {
        style.href = './style/style2.css';
        style.classList.remove('light')
        style.classList.add('dark');
    } else {
        style.href = './style/style.css';
        style.classList.remove('dark')
        style.classList.add('light');
    }
}
const button = document.querySelector('.button-theme');
button.addEventListener('click', selectTheme)



