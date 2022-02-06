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