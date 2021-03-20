function predictMovies (network, movies) {
  function predict (movie) {
    const prediction = predictMovie(network, movie)

    return prediction
  }

  const predictions = movies.map(predict)

  return predictions
}

const predictions = predictMovies(brain.network, movies)
table('Predictions', predictions)

function getError (movie) {
  const difference = movie.target - movie.prediction
  movie.error = Math.abs(difference)

  return movie.error
}

const madMaxError = getError(madMax)
console.log('Mad Max error:', madMaxError)

function getLoss (predictions) {
  const errors = predictions.map(getError)
  const average = getAverage(errors)

  return average
}

const loss = getLoss(predictions)
console.log('Loss:', loss)
