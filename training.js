function mutate (number) {
  const chaos = Math.random()
  const upOrDown = chaos - 0.5

  return number + upOrDown
}

const mutated = mutate(0)
console.log('Mutated:', mutated)

function evolve (axons) {
  return axons.map(mutate)
}

const evolved = evolve(axons)
console.log('evolved test:', evolved)

function train () {
  console.log('Training!')
  setup()

  while (brain.steps < 100000) {
    const predictions = predictMovies(brain.network, movies)
    const loss = getLoss(predictions)

    const offspring = brain.network.map(evolve)
    const offspringPredictions = predictMovies(offspring, movies)
    const offspringLoss = getLoss(offspringPredictions)

    const improvement = loss - offspringLoss

    if (improvement > 0.0001) {
      brain.network = offspring
      console.log('Loss:', offspringLoss)

      brain.steps = 0
    } else {
      brain.steps = brain.steps + 1
    }
  }

  console.log('Trained!')
  table('Network', brain.network)

  const predictions = predictMovies(brain.network, movies)
  table('Predictions', predictions)

  const loss = getLoss(predictions)
  console.log('Loss:', loss)
}

train()
