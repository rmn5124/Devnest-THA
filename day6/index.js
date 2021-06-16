'use strict';
/*
1.Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True
*/
console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1, 2, 4, 0]));

/*
2.Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

function clone(a) {
  return [...a];
}
console.log(clone([1, 2, 4, 0]));
console.log(clone([1, 2, [4, 0]]));

/*
3.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/

function first(a, n = 1) {
  let uptoFisrt = [];
  for (let i = 0; i < n; i++) {
    if (a[i] === undefined) break;
    uptoFisrt.push(a[i]);
  }
  return uptoFisrt;
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/*
4.Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

let str = '';
const myColor = ['Red', 'Green', 'White', 'Black'];
console.log(`"${myColor.toString()}"`);

for (let i = 0; i < myColor.length; i++) {
  str += myColor[i];
  if (i != myColor.length - 1) str += '+';
}

console.log(`"${str}"`);

/*
5.Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let ele,
  ma = 1,
  count = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) count++;
    if (count > ma) {
      ma = count;
      ele = arr1[i];
    }
  }
  count = 0;
}

console.log(`${ele} (${ma} times)`);
