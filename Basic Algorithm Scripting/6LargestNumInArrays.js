


function largestOfFour(arr) {
  // You can do this!
  var largestNum = [];
  var currentNum = 0;
  for(i = 0; i < arr.length; i++){
    currentNum = 0;
    for(j = 0; j<arr[i].length; j++){
      if(arr[i][j] > currentNum){
        currentNum = arr[i][j];
      }
    }
    largestNum.push(currentNum);
   }
  
  
  return largestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
