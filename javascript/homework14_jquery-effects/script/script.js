'use strict'

const anchors = document.querySelectorAll('.menu')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1,)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth'
        })
    })
}

const buttonTop = document.querySelector('.button')
window.addEventListener('scroll', function() {
    const scroll = pageYOffset;
    const screen = document.documentElement.clientHeight
    if (scroll > screen){
        buttonTop.classList.add('active-button')
    } else {
        buttonTop.classList.remove('active-button')
        buttonTop.classList.add('button')
    }
});

$(function() {
    $('#up').click(function() {
        $('html, body').animate({scrollTop: 0},500);
        return false;
    })
})

$(document).ready(function() {
    $(".toggle").click(function() {
        $(".parallax").toggle();
    })
})




























