//1.reverse a string
let revString = "hello world";
let op = revString
  .split(" ")
  .reverse()
  .map((x) => x.split("").reverse().join(""))
  .join(" ");
console.log("1. Reverse String: " + op);

//2. reverse each word in a string
let revWord = "hello world";
let op1 = revWord
  .split(" ")
  .map((x) => x.split("").reverse().join(""))
  .join(" ");
console.log("2. Reverse each word in a string: " + op1);

//3.if check palindrome or not
let md = "madam";
let op3 = md.split("").reverse().join("");

if (md === op3) {
  console.log("3. Is palindrome: " + md);
} else {
  console.log("3. Not palindrome: " + md);
}

//4.First letter capitalize
let cap = "hello world";
let op4 = cap
  .split(" ")
  .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
  .join(" ");
console.log("4. First letter capitalize: " + op4);

//5.count vowels
let cw = "developer";
let count2 = cw.match(/[aeiou]/gi).join("");
let length = count2.length;
console.log("5. Count vowels : " + length);

//6.dupplicate charactor remove
let dc = "programming";
console.log(
  "6. Remove duplicate characters from string: " + [...new Set(dc)].join("")
);

//7.longest word
let lg = "I love JavaScript very much";
let op7 = lg.split(" ");
let op8 = op7.reduce((a, s) => (a.length > s.length ? a : s));
console.log("7. Longest word in the sentence: " + op8);

//8.replace space with dash
let dash = "this is cool";
let op6 = dash.split(" ").join("-");
console.log("8. Replace space with dash: " + op6);

//9.count
let str = "apple";
let op45 = str.split("");
let iuot = [...str].reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});
console.log("9. apple :", iuot);

//10.anagram check
let str3 = "listen";
let str2 = "silent";
let op5 = (o) => o.toLowerCase().split("").sort().join("");
if (op5(str3) === op5(str2)) {
  console.log("10. Two strings is anagrams: " + true);
} else {
  console.log("10. Two strings is anagrams: " + false);
}

//11.maximum number in array
const arrmax = [5, 1, 9, 3];
const MAXnUM = Math.max(...arrmax);
console.log("11. Maximum number in array: " + MAXnUM);

//12.minimum number in array
const arrmin = [5, 1, 9, 3];
const MinnUM = Math.min(...arrmin);
console.log("12. Minimum number in array: " + MinnUM);

//13.Calculate the sum of all elements in the array
const arrmsum = [5, 1, 9, 3];
const sumnUM = arrmsum.reduce((a, b) => a + b, 0);
console.log("13. Calculate the sum of all elements in the array: " + sumnUM);

//14.remove duplicates from the array
const dpA = [1, 2, 2, 3, 3, 4];
const dparr = [...new Set(dpA)];
console.log("14. Remove duplicates from the array: ", dparr);

//15.ascending array
const assending = [3, 1, 4, 2];
const opass = assending.sort((a, b) => a - b);
console.log("15. Ascending array: ", opass);

//16.descending  array
const dssending = [3, 1, 4, 2];
const opdss = dssending.sort((a, b) => b - a);
console.log("16. Descending array: ", opdss);

// 17.How do you find the second largest number in the array [10, 20, 4, 45]?
let arrgd = [10, 20, 4, 45];
let uniqueArr = [...new Set(arrgd)];
uniqueArr.sort((a, b) => b - a);
let secondLargest = uniqueArr[1];
console.log("17. Second largest in the array: ", secondLargest);
// let arr1 = [10, 20, 4, 45];
// let max = Math.max(...arr1);
// let secondLarge = Math.max(...arr1.filter(n => n !== max));
// console.log("Second Largest:", secondLarge);

//18.check array is sorted
let srtarr = [1, 2, 3, 4];
console.log(
  "18. Check array is sorted: ",
  srtarr.every((val, i, a) => i === 0 || a[i - 1] <= val)
);

//19.flatten array
let fa = [1, [2, [3, [4]]]];
console.log("19. flatten array: ", fa.flat(3));

//20.itersection of two array
let ir1 = [1, 2, 3];
let ir2 = [2, 3, 4];
console.log(
  "20. Itersection of two array: ",
  ir1.filter((el) => ir2.includes(el))
);

//21.merege two array
let ma1 = [1, 2];
let ma2 = [3, 4];
console.log("21. Merege two array: ", ma1.concat(ma2));

//22. falsy value find in array
const falsyarr = [0, 1, false, 2, "", 3];
const arrFal = falsyarr.filter((x) => !x);
console.log("22. falsy value in array: ", arrFal);

//23.sum of even number in array
let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);
let sum = arr.filter((num) => num % 2 === 0).reduce((a, b) => a + b, 0);
console.log("23. Sum of even number in array: ", sum);

//24.title uppercase string
let tc = "i am a developer";
console.log("24. Title uppercase string: " + tc.toLocaleUpperCase());

//25.count the number of words in the string
let cs = "This is a test string";
let wordCo = cs.split(" ").length;
console.log("25. Count the number of words in the string: " + wordCo);

//26.check if the array contain number
let checknym = [1, 2, 3];
let find = false;
for (let i = 0; i <= checknym.length; i++) {
  if (checknym[i] === 2) {
    find = true;
    break;
  }
}
console.log("26. Check array contain number: ", find);
// console.log(checknym.includes(2));

//27.find duplicate in array
let da = [1, 2, 2, 3, 3, 3, 4];
let ops = [...new Set(da)];
console.log("27. Duplicate in array: ", ops);
// let darra = [1, 2, 2, 3, 3, 3, 4];
// let reaptval = darra.filter((val,index) => darra.indexOf(val) !== index);
// let result = [...new Set(reaptval)];
// console.log(result);

//28.remove empty strings from the array
let emptyar = ["a", "", "b", "", "c"];
// let reaptval1 = emptyar.filter(item => item !== "");
let reaptval1 = emptyar.filter(Boolean);
console.log("28. Remove empty strings from the array: ", reaptval1);

//29.chunk aray 2 size
let chunkar = [1, 2, 3, 4, 5];
let size = 2;
let chunk = [];
for (let i = 0; i < chunkar.length; i += size) {
  chunk.push(chunkar.slice(i, i + size));
}
console.log("29. Chunk aray 2 size: ", chunk);

//30.missing number in array
let ary = [1, 2, 4, 5],
  n1 = 5;
let exp = (n1 * (n1 + 1)) / 2;
let red = ary.reduce((a, b) => a + b, 0);
let miss = exp - red;
console.log("30. Missing number in array: ", miss);

//31.swap a and b value
// let a =10;
// let b= 5;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log("a :"+ a, " ", "b :" + b);
let a = 5,
  b = 10;
// a = a + b;
// b= a - b;
// a = a - b;
// console.log("a : " +a ,"," , "b : " +b );
[a, b] = [b, a];
console.log("31. Swap a : " + a, ",", "b : " + b);

//32.fectorial number of count 5
let n = 5,
  f = 1;
for (let i = 1; i <= n; i++) {
  f *= i;
}
console.log("32. Fectorial: " + f);

//33.Fibonacci series
let fn = 5,
  fib = [0, 1];
for (let i = 2; i < fn; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("33. Fibonacci: " + fib.slice(0, fn));

//34.count the number of digit
let dg = 12345;
let count = dg.toString().length;
console.log("34. Count the number of digit: " + count);

//35.reverse digit number
// let dg1 = 12345;
// let revdg = parseInt(dg1.toString().split("").reverse().join(""));
// console.log(revdg);
let num = 12345,
  rev = 0;
while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}
console.log("35. Reverse digit number: " + rev);

//36.Sum of digit number
let number = 1234,
  sum1 = 0;
while (number > 0) {
  let digit = number % 10;
  sum1 = sum1 + digit;
  number = Math.floor(number / 10);
}
console.log("36. Sum of digit number: " + sum1);

//37.check prime number
let number1 = 10;
let isPrime = true;
if (number1 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number1; i++) {
    if (number1 % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime ? "37. Prime " : "37. Not Prime");

//38.GCD find
// let a1 = 12, b1= 18;
// while(b1 !== 0){
//  let temp = b1;
//  b1 = a1 % b1;
//  a1 = temp;
// }
// console.log("38. GCD : " + a1);
// let a1 =12, b1 = 18, g;
// for(let i= 1; i<=a1 && i<=b1; i++)
// {
//   if(a1 % i == 0 && b1 % i == 0){
//     g = i;
//   }
// }
// console.log("38. GCD: " + g);
const GCD = (a, b) => (b === 0 ? a : GCD(b, a % b));
let a1 = 12,
  b1 = 18;
let g = GCD(a1, b1);
console.log("38. GCD:", g);

//39.LCM find
const GCD1 = (a, b) => (b === 0 ? a : GCD1(b, a % b));
let a2 = 4,
  b2 = 5;
let lcm = (a2 * b2) / GCD1(a2, b2);
console.log("39. LCM: ", lcm);

//40.Armstrong number
let num1 = 153,
  sum2 = 0,
  temp = num1;
while (temp > 0) {
  let digit = temp % 10;
  sum2 += digit ** 3;
  temp = Math.floor(temp / 10);
}
console.log(sum2 === num1 ? "40. Armstrong" : "40. Not Armstrong");

//41.capitalize the first letter of each word in (alternative approach)
let str1 = "hello world";
let result1 = str1.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("41. Capital first letter of each word: " + result1);

//42.convert the number binary representation
let no12 = 10;
let binary = "";
// console.log(no12.toString(2));
while (no12 > 0) {
  binary = (no12 % 2) + binary;
  no12 = Math.floor(no12 / 2);
}
console.log("42. Binary represent: " + binary);

//43.flatten nested array
let flt = [1, [2, [3, 4]], 5];
console.log("43. Flatten array: ", flt.flat(2));

//44.replace all instance of
let repl = "banana";
console.log("44. Replace all of string: " + repl.replaceAll("a", "@"));

//45.Count vowels in the string
let js = "JavaScript";
let match = js.match(/[aeiou]/gi).join("");
let len = match.length;
console.log("45. Count vowels : " + len);

//46.Get unique character in string
let st = "hello";
let unique = [...new Set(st)].join("");
console.log("46. Unique character in string: " + unique);

//47.strings "listen" and "silent" are anagrams (alternative approach)
const isAnagramQuick = (a, b) =>
  a.length === b.length && [...a].every((ch) => b.includes(ch));
// let a1 = 12,
//   b1 = 18;
// let g = GCD(a1, b1);
// console.log("38. GCD:", g);
// function isAnagramQuick(a, b) {
//   return a.length === b.length && [...a].every((ch) => b.includes(ch));
// }
console.log(isAnagramQuick("listen", "silent"));

//48. Range of number
let start = 1,
  end = 5,
  range = [];
for (let i = start; i <= end; i++) {
  range.push(i);
}
console.log("48. Range of number: ", range);

//49.duplicate remove from array
let darr = [1, 2, 2, 3, 3];
let resUnique = [...new Set(darr)];
console.log("49. Duplicate remove from array: ", resUnique);

//50.convert array to object
let ab = [
  ["a", 1],
  ["b", 2],
];
let obj = Object.fromEntries(ab);
console.log("50. Convert array to object: ", obj);
