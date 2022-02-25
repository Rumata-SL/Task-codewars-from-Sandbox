"use strict";
// Task № 101 7 kyu---------------------------
// Round up to the next multiple of 5
/*
      Given an integer as input, can you round it
      to the next (meaning, "higher") multiple of 5? 
*/
/*
      Учитывая целое число в качестве входных данных,
      можете ли вы округлить его до следующего (то есть «большего») 
      числа, кратного 5? 
 */
/* 
function roundToNext5(n) {
      return Math.ceil(n / 5) * 5;
}
 */
// Task № 102 7 kyu---------------------------
// Remove anchor from URL
/*
      Complete the function/method so that it returns the
      url with anything after the anchor (#) removed.
      Examples
      "www.codewars.com#about" --> "www.codewars.com"
      "www.codewars.com?page=1" -->"www.codewars.com?page=1" 
*/
/*
      Завершите функцию/метод, чтобы он возвращал 
      URL-адрес с чем-либо после #удаления привязки ( ).
      Примеры
      "www.codewars.com#about" --> "www.codewars.com"
      "www.codewars.com?page=1" -->"www.codewars.com?page=1" 
*/
/* 
function removeUrlAnchor(url) {
      return url.split('#')[0];
}
 */
// Task № 103 7 kyu---------------------------
// String ends with?
/*
      Complete the solution so that it returns true if the first
      argument(string) passed in ends with the 2nd argument (also a string).
      Examples:
      solution('abc', 'bc') // returns true
      solution('abc', 'd') // returns false 
*/
/*
      Завершите решение так, чтобы оно возвращало true,
      если первый переданный аргумент (строка) 
      заканчивается вторым аргументом (тоже строкой).
      Примеры:
      solution('abc', 'bc') // returns true
      solution('abc', 'd') // returns false 
*/
/* 
function solution(str, ending) {
      return str.endsWith(ending);
}
 */
// Task № 104 8 kyu---------------------------
// What is between?
/*
      Complete the function that takes two integers (a, b, where a < b)
      and return an array of all integers between the input parameters, including them. 
*/
/*
      Завершите функцию, которая принимает два целых числа ( a, b, где a < b)
      и верните массив всех целых чисел между входными параметрами, включая их.
*/
/* 
function between(a, b) {
      let arr = [];
      for(let i = a; i <= b; i++){
            arr.push(i);
      }
      return arr;
}
 */

// Task № 105 6 kyu---------------------------
// Sort the odd
/*
      You will be given an array of numbers.
      You have to sort the odd numbers in ascending 
      order while leaving the even numbers at their original positions. 
*/
/* 
      Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях. 
*/
/* 
function sortArray(array) {
      let arr = array
            .filter((num) => num % 2)
            .sort((pref, next) => pref - next);
      return array.map((el) => (el % 2 ? arr.shift() : el));
}
 */
// Task № 106 7 kyu---------------------------
// Find the middle element
/*
      As a part of this Kata, you need to create a function
      that when provided with a triplet, returns the index 
      of the numerical element that lies between the other two elements.
      The input to the function will be an array of three
      distinct numbers (Haskell: a tuple). 
 */
/*
      В рамках этой Ката вам нужно создать функцию, 
      которая при наличии триплета возвращает индекс 
      числового элемента, лежащего между двумя другими элементами.
      Входными данными для функции будет массив 
      из трех различных чисел (Haskell: кортеж). 
*/
/* 
function gimme(triplet) {
      let arr = [...triplet];
      triplet.sort((a, b) => b - a);
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] == triplet[1]) {
                  return i;
            }
      }
}
 */
// Task № 107 8 kyu---------------------------
// 5 without numbers !!
/*
      Write a function that always returns 5
      Sounds easy right? Just bear in mind that 
      you can't use any of the following characters: 0123456789*+-/ 
*/
/*
      Напишите функцию, которая всегда возвращает5
      Звучит легко, верно? Просто имейте в виду, 
      что вы не можете использовать ни один из следующих символов:0123456789*+-/ 
*/
/* 
function unusualFive() {
      let str = "Hello";
      return str.length;
}
 */
// Task № 108 8 kyu---------------------------
// Grade book
/*
      Complete the function so that it finds the average
      of the three scores passed to it and returns the
      letter value associated with that grade.
      Numerical Score	Letter Grade
      90 <= score <= 100	'A'
      80 <= score < 90	'B'
      70 <= score < 80	'C'
      60 <= score < 70	'D'
      0 <= score < 60	'F' 
*/
/*
      Завершите функцию, чтобы она нашла среднее 
      значение трех переданных ей баллов и вернула
      буквенное значение, связанное с этой оценкой.
      Числовая оценка	Письмо Оценка
      90 <= оценка <= 100	«А»
      80 <= оценка < 90	'Б'
      70 <= оценка < 80	'С'
      60 <= оценка < 70	'Д'
      0 <= оценка < 60	'Ф'
*/
/* 
function getGrade(s1, s2, s3) {
      let sum = (s1 + s2 + s3) / 3;
      return sum >= 0 && sum < 60
            ? "F"
            : sum >= 60 && sum < 70
            ? "D"
            : sum >= 70 && sum < 80
            ? "C"
            : sum >= 80 && sum < 90
            ? "B"
            : "A";
}
 */
// Task № 109 8 kyu---------------------------
// Reversed sequence
/*
      Build a function that returns an array
      of integers from n to 1 where n>0.
      Example : n=5 --> [5,4,3,2,1]
*/
/*
      Создайте функцию, которая возвращает 
      массив целых чисел от n до 1, где n>0.
      Пример: n=5-->[5,4,3,2,1] 
*/
/* 
const reverseSeq = (n) => {
      let arr = [];
      for (let i = n; i >= 1; i--) {
            arr.push(i);
      }
      return arr;
};
 */
