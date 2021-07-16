`use strict`

function arrayString(array, parent) {

    let li = array.map(function (element) {
        let li = document.createElement(`li`)
        li.textContent = element;
        return li;
    });
    console.log(li)
    const ul = document.createElement(`ul`);
    parent.prepend(ul);

    li.forEach((element) => {
        ul.append(element);

        console.log(element)
    })
}


arrayString(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"],document.body)
