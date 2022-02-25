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
