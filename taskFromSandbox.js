"use strict";
// Task № 1 8 kyu---------------------------
/* 
      Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

      Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
 */
/* 
function digitize(n) {
      n = n + "";
      n = n.split("").reverse();
      for (let i = 0; i < n.length; i++) {
            n[i] = +n[i];
      }
      return n;
}
 */

// Task № 2 7 kyu---------------------------
/*
      Implement a function that accepts 3 integer values a, b, c.
      The function should return true if a triangle can be built 
      with the sides of given length and false in any other case. 
 */
/*
      Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция 
      должна возвращать true, если можно
      построить треугольник со сторонами заданной длины, и false в любом другом случае. 
 */
/*
function isTriangle(a, b, c) {
      let arr = [a, b, c];
      arr = arr.sort((a, b) => a - b);
      if (arr[0] + arr[1] > arr[2]) {
            return true;
      }
      return false;
}
 */

// Task № 3 7 kyu---------------------------

/* 
      Given an array of ones and zeroes, convert the equivalent binary value to an integer.
      Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/
/* 
      Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
      Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1. 
*/

/* 
const binaryArrayToNumber = (arr) => {
      arr = arr.join("");
      arr = parseInt(arr, 2);

      return arr;
};
console.log(binaryArrayToNumber([0, 1, 1, 0]));
 */

// Task № 4 7 kyu---------------------------
/* 
      Your task is to make a function that can take
      any non-negative integer as an argument and 
      return it with its digits in descending order.
      Essentially, rearrange the digits to create the
      highest possible number.
      Examples:
      Input: 42145 Output: 54421
 */
/* 
      Ваша задача состоит в том, чтобы создать функцию,
      которая может принимать любое неотрицательное целое
      число в качестве аргумента и возвращать его с 
      цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.
      Примеры:
      Вход: 42145 Выход:54421 
*/
/* 
function descendingOrder(n) {
      n = n + "";
      n = n
            .split("")
            .sort((b, a) => a - b)
            .join("");
      return +n;
}
console.log(descendingOrder(412356789));
 */
