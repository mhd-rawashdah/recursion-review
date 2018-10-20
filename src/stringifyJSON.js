// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var arr = Object.keys(obj);
  var value = obj[arr[0]];
  delete obj[arr[0]];
  if (!arr.length) {
  	return '}';
  } else if (typeof value === 'string') {
  	 return '"' + arr[0] + '": "' + value + '", ' + stringifyJSON(obj) 
  } 
  else if (typeof value === 'object') {
  	 if(Array.isArray(value)){
  	   return '"' + arr[0] + '": [' + value + '], ' + stringifyJSON(obj)
  	 }
  	 return stringifyJSON(value) ;
  }
  return '"' + arr[0] + '": ' + value + ', ' + stringifyJSON(obj);
 };

