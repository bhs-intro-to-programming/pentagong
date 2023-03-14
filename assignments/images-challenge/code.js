/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */

const oneCircle = (size) => {
  drawFilledCircle(width / 2, height / 1.4, size, 'black');
  drawFilledCircle(width / 3, height / 1.4, size, 'black');
  drawFilledCircle(width / 6, height / 1.4, size, 'black');
  drawFilledCircle(width / 1.5, height / 1.4, size, 'black');
  drawFilledCircle(width / 1.2, height / 1.4, size, 'black');
}

const forManyCirclesColors = (r) => {
  const space = Math.floor(width / 2 * r);
  for (let i = 0; i < space; i++) {
    drawFilledCircle(((width - ((space) * 2 * r)) / 2 + r) + i * 2 * r,
      height / 4, r, i % 2 === 0 ? 'black' : 'green')
  }
}
const forManyCircles = (size) => {
  const space = Math.floor(width / 2 * size);
  for (let i = 0; i < space; i++) {
    drawFilledCircle(((width - ((space) * 2 * size)) / 2 + size) + i * 2 * size,
      height / 2, size, 'black')
  }
}

const colorCircle = (size) => {
  drawFilledCircle(width / 2, height / 3, size, 'red');
  drawFilledCircle(width / 3, height / 3, size, 'black');
  drawFilledCircle(width / 6, height / 3, size, 'red');
  drawFilledCircle(width / 1.5, height / 3, size, 'black');
  drawFilledCircle(width / 1.2, height / 3, size, 'red');
}

const whileManyCircles = (size, r) => {
  let i = 1;
  while (i < width / size - 1) {
    drawFilledCircle(i * size, height / 2, r, 'black')
    i++
  }
}





const concentricCircles = (circles) => {
  const r = height / 2;
  const x = r / circles;
  for (let i = 0; i < circles; i++) {
    drawFilledCircle(width / 2, height / 2, r * (circles - i) / circles,
      i % 2 === 0 ? 'green' : 'black');
  }
};



const checkerBoard = (n) => {
  const size = height / n;
  for (let i = 0; i < n; i++) {
    for (let d = 0; d < n; d++) {
      drawFilledRect(
        ((width - (n * size)) / 2) + size * d,
        ((-(height) + (n * size)) / 2) + i * size, 
        size, 
        size,
        (i + d) % 2 === 0 ? 'black' : 'red')
    }
  }
}





const notReallyCurved = (n) => {
    const parts = n - 1;
    const size = height / 2;
    const distance = size / parts;
    for (let i = 0; i < size / distance; i++){
      drawLine (0, ((height-size)/2) + i * distance, 
      distance * i, ((height-size))+size)
    }
}

notReallyCurved(10)