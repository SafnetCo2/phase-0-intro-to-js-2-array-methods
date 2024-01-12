/**.push() and .unshift()
These two methods work in the same way:

They take one or more arguments (the element or elements you want to add)
They return the length of the modified array
They are destructive methods
The difference is that the .push() method adds elements to the end of an Array and .unshift() adds them to the beginning of the array: */


//push adds end of arry
const arr = [1, 2, 4, 6, 7, 8, 9, 10];
arr.push(1)
console.log(arr)

const myArr = ["i", "am", "a", "super", "woman"]
myArr.push("women")//7 values
myArr.unshift("women")//6 values
myArr;

const coolCountries = ["Usa", "China", "Russia", "Ukraine"]
coolCountries.pop("Ukraine")
coolCountries;
const copyOfCoolCountries = [...coolCountries];
copyOfCoolCountries;
//pop()remove end
//shift()remove at begginig
