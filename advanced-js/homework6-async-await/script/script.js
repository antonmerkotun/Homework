'use strict'

const urlIp = "https://api.ipify.org/?format=json"

const root = document.querySelector('#root')
const div = document.createElement('div')
const button = document.createElement('button')
button.classList.add("btn", "btn-danger")
div.classList.add("d-grid", "gap-2", "col-2", "mx-auto")
div.style.marginTop = "300px"
button.textContent = 'Вычислить по IP'
root.append(div)
div.append(button)
button.addEventListener('click', fetchIp)

async function fetchIp() {
    const response = await fetch(urlIp)
    const data = await response.json()
    const ip = data.ip

    async function fetchApi() {
        const response = await fetch(`http://ip-api.com/json/${ip}?fields=66846719`)
        const data = await response.json()

        const list = document.createElement('ul')
        list.classList.add("list-group")
        list.style.margin = "50px auto"
        list.style.maxWidth = "300px"
        root.append(list)

        const continent = document.createElement('li')
        continent.classList.add("list-group-item", "list-group-item-success")
        continent.textContent = data.continent

        const country = document.createElement('li')
        country.classList.add("list-group-item", "list-group-item-danger")
        country.textContent = data.country

        const region = document.createElement('li')
        region.classList.add("list-group-item", "list-group-item-warning")
        region.textContent = data.regionName

        const city = document.createElement('li')
        city.classList.add("list-group-item", "list-group-item-info")
        city.textContent = data.city

        const district = document.createElement('li')
        district.classList.add("list-group-item", "list-group-item-primary")
        district.textContent = data.district

        list.append(continent, country, region, city, district)

    }

    fetchApi()
}