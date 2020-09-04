
function myFunction(food) {
    food.classList.remove("isHidden")
    food.classList.add("isShown")
    if (food != pizzas) {
        pizzas.classList.remove("isShown")
        pizzas.classList.add("isHidden")
    }
    if (food != soupes) {
        soupes.classList.remove("isShown")
        soupes.classList.add("isHidden")
    }
    if (food != pastas) {
        pastas.classList.remove("isShown")
        pastas.classList.add("isHidden")
    }
    if (food != deserts) {
        deserts.classList.remove("isShown")
        deserts.classList.add("isHidden")
    }
    if (food != wines) {
        wines.classList.remove("isShown")
        wines.classList.add("isHidden")
    }
    if (food != beers) {
        beers.classList.remove("isShown")
        beers.classList.add("isHidden")
    }
    if (food != drinks) {
        drinks.classList.remove("isShown")
        drinks.classList.add("isHidden")
    }
}