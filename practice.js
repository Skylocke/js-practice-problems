console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.
function average(arr) {
	var sum = 0;
    var avg = 0;
if(arr.length === 0) {
  return avg;
}else {
  for (var i=0; i < arr.length; i++) {
		sum = sum + arr[i];
        avg = sum/(arr.length);
}return avg;
}
}
console.log(average([1, 2, 3]));
console.log(average([]));

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest(arr) {
 var big;
if(arr.length === 0) {
  return big;
}else {
  big = arr[0];
  for (var i=1; i < arr.length; i++) {
		if(arr[i]>big) {
          big=arr[i];
        }
}return big;
}
}

console.log(biggest([12,3,4,567,8]));
console.log(biggest([]));

// Write a function called `urlParams` that accepts a
// string representing a URL and returns an object with
// key, value pairs for each parameter in the url string.
// If there are no URL parameters your function should
// return an empty object.
//
// Use the string methods split() to target parts of the
// string to turn into an array
// 
// URLs are strings like this:
//
// http://google.com/
// {}
// http://google.com/?q=cats
// {q: 'cats'}
// http://google.com/?q=cats&type=images
// {q: 'cats', type: 'images'}
// http://google.com/?q=cats&type=images&format=gif
// {q: 'cats', type: 'images', format: 'gif'}

function urlParams(query) {
  var obj = {};
  var params = query.split("?")[1];

  if(!params) {
  	return {};
  } else {
  	var paramsList = params.split("&");
  	for (var i=0; i<paramsList.length; i++) {
  	var key = params.split("=")[0];
  	var value = params.split("=")[1];
  	obj[key] = value;
  }
  return obj;
}
console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))

votes = ["lunch", "lunch", "problem", "youtube"];
returns "lunch"
votes = ["sleep", "eat", "sleep", "homework"];

function election(votes) {
  var popular;
  var repeat = 0;
  for(var i=0; i<votes.length; i++) {
    for (var k=0; i<votes.length; i++) {
      if(var[i] == var[k]) {
        repeat = repeat +1;
      } return repeat;
    }
  }
}



//1. Write a function called isPalindrome that accepts a string and returns true
  // if the string is a palindrome. A palindrome is a string that is spelled the 
  // same way backwards and forwards.

 function isPalindrome(word) {
    var arr = word.split("");
    arr.reverse();
    var rep = arr.toString();
    if(word == rep) {
      console.log(true);
    } else {
      console.log("false");
    } console.log(word, rep);
  }
  isPalindrome(""); // returns true;
  isPalindrome("a"); // returns true;
  isPalindrome("ada"); // returns true;
  isPalindrome("taco"); // returns true;
  isPalindrome("racecar"); // returns true;
  isPalindrome("lions oil"); // returns true;
  isPalindrome("not the same backwards and forwards"); // returns false;

// // 2. Write a method called removeLetter that accepts a string, and a string representing
//    a character to be removed from the string. The function should return a new string
//    with all the occurences of the ltter removed from the original string.
//    removeLetter("tomorrow", "o") // returns "tmrrw"

function removeLetter(word, letter) {
  var result = "";
  for(var i=0; i<word.length; i++) {
    if(word[i] !== letter) {
      result += word[i];
    }
  } return result;
}
removeLetter("tomorrow", "o");


// Write a function called reverse() that accepts a list and 
//    returns a new list with reversed contents. Do not use the 
//    built in reverse function!
function reverse(array) {
  var revList = [];
  for (var i = array.length-1 ; i>=0; i--) {
    revList.push(array[i]);
} return revList;
}
  console.log(reverse([])); // returns []
  console.log(reverse([1,2])); // returns [2,1]
  console.log(reverse([1,2,3,4,5])); // returns [5,4,3,2,1]


// / 2. Write a function merge() that accepts two sorted lists
// //    and merges them together into a new sorted list.
function merge(a, b) {
  var ab = a.concat(b).sort(function(y, z){
    return y-z;
  });
  return ab;
}

   console.log(merge([], [])); // returns []
   console.log(merge([], [2])); // returns [2] 
   console.log(merge([3], [])); // returns [3] 
   console.log(merge([1, 7], [5])); // returns [1, 5, 7]
   console.log(merge([1,3,5], [2,4,6,8,10])); // returns [1,2,3,4,5,8,10]


//write a function called daysInMonth() that accepts an integer between 1 and 12 representing the month and 
//returns the number of days in that month.

//write a function called daysToBirthday that accepts two integers representing someone's birthday
//and returns the total number of days until their next birthday

   var cal = [
     31,
     28,
     31,
     30,
     31,
     30,
     31,
     31,
     30,
     31,
     30,
     31
];

function daysInMonth(num) {
  return cal[num-1];
}

// console.log(daysInMonth(12));

function daynumber(a, b) {
  var dayn = b;
  for(var i = 0; i<a-1; i++) {
    dayn = dayn + cal[i];
  }return dayn;
}

// console.log(daynumber(4, 22));

var today = 112;

function daysToBirthday(c, d) {
  var diff = daynumber(c, d) - today;
  if(diff<0) {
    diff = 365 + diff;
  }return diff;
}

console.log(daysToBirthday(4, 22));
console.log(daysToBirthday(4, 28));
console.log(daysToBirthday(4, 21));


//Create a function that, given a DOM element on the page, will visit the element itself and all 
//of its descendents (not just its immediate children). For each element visisted, the function
//should pass that elemtn to a provided callback function.

//The arguments to the function should be:

//a DOM element 
//a callback function (that takes a DOM element as its argument)

// function childelements () {
//   var e = document.body.children;
//   var c = [];
//   for (var i=0; i<e.length; i++) {
//     c.push(e[i]);
//   } console.log(c);
// }

// childelements();

// //Write a "mul" function which will produce the following output
// // - console.log(mul(2)(3)(4)); => 24
// function mul(x){
//   return function(y) {
//   return function(z){
//   }
//   return x*y*z;
//   };
// }

// console.log(mul(2)(3)(4));