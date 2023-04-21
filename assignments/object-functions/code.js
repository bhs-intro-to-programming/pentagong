const getX = (object) => {
  return object ['x']
}

const point = (x, y) => {
  return {x: x, y:y}
}

const emptyObject = (object) => {
  return {object}
}

const distance = (p1, p2) => {
  return Math.sqrt(((p1.x-p2.x)**2) + ((p1.y-p2.y)**2))
}

const midpoint = (p1, p2) => {
  return {x: (p1.x + p2.x)/2,
  y: (p1.y + p2.y)/2}
}

const sumSalaries = (array) => {
  let sum = 0
  for(let i = 0; i < array.length; i++){
    sum += array[i].salary 
  }
  return sum
}

const newHighScore = (hs, po) => {
  let highScore = hs
  for(let i = 0; i < po.length; i++){
    if(po[i].score > highScore){
      highScore = po[i].score
    }
    
  }

return highScore
  
}

const summarizeBooks = (array) => {
  let sum = 0
  for(let i = 0; i < array.length; i++){
    sum += array[i].pages 
  }
  return sum
}