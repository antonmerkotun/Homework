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
                    console.log(el)
                    const ul = document.createElement('ul')
                    const liFilm = document.createElement('li')
                    const liEpisode = document.createElement('li')
                    const liOpeningCrawl = document.createElement('li')
                    document.body.append(ul)
                    ul.append(liFilm)
                    ul.append(liEpisode)
                    ul.append(liOpeningCrawl)
                    ul.style.border = `1px solid black`
                    liFilm.textContent = `Название фильма: ${el.name}`
                    liEpisode.textContent = `Номер эпизода: ${el.episodeId}`
                    liOpeningCrawl.textContent = `Краткое описание: ${el.openingCrawl}`
                    el.characters.forEach(ele => {
                        axios
                            .get(ele)
                            .then(function ({data}) {
                                const text = document.createElement('li')
                                ul.append(text)
                                text.textContent = data.name
                            })
                    })
                })
            })
    }
}

const films = new Films(url)
films.getFilms()