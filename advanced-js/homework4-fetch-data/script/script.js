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
                    const ul = document.createElement('ul')
                    const liFilm = document.createElement('li')
                    const liEpisode = document.createElement('li')
                    const liOpeningCrawl = document.createElement('li')
                    document.body.append(ul)
                    ul.append(liFilm)
                    ul.append(liEpisode)
                    ul.append(liOpeningCrawl)
                    liFilm.textContent = el.name
                    liEpisode.textContent = el.episodeId
                    liOpeningCrawl.textContent = el.openingCrawl

                })
                // axios
                //     .get(this.url)
                //     .then(function ({data}) {
                        const film1 = data[0].characters
                        film1.forEach(ele => {
                            axios
                                .get(ele)
                                .then(function ({data}) {
                                    const text = document.createElement('li')
                                    ul.append(text)
                                    text.textContent = data.name
                                    console.log(data.name)
                                })
                        })
            })
    }
}


const films = new Films(url)
films.getFilms()
// films.getCharacters()


// class Films {
//     constructor(url) {
//         this.url = url;
//     }
//
//     getFilms() {
//         axios
//             .get(this.url)
//             .then(function ({data}) {
//                 console.log(data[0])
//                 data.forEach(el => {
//                     const ul = document.createElement('ul')
//                     const liFilm = document.createElement('li')
//                     const liEpisode = document.createElement('li')
//                     const liOpeningCrawl = document.createElement('li')
//                     document.body.append(ul)
//                     ul.append(liFilm)
//                     ul.append(liEpisode)
//                     ul.append(liOpeningCrawl)
//                     liFilm.textContent = el.name
//                     liEpisode.textContent = el.episodeId
//                     liOpeningCrawl.textContent = el.openingCrawl
//                     // console.log(el)
//                 })
//                 // axios
//                 //     .get(data[0].characters)
//                 //     .then(function ({name}){
//                 //         console.log(name)
//                 //     })
//             })
//         axios
//             .get(this.url)
//             .then(function ({data}) {
//                 // console.log(data[0].characters)
//                 const film1 = data[0].characters
//                 film1.forEach(ele => {
//                     // console.log(ele)
//                     axios
//                         .get(ele)
//                         .then(function ({data}) {
//                             // console.log(data)
//                         })
//                 })
//
//             })
//     }
//
//
// }