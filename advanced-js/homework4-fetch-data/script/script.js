'use strict'

const url = 'https://ajax.test-danit.com/api/swapi/films';

fetch(url)
	.then(response => {
		return response.json()
	})
	.then(array => {
		return array.forEach(ele => {
			const {id, characters, director, episodeId, openingCrawl} = ele
			console.log(ele)
			let li = document.createElement('li')
			li.textContent = ele.name
			document.body.append(li)
		})
	})



