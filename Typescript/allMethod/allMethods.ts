//1.reverse a string
let strin1: string = "hello world";
console.log(
  "1. Reverse String: " +
    strin1
      .split(" ")
      .reverse()
      .map((x) => x.split("").reverse().join(""))
      .join(" ")
);

//2. reverse each word in a string
let strin2: string = "hello world";
console.log(
  "2. Reverse each word in a string: " +
    strin2
      .split(" ")
      .map((x) => x.split("").reverse().join(""))
      .join(" ")
);

//3.if check palindrome or not
let strin3: string = "madam";
let checkPali = strin3.split("").reverse().join("");
console.log(checkPali == strin3 ? "3. Is palindrome" : "3. Is not palindrome");

//4.First letter capitalize
let strin4: string = "hello world";
console.log(
  "4. First letter capitalize:",
  strin4
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ")
);

//5.count vowels
let strin5: string = "developer";
console.log("5. Count vowels: ", strin5.match(/[aeiou]/gi)?.join("").length);

//6.dupplicate charactor remove
let strin6: string = "programming";
console.log("6. Remove duplicate value:", Array.from(new Set(strin6)).join(""));

//7.longest word
let string7: string = "I love Typescript very much";
console.log(
  "7. Longest word in the sentence: ",
  string7
    .split(" ")
    .reduce((longest, cuurentWord) =>
      longest.length > cuurentWord.length ? longest : cuurentWord
    )
);

//8.replace space with dash
let string8: string = "this is cool";
console.log("8. Replace space with dash:", string8.split(" ").join("-"));

//9.count
let string9: string = "apple";
let charOp = Array.from(string9).reduce(
  (x, y) => ((x[y] = (x[y] || 0) + 1), x),
  {}
);
console.log("9. apple :", charOp);

//10.anagram check
const string10: string = "listen";
const string11: string = "silent";
const anagramop = (op: string) => op.toLowerCase().split("").sort().join("");
console.log(
  "10. Two strings is anagrams: ",
  anagramop(string10) === anagramop(string11) ? true : false
);

//11.maximum number in array
const string12: number[] = [5, 1, 9, 3];
console.log("11. Maximum number in array: " + Math.max(...string12));

//12.minimum number in array
const string13: number[] = [5, 1, 9, 3];
console.log("12. Minimum number in array: " + Math.min(...string13));

//13.Calculate the sum of all elements in the array
const string14: number[] = [5, 1, 9, 3];
console.log(
  "13. Calculate the sum of all elements in the array: " +
    string14.reduce((a, b) => a + b)
);

//14.remove duplicates from the array
const string15: number[] = [1, 2, 2, 3, 3, 4];
console.log(
  "14. Remove duplicates from the array: ",
  Array.from(new Set(string15))
);

//15.ascending array
const string16: number[] = [3, 1, 4, 2];
console.log(
  "15. Ascending array: ",
  string16.sort((a, b) => a - b)
);

//16.descending  array
const string17: number[] = [3, 1, 4, 2];
console.log(
  "16. Descending array: ",
  string17.sort((a, b) => b - a)
);

// 17.How do you find the second largest number in the array [10, 20, 4, 45]?
const string18: number[] = [10, 20, 4, 45];
console.log(
  "17. Second largest in the array: ",
  string18.sort((a, b) => b - a)[1]
);

// 18. Check array is sorted
let checkSortArr: number[] = [1, 2, 3, 4];
const isSortedAscending = checkSortArr.every(
  (val, i, arr) => i === 0 || arr[i - 1] <= val
);

console.log("18. Check array is sorted:", isSortedAscending);

//19.flatten array
const string19: (number | (number | (number | number[])[])[])[] = [
  1,
  [2, [3, [4]]],
];
console.log("19. Flatten array: ", string19.flat(Infinity));

//20.itersection of two array
const string20: number[] = [1, 2, 3];
const string21: number[] = [2, 3, 4];
console.log(
  "20. Itersection of two array: ",
  string20.filter((x) => string21.includes(x))
);

//21.merege two array
const string22: number[] = [1, 2];
const string23: number[] = [3, 4];
console.log("21. Merege two array: ", string22.concat(string23));

//22. falsy value find in array
const string24: [number, number, boolean, number, string, number] = [
  0,
  1,
  false,
  2,
  "",
  3,
];
console.log(
  "22. falsy value in array: ",
  string24.filter((x) => !x)
);

//23.sum of even number in array
const string25: number[] = [1, 2, 3, 4, 5, 6];
console.log(
  "23. Sum of even number in array: ",
  string25.filter((num) => num % 2 === 0).reduce((x, y) => x + y)
);

//24.title uppercase string
const string26: string = "i am a developer";
console.log("24. Title uppercase string: ", string26.toUpperCase());

//25.count the number of words in the string
const string27: string = "This is a test string";
console.log(
  "25. Count the number of words in the string: ",
  string27.split(" ").length
);

//26.check if the array contain number
const arrCheck: number[] = [1, 2, 3, 4];
console.log("26. Check array contain number: ", arrCheck.includes(2));

//27.find duplicate in array
const string28: number[] = [1, 2, 2, 3, 3, 3, 4];
console.log("27. Duplicate in array: ", Array.from(new Set(string28)));

//28.remove empty strings from the array
const string29: string[] = ["a", "", "b", "", "c"];
console.log(
  "28. Remove empty strings from the array: ",
  string29.filter((x) => x !== "")
);

//29.chunk aray 2 size
const string30: number[] = [1, 2, 3, 4, 5];
const cunkArray: number[][] = [];
const size: number = 2;
for (let i = 0; i < string30.length; i += size) {
  cunkArray.push(string30.slice(i, i + size));
}
console.log("29. Chunk aray 2 size: ", cunkArray);

//30.missing number in array
const numberArr: number[] = [1, 2, 4, 5];
const minNum = Math.min(...numberArr);
const maxNum = Math.max(...numberArr);
const missing: number[] = [];
for (let i = minNum; i <= maxNum; i++) {
  if (!numberArr.includes(i)) {
    missing.push(i);
  }
}
console.log("30. Missing number array: ", missing);

//31.swap a and b value
let [a, b]: [number, number] = [5, 10];
console.log("31. Swap : ", ([a, b] = [b, a]));

//32.fectorial number of count 5
const num1: number = 5;
let fact: number = 1;
for (let i = 1; i <= num1; i++) {
  fact *= i;
}
console.log("32. Fectorial: " + fact);

//33.Fibonacci series
let numb2: number = 5,
  series: number[] = [0, 1];
for (let i = 2; i < numb2; i++) {
  series[i] = series[i - 1] + series[i - 2];
}
console.log("33. Fibonacci: ", series.slice(0, numb2));

//34.count the number of digit
let num3: number = 12345;
console.log("34. Count the number of digit: ", num3.toString().length);

//35.reverse digit number
let num4: number = 12345;
console.log(
  "35. Reverse digit number: ",
  num4.toString().split("").reverse().join("")
);

//36.Sum of digit number
let num5: number = 123654,
  summation: number = 0,
  digit: number;
while (num5 > 0) {
  digit = num5 % 10;
  summation = summation + digit;
  num5 = Math.floor(num5 / 10);
}
console.log("36. Sum of digit number: " + summation);

//37.check prime number
let num6: number = 7;
console.log(num6 % 2 === 0 ? "37. Prime " : "37. Not Prime ");

//38.GCD find
const GCD = (a: number, b: number): number => (b === 0 ? a : GCD(b, a % b));
let a1: number = 12,
  b1: number = 18;
console.log("38. GCD: ", GCD(a1, b1));

//39.LCM find
const GCD1 = (a: number, b: number): number => (b === 0 ? a : GCD1(b, a % b));
let a2: number = 4,
  b2: number = 5;
let lcm = (a2 * b2) / GCD1(a2, b2);
console.log("39. LCM:", lcm);

//40.check armstrong number
let num7: number = 153,
  summa: number = 0,
  temp = num7;
while (temp > 0) {
  let digit1 = temp % 10;
  summa += digit1 ** 3;
  temp = Math.floor(temp / 10);
}
console.log(summa === num7 ? "40. Armstrong" : "40. Not Armstrong");

//41.capitalize the first letter of each word in (alternative approach)
let str1: string = "hello world";
console.log(
  "41. Capital first letter of each word: " +
    str1.replace(/\b\w/g, (char) => char.toUpperCase())
);

//42.convert the number binary representation
let bnum: number = 10;
console.log("42. Binary represent: ", bnum.toString(2));

//43. flatten a nested array
const arraFlate: (number | (number | (number | number[])[])[])[] = [
  1,
  [2, [3, [4]]],
];
console.log("43. Flatten array: ", arraFlate.flat(Infinity));

//44.replace all instance of
let reStri = "banana";
console.log("44. Replace all of string: ", reStri.replace(/a/g, "@"));

//45.Count vowels in the string
const ts: string = "Typescript";
console.log("45. Count vowels : ", ts.match(/[aeiou]/gi).join("").length);

//46.Get unique character in string
const str: string = "hello";
console.log(
  "46. Unique character in string: ",
  Array.from(new Set(str)).join("")
);

//47.strings "listen" and "silent" are anagrams (alternative approach)
const isAnagramQuick = (a: string, b: string): boolean =>
  a.length === b.length && Array.from(a).every((ch) => b.includes(ch));
console.log("47. Anagrams:", isAnagramQuick("listen", "silent"));

//48. Range of number
let start: number = 1,
  end: number = 5,
  range: number[] = [];
for (let i = start; i <= end; i++) {
  range.push(i);
}
console.log("48. Range of number: ", range);

//49.duplicate remove from array
const duarra: number[] = [1, 2, 2, 3, 3];
console.log("49. Duplicate remove from array: ", Array.from(new Set(duarra)));

//50.convert array to object
const ab: [string, number][] = [
  ["a", 1],
  ["b", 2],
];
console.log("50. Convert array to object: ", Object.fromEntries(ab));
