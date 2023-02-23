const add = (a, b) => {
  return a+b
};

const subtract = (a, b) => {
  return a-b
};

const multiply = (a, b) => {
  return a*b
};

const divide = (a, b) => {
  return a/b
};

const mod = (a, b) => {
  return a%b
};

const manhattanDistance = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  return xDistance + yDistance;
};

const euclideanDistance = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  return Math.sqrt(xDistance*xDistance+yDistance*yDistance);
};

const averageOfTwo = (x, y) => {
  return (x+y)/2
};

const averageOfThree = (x, y) => {
  return (x+y)/3
};