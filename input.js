function likeMovie (movie) {
  const like = confirm(movie.title)

  if (like) {
    movie.target = 1
  } else {
    movie.target = 0
  }

  return movie
}

function learn () {
  const ok = confirm('Can I learn about you?')

  if (ok) {
    const training = movies.map(likeMovie)
    table('User training', training)

    train()
    analyze()
    test()
  }
}

function test () {
  const movie = {}

  movie.name = prompt('What movie do you want to predict?')
  console.log('Name:', movie.name)

  movie.year = prompt('What year was it made?')
  console.log('Year:', movie.year)

  movie.minutes = prompt('How many minutes long is it?')
  console.log('Minutes:', movie.minutes)

  const predicted = predictMovie(brain.network, movie)

  alert(predicted.prediction)

  const another = confirm('Test another movie?')

  if (another) {
    test()
  }
}

window.setup = function setup () {
  const start = createButton('Start')
  start.mousePressed(learn)
}
