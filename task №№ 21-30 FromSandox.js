"use strict";
// Task № 21 8 kyu---------------------------
// Remove First and Last Character
/*
      It's pretty straightforward. Your goal is
      to create a function that removes the first 
      and last characters of a string. You're
      given one parameter, the original string.
      You don't 
      have to worry with strings with less than two characters. 
*/
/*
      Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и 
      последний символы строки. Вам дан один параметр, 
      исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов. 
*/
/* 
function removeChar(str) {
      let arr = str.split("");
      arr.shift();
      arr.pop();
      arr = arr.join("");
      return arr;
}
*/
// Task № 22 7 kyu---------------------------
// Odd or Even?
/*
      Given a list of integers, determine whether the 
      sum of its elements is odd or even.
      Give your answer as a string matching "odd" or "even".
      If the input array is empty consider it as:
      [0] (array with a zero). 
 */
/*
      Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.
      Дайте ответ в виде сопоставления строк "odd"или "even".
      Если входной массив пуст, рассматривайте его как: [0](массив с нулем). 
*/
/* 
function oddOrEven(array) {
      if (array.length == 0) {
            return "even";
      }
      let sum = array.reduce((acc, current) => {
            return acc + current;
      });
      return sum % 2 == 0 ? "even" : "odd";
}
*/

// Task № 23 7 kyu---------------------------
// List Filtering
/*
      In this kata you will create a function that
      takes a list of non-negative integers and 
      strings and returns a new list with the 
      strings filtered out. 
 */
/*
      В этом ката вы создадите функцию, которая
      берет список неотрицательных целых чисел и
      строк и возвращает новый список с 
      отфильтрованными строками. 
*/
/* 
function filterList(l) {
      let arr = [];
      l.forEach((element) => {
            if (typeof element === "number") {
                  arr.push(element);
            }
      });
      return arr;
}
 */

// Task № 24 8 kyu---------------------------
// Sum of positive
/*
      You get an array of numbers, return the sum
      of all of the positives ones.
      Example [1,-4,7,12] => 1 + 7 + 12 = 20
      Note: if there is nothing to sum, the sum is
      default to 0. 
 */
/*
      Вы получаете массив чисел, возвращаете сумму 
      всех положительных.
      Пример [1,-4,7,12]=>1 + 7 + 12 = 20
      Примечание: если суммировать нечего,
      сумма по умолчанию равна 0. 
 */
/* 
function positiveSum(arr) {
      if (arr.length == 0) {
            return 0;
      }
      let sum = 0;
      arr.forEach((element) => {
            if (element > 0) {
                  sum += element;
            }
      });
      return sum;
}
 */
