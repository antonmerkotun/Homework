'use strict'

const urlUsers = "https://ajax.test-danit.com/api/json/users/"
const urlPosts = "https://ajax.test-danit.com/api/json/posts/"
const cardDelete = `https://ajax.test-danit.com/api/json/posts/`

                            class App {
constructor(urlUsers, urlPosts, cardDelete) {
    this.urlUsers = urlUsers
    this.urlPosts = urlPosts
    this.cardDelete = cardDelete
}

getUsers() {
return fetch(this.urlUsers, {
                 method: "GET"
             })
.then(response => response.json())
.then((data) => {
                  return data
              })
}

getPosts() {
return fetch(this.urlPosts, {
                 method: "GET"
             })
.then(response => response.json())
.then((data) => {
                  return data
              })
}

deleteCard(postId) {
return fetch(this.cardDelete + postId, {
                 method: "DELETE"
             })
.then(response => response)
}
}


class List {
constructor(name, email, title, body) {
    this.name = name
    this.email = email
    this.title = title
    this.body = body
}

createList() {
const root = document.querySelector('#root')

const div = document.createElement('div')
div.classList.add("card", "container")
div.style = "width: 30rem;"
div.style.marginTop = "100px"

const divTitle = document.createElement('div')
divTitle.classList.add("card-body")

const name = document.createElement('h5')
name.classList.add("card-title")
name.textContent = this.name

                   const email = document.createElement('p')
email.classList.add("card-text")
email.textContent = this.email

                    const ul = document.createElement('ul')
ul.classList.add("list-group", "list-group-flush")

const title = document.createElement('li')
title.classList.add("list-group-item")
title.textContent = this.title

                    const body = document.createElement('li')
body.classList.add("list-group-item")
body.textContent = this.body

                   const divButton = document.createElement('div')
divButton.classList.add("card-body")

const button = document.createElement('a')
button.classList.add("btn", "btn-primary")
button.href = ''
button.textContent = 'Delete card'
button.style.marginLeft = '300px'
button.addEventListener('click', function (e) {
    e.preventDefault()
    div.style.display = 'none'
})

root.append(div)
div.append(divTitle, ul, divButton)
divTitle.append(name, email)
ul.append(title, body)
divButton.append(button)
}
}

class Card {
constructor(app) {
    this.app = app
}

form() {
this.app.getUsers()
.then(function (users) {
app.getPosts()
.then(function (post) {
users.forEach(user => {
post.forEach(post => {
if (user.id === post.userId) {
    list.name = user.name
    list.email = user.email
    list.title = post.title
    list.body = post.body
    list.createList()
    app.deleteCard(post.id)
}
})
})
})
})
}
}

const app = new App(urlUsers, urlPosts, cardDelete);
const list = new List()
const card = new Card(app, list)
card.form()