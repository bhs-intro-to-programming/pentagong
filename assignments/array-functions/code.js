const countTens = (numbers) => {
  let tens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
      tens++
    }
  }
  return tens
}

const sum = (numbers) => {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i]
  }
  return result
}

const evens = (numbers) => {
  const array = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] %2 == 0) {
       array.push(numbers[i])
 
    }
  }
  return array
}

const anyOverOneHundred = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 100) {
      return true
 
    }
  }
  return false
}

const pyramid = (numbers) => {
  const array = []
  for (let i = 1; i < numbers + i; i++){
    for (let j = 1; j < i; j++){
      return array.push(i)
    }
  }
}