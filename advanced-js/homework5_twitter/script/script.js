'use strict'

const urlUsers = "https://ajax.test-danit.com/api/json/users"
const urlPosts = "https://ajax.test-danit.com/api/json/posts"

class Card {
    constructor(urlUsers, urlPosts) {
        this.urlUsers = urlUsers
        this.urlPosts = urlPosts
    }

    getListPosts() {
        return axios
            .get(this.urlPosts)
            .then(function ({data}) {
                // console.log(data)


                data.forEach(ele => {
                    const form = document.createElement('form')
                    const body = document.createElement('p')
                    const title = document.createElement('p')
                    document.body.append(form)
                    form.append(body, title)
                    body.textContent = ele.body
                    title.textContent = ele.title
                    form.style.width = '500px'
                    form.style.paddingTop = '100px'
                    form.style.margin = '0 auto'

                })



            })
    }

    getListUsers() {
        return axios
            .get(this.urlUsers)
            .then(function ({data}) {
                // console.log(data)


                // data.forEach(el => {
                    // console.log(el)
                    // const form = document.createElement('form')
                    // const name = document.createElement('p')
                    // const email = document.createElement('p')
                    // document.body.append(form)
                    // form.append(name, email)
                    // name.textContent = el.name
                    // email.textContent = el.email
                // })



            })
    }
}


const card = new Card(urlUsers, urlPosts);

card.getListUsers()
card.getListPosts()