'use strict'

function tab() {
    let liTitle = document.querySelectorAll('.tabs-title')
    let liText = document.querySelectorAll('.tabs-text')
    let tabName;
    console.log(liTitle);

    liTitle.forEach(item => {
        item.addEventListener('click', selectLiTitle)
    })

    function selectLiTitle() {
        liTitle.forEach(item => {
            item.classList.remove(`active-title`)
        })
        this.classList.add(`active-title`)
        tabName = this.getAttribute(`datatype`)
        selectLiText(tabName)
    }

    function selectLiText(tabName) {
        liText.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add(`active-text`) : item.classList.remove(`active-text`)
        })
    }
}
tab()







