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

}

const anyOverOneHundred = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 100) {
      return true
    }
    else {
      return false
    }
  }
  return false
}