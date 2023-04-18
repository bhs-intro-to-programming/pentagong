const findFnord = (string) => {
  return (string.indexOf('fnord'))
}

const stringContains = (string1, string2) => {
  return (string1.indexOf(string2)) > -1
}

const firstAndLast = (string) => {
  return string[0] + string[string.length-1]
}

const swapFrontAndBack = (string) => {
  return string.substring(string.length/2) + string.substring(0,string.length/2)
}

const simplePigLatin = (string) => {
  const v = string.search(/[aeiou]/);
  return string.substring(v) + string.match(/[^aeiou]+/) 
  + 'ay'
}

const isAllUpperCase = (string) => {
  if(){
    return true
  }
  else{
  return /^[A-Z]+$/.test(string)}
}