const makeDino = function(newSpecies, newPeriod, newCarnivore, newExtinct = false) {
  return {
    species: newSpecies,
    period: newPeriod, 
    carnivore: newCarnivore,
    extinct: newExtinct,
  }
}

const makeSingular = function() {
}

const truncateSpecies = function() {
}

const makeExtinct = function() {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}