'use strict'

const urlUsers = "https://ajax.test-danit.com/api/json/users"
const urlPosts = "https://ajax.test-danit.com/api/json/posts"

class List {
    constructor(urlUsers, urlPosts) {
        this.urlUsers = urlUsers
        this.urlPosts = urlPosts
    }

    getListUsers() {
        return axios
            .get(this.urlUsers)
            .then(function ({data}) {
                return data
            })
    }

    getListPosts() {
        return axios
            .get(this.urlPosts)
            .then(function ({data}) {
                return data
            })
    }
}

class Card {
    constructor(users, posts) {
        this.users = users
        this.posts = posts
    }

    form() {
        console.log(this.users)
        console.log(this.posts)

        const form = document.createElement('form')
        const body = document.createElement('p')
        const title = document.createElement('p')
        document.body.append(form)
        form.append(body, title)
        // body.textContent = ele.body
        // title.textContent = ele.title
        form.style.width = '500px'
        form.style.paddingTop = '100px'
        form.style.margin = '0 auto'
    }
}

const list = new List(urlUsers, urlPosts);
const card = new Card(list.getListUsers(), list.getListPosts())

card.form()