'use strict'

                                // Our Services

const tabsListOurServices = document.querySelector('.our-services-menu');
tabsListOurServices.addEventListener('click', tabsOurServicesMenu);
function tabsOurServicesMenu(event) {
    const data = event.target.dataset.type;
    console.log(data)
    document.querySelector('.activeOurServicesText').classList.remove('activeOurServicesText');
    document.querySelector(`[data-block = ${data}]`).classList.add('activeOurServicesText');
    document.querySelector('.activeOurServicesTab').classList.remove('activeOurServicesTab');
    event.target.classList.add('activeOurServicesTab');
}

                                // Our Amazing Work
                                        // button
const buttonOurAmazingWork = document.querySelector('.buttonOurAmazingWork')
buttonOurAmazingWork.addEventListener('click', clickButtonOurAmazingWork)
function clickButtonOurAmazingWork(){
    document.querySelector('.our-amazing-work-img-none').classList.remove('our-amazing-work-img-none')
    buttonOurAmazingWork.remove()
}












