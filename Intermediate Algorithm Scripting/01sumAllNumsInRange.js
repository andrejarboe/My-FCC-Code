function sumAll(arr) {
    var max = Math.max.apply(null, arr);
    var sum = Math.min.apply(null, arr);
    var n = sum+1;
    
    for(var i= sum; i < max; i++) {
      sum+= + n; 
      console.log(sum);
      n++;
    }
    
    return sum;
  }
  
  sumAll([1, 4]);
  