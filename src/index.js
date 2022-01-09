import "./styles/index.css";

const elvenShieldsRecipe = {
    leatherStripes: 2,
    ironIngot: 1,
    refinedMoonStones: 4,
}

const elvenGauntletsRecipe = {
    ...elvenShieldsRecipe,
    leather: 1,
    refinedMoonStones: 2,
}

console.log(elvenShieldsRecipe)
console.log(elvenGauntletsRecipe)