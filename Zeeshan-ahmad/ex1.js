
// Write a JavaScript function to check whether an input is an array or not.

//Test Data :
//console.log(isArray('w3resource'));
//
 // false
//console.log(isArray([1, 2, 4, 0])); // true


var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
  