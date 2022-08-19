// 1. You are given a string (STR) of length N, consisiting of only lower case English alphabet. Your task is to remove all the duplicate occurence of characters in the string.

const S = "aabccdefgghhijj";

const setone = new Set(S);
console.log(setone.values());

//2. You are given a string (STR) of length N, you have to print the count of all the alphabet.(using maps)

const str = "abcadeecfb";
const mapOne = new Map();
let count = 0;
for(let i = 0; i < str.length; i++){
   for(let j = 0; j < str.length; j++){
    let a = str[i];
    if(a === str[j]){
        count++;
    }
}
   if(count){
   mapOne.set(str[i],count);
   count = 0;
   }
}
console.log(mapone);