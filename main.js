function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0;
}

function halfSquare(num) {
  return (num * num) / 2;
}

function isLong(str) {
  return str.length >= 15;
}

function exclaim(str) {
  if (str[str.length - 1] === '!'){
    return `${str.slice(0, str.indexOf('!'))}!`;
  } else {
    return `${str}!`;
  }
}
  
function containsSpace(str) {
    for (i = 0; i < str.length; i++){
      if(str[i].includes(' ')){
        return true;
      } 
    }
      return false
}

function countWords(str) {
  let count = 0;
  let newArr = [];
  if (containsSpace(str)){
    newArr = (str.split(' '));
    count = newArr.length;
  } else {
    count = 1;
  }
  return count;
}

function containsDigit(str) {
  let digits = '1234567890';
  for (i = 0; i < str.length; i++){
    if(digits.includes(str[i])){
      return true;
    } 
  }
    return false
}

function containsLowerCase(str) {
  let lowerC = 'asdfghjklqwertyuiopzxcvbnm';
  for (i = 0; i < str.length; i++){
    if(lowerC.includes(str[i])){
      return true;
    } 
  }
    return false
}

function containsUpperCase(str) {
  let upperC = ';QWERTYUIOPASDFGHJKLZXCVBNM';
  for (i = 0; i < str.length; i++){
    if(upperC.includes(str[i])){
      return true;
    } 
  }
    return false
}

function containsNonAlphanumeric(str) {
  // return containsDigit(str) === false && containsLowerCase(str) === false && containsUpperCase(str) === false && str !== '' 
  // && str.includes('![a-zA-Z0-9]')
  const upperC = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const lowerC = 'qwertyuiopasdfghjklzxcvbnm';
  const nums = '1234567890';
  let spec = `'!@#$%^&*()_+=-<>,./;":|{}[]\` `
  
  if (str !== ''){
  for (let i = 0; i < str.length; i++){
//     if(spec.includes(str[i])){
//       return true;
//     }
//   }
//   return false
// }

    if(str[i] === ' ' && upperC.includes(str[i]) === false && lowerC.includes(str[i]) === false && nums.includes(str[i]) === false){
      return true;
    } else if (spec.includes(str[i]) || containsSpace(str[i])){
      return true
    }
  }
}
return false
}


function digits(num) {
  let numAsStr = String(num);
  const newArr = [];
  let newStr = '';
  let i = 0;
  let ii = 0

  while(i < numAsStr.length){
    if (containsDigit(numAsStr[i])){
      console.log(numAsStr[i]);
      newStr += numAsStr[i]
      i++;
    } else {
      i++;
    }
  }
  while(ii < newStr.length){
    newArr.push(Number(newStr[ii]));
    ii++;
  }
  return newArr;
}

function truncate(str) {
  if (str.length >= 15){
    return `${str.slice(0, 8)}...`;
  } else {
    return str;
  }
}

function isValidPassword(str) {
  return 
}

function onlyPunchy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (exclaim(arr[i]).length < 15){
      newArr.push(exclaim(arr[i]))
    }
  }
  return newArr;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}