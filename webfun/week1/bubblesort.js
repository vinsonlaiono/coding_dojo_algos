function bubbleSort(arr) {
    // count set to check if list is already sorted
    let count = 0;
    for(var i=0; i < arr.length -1; i++){
      for(var k=0; k < arr.length - 1 - i; k++){
        if(arr[k] > arr[k+1]){
          let temp = arr[k];
          arr[k] = arr[k+1];
          arr[k+1] = temp;
          count++;
        }
      }
    }
    return count === 0 ? arr + " List is already sorted" : "Sorted List: " + arr;
  }
  var arr = [9, 5, 4,1,3, 6,32,12,143,43]
  console.log(bubbleSort(arr))
  console.log(bubbleSort([1,2,3,4,5,6,7,8,9,10]))