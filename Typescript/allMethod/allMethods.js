var _a;
var _b;
//1.reverse a string
var strin1 = "hello world";
console.log("1. Reverse String: " +
    strin1
        .split(" ")
        .reverse()
        .map(function (x) { return x.split("").reverse().join(""); })
        .join(" "));
//2. reverse each word in a string
var strin2 = "hello world";
console.log("2. Reverse each word in a string: " +
    strin2
        .split(" ")
        .map(function (x) { return x.split("").reverse().join(""); })
        .join(" "));
//3.if check palindrome or not
var strin3 = "madam";
var checkPali = strin3.split("").reverse().join("");
console.log(checkPali == strin3 ? "3. Is palindrome" : "3. Is not palindrome");
//4.First letter capitalize
var strin4 = "hello world";
console.log("4. First letter capitalize:", strin4
    .split(" ")
    .map(function (x) { return x.charAt(0).toUpperCase() + x.slice(1); })
    .join(" "));
//5.count vowels
var strin5 = "developer";
console.log("5. Count vowels: ", (_b = strin5.match(/[aeiou]/gi)) === null || _b === void 0 ? void 0 : _b.join("").length);
//6.dupplicate charactor remove
var strin6 = "programming";
console.log("6. Remove duplicate value:", Array.from(new Set(strin6)).join(""));
//7.longest word
var string7 = "I love Typescript very much";
console.log("7. Longest word in the sentence: ", string7
    .split(" ")
    .reduce(function (longest, cuurentWord) {
    return longest.length > cuurentWord.length ? longest : cuurentWord;
}));
//8.replace space with dash
var string8 = "this is cool";
console.log("8. Replace space with dash:", string8.split(" ").join("-"));
//9.count
var string9 = "apple";
var charOp = Array.from(string9).reduce(function (x, y) { return ((x[y] = (x[y] || 0) + 1), x); }, {});
console.log("9. apple :", charOp);
//10.anagram check
var string10 = "listen";
var string11 = "silent";
var anagramop = function (op) { return op.toLowerCase().split("").sort().join(""); };
console.log("10. Two strings is anagrams: ", anagramop(string10) === anagramop(string11) ? true : false);
//11.maximum number in array
var string12 = [5, 1, 9, 3];
console.log("11. Maximum number in array: " + Math.max.apply(Math, string12));
//12.minimum number in array
var string13 = [5, 1, 9, 3];
console.log("12. Minimum number in array: " + Math.min.apply(Math, string13));
//13.Calculate the sum of all elements in the array
var string14 = [5, 1, 9, 3];
console.log("13. Calculate the sum of all elements in the array: " +
    string14.reduce(function (a, b) { return a + b; }));
//14.remove duplicates from the array
var string15 = [1, 2, 2, 3, 3, 4];
console.log("14. Remove duplicates from the array: ", Array.from(new Set(string15)));
//15.ascending array
var string16 = [3, 1, 4, 2];
console.log("15. Ascending array: ", string16.sort(function (a, b) { return a - b; }));
//16.descending  array
var string17 = [3, 1, 4, 2];
console.log("16. Descending array: ", string17.sort(function (a, b) { return b - a; }));
// 17.How do you find the second largest number in the array [10, 20, 4, 45]?
var string18 = [10, 20, 4, 45];
console.log("17. Second largest in the array: ", string18.sort(function (a, b) { return b - a; })[1]);
// 18. Check array is sorted
var checkSortArr = [1, 2, 3, 4];
var isSortedAscending = checkSortArr.every(function (val, i, arr) { return i === 0 || arr[i - 1] <= val; });
console.log("18. Check array is sorted:", isSortedAscending);
//19.flatten array
var string19 = [
    1,
    [2, [3, [4]]],
];
console.log("19. Flatten array: ", string19.flat(Infinity));
//20.itersection of two array
var string20 = [1, 2, 3];
var string21 = [2, 3, 4];
console.log("20. Itersection of two array: ", string20.filter(function (x) { return string21.includes(x); }));
//21.merege two array
var string22 = [1, 2];
var string23 = [3, 4];
console.log("21. Merege two array: ", string22.concat(string23));
//22. falsy value find in array
var string24 = [
    0,
    1,
    false,
    2,
    "",
    3,
];
console.log("22. falsy value in array: ", string24.filter(function (x) { return !x; }));
//23.sum of even number in array
var string25 = [1, 2, 3, 4, 5, 6];
console.log("23. Sum of even number in array: ", string25.filter(function (num) { return num % 2 === 0; }).reduce(function (x, y) { return x + y; }));
//24.title uppercase string
var string26 = "i am a developer";
console.log("24. Title uppercase string: ", string26.toUpperCase());
//25.count the number of words in the string
var string27 = "This is a test string";
console.log("25. Count the number of words in the string: ", string27.split(" ").length);
//26.check if the array contain number
var arrCheck = [1, 2, 3, 4];
console.log("26. Check array contain number: ", arrCheck.includes(2));
//27.find duplicate in array
var string28 = [1, 2, 2, 3, 3, 3, 4];
console.log("27. Duplicate in array: ", Array.from(new Set(string28)));
//28.remove empty strings from the array
var string29 = ["a", "", "b", "", "c"];
console.log("28. Remove empty strings from the array: ", string29.filter(function (x) { return x !== ""; }));
//29.chunk aray 2 size
var string30 = [1, 2, 3, 4, 5];
var cunkArray = [];
var size = 2;
for (var i = 0; i < string30.length; i += size) {
    cunkArray.push(string30.slice(i, i + size));
}
console.log("29. Chunk aray 2 size: ", cunkArray);
//30.missing number in array
var numberArr = [1, 2, 4, 5];
var minNum = Math.min.apply(Math, numberArr);
var maxNum = Math.max.apply(Math, numberArr);
var missing = [];
for (var i = minNum; i <= maxNum; i++) {
    if (!numberArr.includes(i)) {
        missing.push(i);
    }
}
console.log("30. Missing number array: ", missing);
//31.swap a and b value
var _c = [5, 10], a = _c[0], b = _c[1];
console.log("31. Swap : ", (_a = [b, a], a = _a[0], b = _a[1], _a));
//32.fectorial number of count 5
var num1 = 5;
var fact = 1;
for (var i = 1; i <= num1; i++) {
    fact *= i;
}
console.log("32. Fectorial: " + fact);
//33.Fibonacci series
var numb2 = 5, series = [0, 1];
for (var i = 2; i < numb2; i++) {
    series[i] = series[i - 1] + series[i - 2];
}
console.log("33. Fibonacci: ", series.slice(0, numb2));
//34.count the number of digit
var num3 = 12345;
console.log("34. Count the number of digit: ", num3.toString().length);
//35.reverse digit number
var num4 = 12345;
console.log("35. Reverse digit number: ", num4.toString().split("").reverse().join(""));
//36.Sum of digit number
var num5 = 123654, summation = 0, digit;
while (num5 > 0) {
    digit = num5 % 10;
    summation = summation + digit;
    num5 = Math.floor(num5 / 10);
}
console.log("36. Sum of digit number: " + summation);
//37.check prime number
var num6 = 7;
console.log(num6 % 2 === 0 ? "37. Prime " : "37. Not Prime ");
//38.GCD find
var GCD = function (a, b) { return (b === 0 ? a : GCD(b, a % b)); };
var a1 = 12, b1 = 18;
console.log("38. GCD: ", GCD(a1, b1));
//39.LCM find
var GCD1 = function (a, b) { return (b === 0 ? a : GCD1(b, a % b)); };
var a2 = 4, b2 = 5;
var lcm = (a2 * b2) / GCD1(a2, b2);
console.log("39. LCM:", lcm);
//40.check armstrong number
var num7 = 153, summa = 0, temp = num7;
while (temp > 0) {
    var digit1 = temp % 10;
    summa += Math.pow(digit1, 3);
    temp = Math.floor(temp / 10);
}
console.log(summa === num7 ? "40. Armstrong" : "40. Not Armstrong");
//41.capitalize the first letter of each word in (alternative approach)
var str1 = "hello world";
console.log("41. Capital first letter of each word: " +
    str1.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
//42.convert the number binary representation
var bnum = 10;
console.log("42. Binary represent: ", bnum.toString(2));
//43. flatten a nested array
var arraFlate = [
    1,
    [2, [3, [4]]],
];
console.log("43. Flatten array: ", arraFlate.flat(Infinity));
//44.replace all instance of
var reStri = "banana";
console.log("44. Replace all of string: ", reStri.replace(/a/g, "@"));
//45.Count vowels in the string
var ts = "Typescript";
console.log("45. Count vowels : ", ts.match(/[aeiou]/gi).join("").length);
//46.Get unique character in string
var str = "hello";
console.log("46. Unique character in string: ", Array.from(new Set(str)).join(""));
//47.strings "listen" and "silent" are anagrams (alternative approach)
var isAnagramQuick = function (a, b) {
    return a.length === b.length && Array.from(a).every(function (ch) { return b.includes(ch); });
};
console.log("47. Anagrams:", isAnagramQuick("listen", "silent"));
//48. Range of number
var start = 1, end = 5, range = [];
for (var i = start; i <= end; i++) {
    range.push(i);
}
console.log("48. Range of number: ", range);
//49.duplicate remove from array
var duarra = [1, 2, 2, 3, 3];
console.log("49. Duplicate remove from array: ", Array.from(new Set(duarra)));
//50.convert array to object
var ab = [
    ["a", 1],
    ["b", 2],
];
console.log("50. Convert array to object: ", Object.fromEntries(ab));
