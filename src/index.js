
const cardList = document.querySelector(".cards")

function main() {
    createCards()
}

function createCards() {
    cardList.innerHTML = ""
    for (let i = 0; i < data.length; i++){
        cardList.appendChild(createCard(data[i]))
    }
    document.body.appendChild(cardList)
}

function createCard(cardInfo) {

    const cardListItem = document.createElement('li')
    cardListItem.setAttribute('class', 'card')
    
    // title

    const h2 = document.createElement('h2')
    h2.setAttribute('class', 'card--title')
    const name = cardInfo.name
    h2.innerHTML = name
    cardListItem.appendChild(h2)

    // img 

    const img = document.createElement('img')
    img.setAttribute('width', "256")
    img.setAttribute('class', 'card--img')
    img.setAttribute('src', cardInfo.sprites.other["official-artwork"].front_default)
    cardListItem.appendChild(img)

    // stats
    const stats = document.createElement('ul')
    stats.setAttribute('class', 'card--text')

    for (const pokemonStats of cardInfo.stats) {
        let statName = pokemonStats.stat.name
        let statListItem = document.createElement('li')

        statListItem.textContent = `${statName.toUpperCase()}: ${pokemonStats.base_stat}`
        stats.appendChild(statListItem)
    }

    cardListItem.appendChild(stats)

    return cardListItem;
}

main()