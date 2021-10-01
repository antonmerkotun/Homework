'use strict'

const urlUsers = "https://ajax.test-danit.com/api/json/users"
const urlPosts = "https://ajax.test-danit.com/api/json/posts"

class App {
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


class List {
	constructor(name, email, title, body) {
		this.name = name
		this.email = email
		this.title = title
		this.body = body
	}
		createList() {
		const root = document.querySelector('#root')
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
		}
}

class Card {
	constructor() {

	}
	form() {

	}
}

const app = new App(urlUsers, urlPosts);
app.getListUsers();
app.getListPosts();
const list = new List()
list.createList()
