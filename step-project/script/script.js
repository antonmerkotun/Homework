'use strict'

// Our Services

const tabsListOurServices = document.querySelector('.our-services-menu');
tabsListOurServices.addEventListener('click', tabsOurServicesMenu);

function tabsOurServicesMenu(element) {
    const data = element.target.dataset.type;
    console.log(data)
    document.querySelector('.activeOurServicesText').classList.remove('activeOurServicesText');
    document.querySelector(`[data-block = ${data}]`).classList.add('activeOurServicesText');
    document.querySelector('.activeOurServicesTab').classList.remove('activeOurServicesTab');
    element.target.classList.add('activeOurServicesTab');
}

// Our Amazing Work - Tab Filter


const tabsList = document.querySelectorAll('.our-amazing-work-menu-block');
const imageBlock = document.querySelectorAll('.our-amazing-work-img-block');
const tab = document.querySelector('#portfolioTabsList')
tab.onclick = (e) => {
    let target = e.target;
    tabsList.forEach((elem) => {
        elem.classList.remove('active')
    });
    target.classList.add('active');
    let tabCategory = target.dataset.content;
    imageBlock.forEach((e) => {
        e.classList.add('hidden');
        let cardCategory = e.dataset.content;
        let loadAttr = e.getAttribute('data-load');
        if (tabCategory === 'all' && loadAttr === null) {
            e.classList.remove('hidden');
        } else if (tabCategory === cardCategory && loadAttr === null) {
            e.classList.remove('hidden');
        }
    });
};

// Our Amazing Work - Button Add


const loadMore = document.querySelector('#morePhoto')
loadMore.addEventListener('click', funcLoadMore)

function funcLoadMore() {
    imageBlock.forEach(e => {
        e.removeAttribute('data-load')
    });
    tabsList.forEach((el) => {
        if (el.classList.contains("active")) {
            let a = el.getAttribute("data-content");
            imageBlock.forEach((element) => {
                let we = element.getAttribute("data-content");
                if (a === we) {
                    element.classList.remove('hidden');
                } else if (a === "all") {
                    element.classList.remove('hidden');
                }
            });
        }
    });
}


// What People Say - Slider

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const icon = Array.from(document.querySelectorAll('.people-gallery-icon'))

arrowLeft.addEventListener('click', buttonClickLeft)
arrowRight.addEventListener('click', buttonClickRight)



let i = 0;
function buttonClickRight () {
    icon[i].classList.remove('people-gallery-icon-active')
    i++
    if (i >= icon.length) {
        i = 0
    }
    icon[i].classList.add('people-gallery-icon-active')
}

function buttonClickLeft(){
    icon[i].classList.remove('people-gallery-icon-active')
    i--
    if (i === -1){
        i = 3
    }
    icon[i].classList.add('people-gallery-icon-active')
}

const blockIcon = document.querySelector('.people-gallery-slider');

blockIcon.addEventListener('click', clickIcon)

function clickIcon(element) {



    document.querySelector('.people-gallery-icon-active').classList.remove('people-gallery-icon-active');
    element.target.classList.add('people-gallery-icon-active');
    if (element.target === document.querySelector('.people-gallery-slider')){
    //
    //
    //
    }
}













