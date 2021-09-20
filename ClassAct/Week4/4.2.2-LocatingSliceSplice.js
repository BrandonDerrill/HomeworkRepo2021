const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log("this is the first index of a ", arr.indexOf("a"));0
console.log(arr.indexOf("a")); 0
console.log("this is the first index of b ", arr.indexOf("b"));2
console.log("this is the first index of c ", arr.indexOf("c"));4

cconst arr = ["Jan", "Feb", "Apr", "Mar", "May", "Sept", "Oct", "Nov", "Dec"];

Slice [2,4] = Apr - Mar 
//(starts 2 then 4-3, slicing up to 4 but does not include 4)



// find the last index of "a", "b", and "c"
console.log("This is the last index of a", arr.lastIndexOf("a")); 6
console.log("This is the last index of b", arr.lastIndexOf("b")); 8
console.log("This is the last index of c", arr.lastIndexOf("c")); 11

console.log(arr); 12

// if the first index and last (compare) index of "a" is not the same,
// remove(splice) the last instance
// repeat(while loop) until there is just one "a"
function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex){
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
    
  }
  return array
}
console.log(arr)
removeDuplicates(arr, "a");
console.log("After removing A's", arr);
removeDuplicates(arr, "b");
console.log("after removing B's", arr);
removeDuplicates(arr, "c");
console.log("after removing C's", arr);




function removeDuplicates(array, duplicatedValue){
    let firstIndex = array.indexOf("duplicatedValue");
    let lastIndex = array.lastIndexOf("duplicatedValue");
    While(firstIndex !== lastIndex) {
        array.splice(lastIndex, 1);
        lastIndex = array.lastIndexOf(duplicatedValue);
    }
    return array
}

console.log(removeDuplicates, (arr, "a");


