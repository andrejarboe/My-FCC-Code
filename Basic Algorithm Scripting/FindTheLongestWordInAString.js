


function findLongestWord(str) {
  str = str.split(" ");
  
  var num, length = 0;
  
  for(i = 0; i < str.length; i++){
    for(j = 0; j < str[i].length; j++ ){
      
      num = j+1;
      
      if(num > length){
        length = num;
      }
    }
  }
  
  return length;
}

findLongestWord("andre hop");