// // print index 7 to 10 elements
// var str="sai, suresh,mahesh,teja";
// var str1=str.slice(3,1)//index start from 0
// console.log(str1)//res
// ///////////////////////////
// var s="sai, suresh,mahesh,teja"
// var r=s.substring(3,0)
// console.log(r)
// ////////////////////////////////////
// var str="suresh age is 22,suresh village name is ktvm"
// var str1=str.replaceAll("suresh","teja")
// console.log(str1)
// ///////////////////////////////////////////
// var str="suresh,suresh"
// var str1=str.replaceAll("suresh","teja")
// console.log(str1)
// ////////////////
// var str="suresh"
// var str1=str.toLocaleLowerCase()
// var str2=str1.toLocaleUpperCase()
// console.log(str1,str2)
// //////////////////////////
// var str="suresh"
// var str1="goka"
// var str2=str.concat(" ",str1)
// console.log(str2)
// ////////////////////////////
// var str="suresh"
// var str1=str.split("").reverse().join("").toLocaleUpperCase()
// console.log(str1)
// //Name	Description
// // charAt()	Returns the character at a specified index (position)

// // charCodeAt()	Returns the Unicode of the character at a specified index

// // concat()	    Returns two or more joined strings

// // constructor	Returns the string's constructor function

// // endsWith()	Returns if a string ends with a specified value

// // fromCharCode()	Returns Unicode values as characters

// // includes()	Returns if a string contains a specified value

// // indexOf()	Returns the index (position) of the first occurrence of a value in a string

// // lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string

// // length	Returns the length of a string

// // localeCompare()	Compares two strings in the current locale

// // match()	Searches a string for a value, or a regular expression, and returns the matches

// // prototype	Allows you to add properties and methods to an object

// // repeat()	Returns a new string with a number of copies of a string

// // replace()	Searches a string for a pattern, and returns a string where the first match is replaced

// // replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced

// // search()	Searches a string for a value, or regular expression, and returns the index (position) of the match

// // slice()	Extracts a part of a string and returns a new string

// // split()	Splits a string into an array of substrings

// // startsWith()	Checks whether a string begins with specified characters

// // substr()	Extracts a number of characters from a string, from a start index (position)

// // substring()	Extracts characters from a string, between two specified indices (positions)

// // toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale

// // toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale

// // toLowerCase()	Returns a string converted to lowercase letters

// // toString()	Returns a string or a string object as a string

// // toUpperCase()	Returns a string converted to uppercase letters

// // trim()	Returns a string with removed whitespaces

// // trimEnd()	Returns a string with removed whitespaces from the end

// // trimStart()	Returns a string with removed whitespaces from the start

// // valueOf()	Returns the primitive value of a string or a string object
// var str="suresh goka suresh"
// var str=str.lastIndexOf("suresh")
// console.log(str)
// /////////
// //first letter will be capital
// var str="suresh"
// var str1=str.charAt(0).toLocaleUpperCase()+str.slice(1)
// console.log(str1)
// ////////////////////////
// var str="suresh goka"
// var str1=str.split("").reverse().join("")
// console.log(str1)
// str2=str1.split(" ")
// console.log(str2.reverse().join(" "))//hserus akog
/////////////////////////////////////////
// var str= "suresh goka,suresh age is 22,suresh village name ktvm."
// var str1=str.match("suresh")
// console.log(str1)//index=0
//  var str= "suresh goka,suresh age is 22,suresh village name ktvm."
//  var str=str.includes("suresh")
//  console.log(str)
//  ///////////////////////////

//  var str= "suresh goka,suresh age is 22,suresh village name ktvm."
//  var str2=str.startsWith("suresh")
//  console.log(str2)
//  var str1=str.startsWith("goka")
//////////////////////////////////////////
//input=adsjfdsfsfjs
// output={ a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }
// var str="adsjfdsfsfjsdjfhacabcsbajda"
// var str=str.split('')
// console.log(str)
// var str1=str.reduce((acc,curr)=>
// {
//     if(acc[curr])
//     {
//         acc[curr]= ++acc[curr]
//     }
//     else{
//         acc[curr]=1
//     }
//     return acc
// },[])
// console.log(str1)
// /////////////////////
// //print palindrome  of a string
// var str="madam"
// var str1=str.split('').reverse().join('')
// function save()

// {
//     if(str==str1)
//     {
//         console.log(true)
// }
// else
// {
//     console.log(false)
// }
// return str1
// }
// console.log(save())
////////////////////////
//remove duplicate strings in the strings

// let str="suresh"
// let arr=str.split('')

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));
// var str="my namE is surEsh"
// var result=[]
// var str=str.split(" ")
// // console.log(str)
// for(var i=0;i<str.length;i++)
// {
// result[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()

// }
// console.log(result.join(' '))
// var str = "my name is suresh";
// var str = str.split(" ").reverse().join(" ");
// var str1 = str.split("");
// // console.log(str1.reverse().join(""));
// var str = "suresh goka";
// var str = str.split(" ");
// // console.log(str);
// var result = "";
// for (var i = 0; i < str.length; i++) {
//   result[i] = str[i];
// }
// console.log(result);
var str = 434;
var str1 = str.toString().split("").reverse().join("");
console.log(str1, typeof str1);
if (str == str1) {
  console.log(true);
} else {
  console.log(false);
}
