// You have an array like  var x = [ 10, 20, 30] .Now sum all those items using for loop. 


var x = [10, 20, 30];
var sum = 0;

for (var i = 0; i < x.length; i++) {
  sum += x[i];
}

console.log("The sum of the array is: " + sum);