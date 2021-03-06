'use strict'

const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

let divRoot = document.createElement('div');
document.body.append(divRoot);
divRoot.id = 'root';

function create(array) {
    let booksArray = array.forEach((ele) => {
        const {author, name, price} = ele;

        let ul = document.createElement(`ul`);
        divRoot.prepend(ul)
        let liAuthor = document.createElement(`li`);
        let liName = document.createElement(`li`);
        let liPrice = document.createElement(`li`);
        ul.append(liAuthor);
        ul.append(liName);
        ul.append(liPrice);
        liAuthor.textContent = ele.author;
        liName.textContent = ele.name;
        liPrice.textContent = ele.price;

        if (author === undefined) {
            ele.author = 'не указан автор';
            console.log(ele);
            ul.remove(ele);
        }
        if (price === undefined) {
            ele.price = 'не указана цена';
            console.log(ele)
            ul.remove(ele);
        }
    })
}

create(books)