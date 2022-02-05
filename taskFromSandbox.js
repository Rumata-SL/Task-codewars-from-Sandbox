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
