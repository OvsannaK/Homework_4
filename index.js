// .  Task 1


function sum (num, num2) {              // (1)
    let num3 = num + num2
    return num3;
  }
  
  console.log (sum (5,4))

  
  
  function sum2 (num4, num5){           // (2)
      let num6 = num4 + num5
      return num6
  }
  
  console.log (sum2 (12, -5))
  
  
  function sum3 (num7, num8) {           // (3)
      let num9 = num7 + num8
      return num9
  }
  
  console.log (sum3 (8, 27))



  // .   Task 2



  function checkPalindrome (str) {                              // (1)
    const reversedString = str.split('').reverse().join('');
    if (str === reversedString)
        return true;
    else 
        return false;
}

result = checkPalindrome ('madam')

if (result == true) {
    console.log (true)
}
else {
    console.log (false)
}




function checkPalindrome2 (str2) {                              //(2)
    const reversedString2 = str2.split ('').reverse().join('');
    if (reversedString2 === str2) {
        return true
    }
    else {
        return false
    }
}

result2 = checkPalindrome2 ('dggh') 
if (result2 == true){

console.log (true)
}
else {
    console.log(false)
}




function checkPalindrome3 (str3) {                              //(3)
    const reversedString3 = str3.split ('').reverse().join('');
    if (reversedString3 === str3) {
        return true
    }
    else {
        return false
    }
}

result3 = checkPalindrome3 ('ffa')
if (result3 == true) {
    console.log (true)
}
else {
    console.log (false)
}


// .   Task 3                       



function titleCase(str) {                           // (1)
    const splitStr = str.split(' ');
    for (let i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 
console.log (titleCase("hello world"));



function titleCase1 (str1) {
    const splitStr1 = str1.split (' ');
    for (let i = 0; i < splitStr1.length; i++) {

        splitStr1 [i] = splitStr1[0].charAt(0).toUpperCase() + splitStr1[i].substring(1); 
    }
    return splitStr1. join(' ')
}

console.log (titleCase ("the quick brown fox"))






// .   Task 4 



const array1 = [3, 5];                                           // (1) Reduce
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => 
    accumulator + currentValue, initialValue);

console.log (sumWithInitial)



function sum (c, d) {                                           // (1) Sovorakan :DDD
    return (c+d)
}

console.log (sum (3,5))




function getDifference (a , b) {                                 // (2) 
    return (a-b)
};
console.log (getDifference (8,2))



function multiplyBy (num1, num2) {                             // (3)
    return num1 * num2 
    }
    console.log (multiplyBy (12, 3));
    


function divideBy (num3, num4) {                              // (4)
    return num3/num4
}
console.log (divideBy (4, 2))



// .  Task 5


function getLongestWord(str){
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
    console.log(longestWord);
  
  } 
  getLongestWord("A revolution without dancing is a revolution not worth having");



  // . Task 6 Chem arel :(