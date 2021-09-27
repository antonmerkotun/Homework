'use strict'

const url = 'https://ajax.test-danit.com/api/swapi/films';

class Films {
	constructor(url) {
		this.url = url;
	}

	getFilms() {
		axios
			.get(this.url)
			.then(function ({data}) {
				data.forEach(el => {
					let li = document.createElement('li');
					li.textContent = el.name;
					document.body.append(li);
					const user = el.characters

					for (let key of user) {

						axios
							.get(key)
							.then(function ({data}) {
								console.log(data.name)
								let li = document.createElement('li');
								li.textContent = data.name;
								document.body.append(li);
							})
					}
				})
				// data.forEach(function ({characters}) {
				// console.log(characters)
				// })
				// for (let key in data) {
				//     let li = document.createElement('li');
				//     li.textContent = key.name;
				//     document.body.append(li);
				// console.log(data)

				// }
			})

	}

	// getCharacters(characters) {
	//     return fetch('https://ajax.test-danit.com/api/swapi/films/characters')
	//         .then(response => {
	//             return response.json();
	//         })
	//         .then(character => {
	//             console.log(character)
	//         })
	// }

}

// fetch(url)
// 	.then(response => {
// 		return response.json()
// 	})
// 	.then(array => {
// 		return array.forEach(ele => {
// 			let li = document.createElement('li')
// 			li.textContent = ele.name
// 			document.body.append(li)
// 			// console.log(ele.characters)
// 		})
//
// 	})

const films = new Films(url)
films.getFilms()
// films.getCharacters()
