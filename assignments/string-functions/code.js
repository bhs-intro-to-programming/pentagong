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
  return string.substring(v) + string.substring (0,v) 
  + 'ay'
}

const isAllUpperCase = (string) => {
  
  return /^[A-Z]*$/.test(string)
}

const sameIgnoringCase = (string1, string2) => {
    if (string1.toLowerCase() == string2.toLowerCase()){
      return true
    }
    else {
      return false
    }
}

const firstHalf = (string) => {
  return string.substring(0, string.length/2)
}

const secondHalf = (string) =>{
  return string.substring(string.length/2)
}

const upDown = (string) => {
  
}