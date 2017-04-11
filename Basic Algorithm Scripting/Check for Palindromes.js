

function palindrome(str) {
  // Good luck!
  var str2 = "";
  str = str.toLowerCase().replace(/[^0-9a-zA-Z_]|_/g, '');
  
  str2 = str.split('').reverse().join('');
  
  if(str === str2){
    return true;
  }else return false;
  
  
  return str2;
}



palindrome("1 eye for of 1 eye.");//returns false becase we are including numbers