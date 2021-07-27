'use strict'

const style = document.getElementById('theme_css');
const theme = localStorage.getItem('theme') || 'light';

style.classList.add(theme);

const selectTheme = () => {
    const check = document.getElementById('theme_css').classList[0] === 'light';
    if (check) {
        style.href = './style/style2.css';
        style.classList.remove('light')
        style.classList.add('dark');

        localStorage.setItem('theme', 'dark');
    } else {
        style.href = './style/style.css';
        style.classList.remove('dark')
        style.classList.add('light');

        localStorage.setItem('theme', 'light');
    }
}
const button = document.querySelector('.button-theme');
button.addEventListener('click', selectTheme)


