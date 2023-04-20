const getX = (object) => {
  return object ['x']
}

const point = (x, y) => {
  return {x: x, y:y}
}

const emptyObject = (object) => {
  return {object}
}

const distance = (x, y) => {
  return Math.sqrt(x*x + y*y)
}