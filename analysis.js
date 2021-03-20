const decades = [1940, 1970, 2000, 2030]

const runtimes = [90, 120, 150, 180]

const data = {
  90: { 1940: 0, 1970: 0, 2000: 0, 2030: 0 },
  120: { 1940: 0, 1970: 0, 2000: 0, 2030: 0 },
  150: { 1940: 0, 1970: 0, 2000: 0, 2030: 0 },
  180: { 1940: 0, 1970: 0, 2000: 0, 2030: 0 }
}

table('Data', data)

function makeRow (runtime) {
  function makeColumn (decade) {
    const imaginary = {
      year: decade,
      minutes: runtime
    }

    const predicted = predictMovie(brain.network, imaginary)

    data[runtime][decade] = predicted.prediction
  }

  decades.forEach(makeColumn)
}

const ninety = runtimes[0]
makeRow(ninety)
table('Row', data)

function analyze () {
  runtimes.forEach(makeRow)

  table('Analysis', data)
}

analyze()
