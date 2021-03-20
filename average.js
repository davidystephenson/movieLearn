const movies = [
  { title: 'Mad Max: Fury Road', year: 2015, minutes: 120, target: 1 }, // good?
  { title: 'Inception', year: 2010, minutes: 135, target: 1 },
  { title: 'The Force Awakens', year: 2015, minutes: 135, target: 0 },
  { title: 'The Godfather', year: 1972, minutes: 177, target: 1 },
  { title: 'The Wizard of Oz', year: 1939, minutes: 102, target: 0 },
  { title: 'Wolf of Wall Street', year: 2013, minutes: 180, target: 1 },
  { title: 'E.T.', year: 1982, minutes: 114, target: 0 },
  { title: 'Back to the Future', year: 1985, minutes: 116, target: 0 },
  { title: 'Grease', year: 1978, minutes: 110, target: 0 },
  { title: 'Gone With the Wind', year: 1939, minutes: 221, target: 0 }
]

const madMax = movies[0]
console.log('Mad Max:', madMax)

console.log('Movies')
console.table(movies)

function table (title, data) {
  console.log(title)
  console.table(data)
}

table('Training data', movies)

function getYear (movie) {
  return movie.year
}
const madMaxYear = getYear(madMax)
console.log('Mad Max Year:', madMaxYear)

const years = movies.map(getYear)
console.log('years test:', years)

function add (x, y) {
  return x + y
}
const totalYears = years.reduce(add)
console.log('Total years:', totalYears)

function getMinutes (movie) {
  return movie.minutes
}
const minutes = movies.map(getMinutes)
const totalMinutes = minutes.reduce(add)
console.log('Total minutes:', totalMinutes)

const averageMinutes = totalMinutes / minutes.length
console.log('Average minutes:', averageMinutes)

function getAverage (array) {
  const total = array.reduce(add)
  const average = total / array.length

  return average
}
const averageYear = getAverage(years)
console.log('Average year:', averageYear)
