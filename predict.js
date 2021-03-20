const brain = {}

function setupBrain () {
  brain.network = [
    [0, 0, 0], // axons, weights
    [0, 0, 0],
    [0, 0, 0]
  ]

  brain.steps = 0
}
setupBrain()

table('Network', brain.network)

function sigma (x) {
  return 1 / (1 + Math.exp(-x))
}

function perceptron (axons, a, b) {
  const weightA = axons[0]
  const weightB = axons[1]
  const bias = axons[2]

  const feelingA = a * weightA
  const feelingB = b * weightB

  const opinion = feelingA + feelingB + bias
  const prediction = sigma(opinion)

  return prediction
}

const axons = brain.network[0]
const neuron = perceptron(axons, madMax.year, madMax.minutes)
console.log('Neuron:', neuron)

function predictMovie (network, movie) {
  const normalYear = movie.year - averageYear
  const normalMinutes = movie.minutes - averageMinutes

  const neuron1 = perceptron(network[0], normalYear, normalMinutes)
  const neuron2 = perceptron(network[1], normalYear, normalMinutes)
  const neuron3 = perceptron(network[2], neuron1, neuron2)

  movie.prediction = neuron3

  return movie
}

const prediction = predictMovie(brain.network, madMax)
console.log('Mad Max:', prediction)
