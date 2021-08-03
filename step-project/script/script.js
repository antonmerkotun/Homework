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

                                // Our Amazing Work


// const tabsListOurAmazingWorkMenu = document.querySelector('.our-amazing-work-menu')
// tabsListOurAmazingWorkMenu.addEventListener('click', tabsOurAmazingWorkMenu)
// function tabsOurAmazingWorkMenu(element) {
//     const data = element.target.dataset.type;
//     console.log(data)
//     document.querySelector('.ourAmazingWorkMenuBlockImg').classList.remove('ourAmazingWorkMenuBlockImg');
//     document.querySelector(`[data-block = ${data}]`).classList.add('ourAmazingWorkMenuBlockImg');
//     document.querySelector('.ourAmazingWorkMenuBlockTab').classList.remove('ourAmazingWorkMenuBlockTab');
//     element.target.classList.add('ourAmazingWorkMenuBlockTab')
// }



const tabsList = document.querySelectorAll('.our-amazing-work-menu-block');
const imageBlock = document.querySelectorAll('.our-amazing-work-img-block');
const tab = document.querySelector('#portfolioTabsList')
tab.onclick =(e)=>{
    let target = e.target;
    console.log(target)
    tabsList.forEach((elem) => {elem.classList.remove('active')});
    target.classList.add('active');
    let tabCategory = target.dataset.content;

    imageBlock.forEach((e)=>{
        e.classList.add('hidden');
        let cardCategory = e.dataset.content;

        let loadAttr = e.getAttribute('data-load');
        if(tabCategory === 'All' && loadAttr === null) {
            e.classList.remove('hidden');
        }else if(tabCategory === cardCategory && loadAttr === null){
            e.classList.remove('hidden');
        }
    });
};























// button
const buttonOurAmazingWork = document.querySelector('.buttonOurAmazingWork');
buttonOurAmazingWork.addEventListener('click', clickButtonOurAmazingWork);
function clickButtonOurAmazingWork(){
    document.querySelector('.our-amazing-work-img-none').classList.remove('our-amazing-work-img-none');
    buttonOurAmazingWork.remove();
}





