"use strict";

// Task № 71 8 kyu---------------------------
// Find the smallest integer in the array

/*
      Given an array of integers your solution should find the smallest integer.
      For example:
      Given [34, 15, 88, 2] your solution will return 2
      Given [34, -345, -1, 100] your solution will return -345 
 */
/*
      Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
      Например:
      Учитывая [34, 15, 88, 2], что ваше решение вернется2
      Учитывая [34, -345, -1, 100], что ваше решение вернется-345
*/
/* 
class SmallestIntegerFinder {
      findSmallestInt(args) {
            return Math.min(...args);
      }
}
 */

// Task № 72 8 kyu---------------------------
// Area or Perimeter
/*
      You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
      If it is a square, return its area. If it is a rectangle, return its perimeter.
      area_or_perimeter(6, 10) --> 32
      area_or_perimeter(3, 3) --> 9 
*/
/*
      Вам даны lengthи widthчетырехугольника. Многоугольник может быть прямоугольным или квадратным.
      Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.
      area_or_perimeter(6, 10) --> 32
      area_or_perimeter(3, 3) --> 9 
*/
/* 
const areaOrPerimeter = function (l, w) {
      return l === w ? l * w : l * 2 + w * 2;
};
 */

// Task № 73 8 kyu---------------------------
// Sum The Strings
/*
      Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
      Example: (Input1, Input2 -->Output)
      "4",  "5" --> "9"
      "34", "5" --> "39"
      "", "" --> "0"
      "2", "" --> "2"
      "-5", "3" --> "-2" 
*/
/*
      Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки):
      Пример: ( Ввод1, Ввод2 -->Вывод )
      "4",  "5" --> "9"
      "34", "5" --> "39"
      "", "" --> "0"
      "2", "" --> "2"
      "-5", "3" --> "-2" 
*/
/* 
function sumStr(a, b) {
      let sum = +a + +b;
      return sum + "";
}
 */
// Task № 74 7 kyu---------------------------
// Testing 1-2-3
/*
      Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
      Write a function which takes a list of strings and returns each line prepended by the correct number.
      The numbering starts at 1. The format is n: string. Notice the colon and space in between. 
*/
/*
      Ваша команда пишет новый модный текстовый редактор, и вам поручили внедрить нумерацию строк.
      Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным номером перед ним.
      Нумерация начинается с 1. Формат n: string. Обратите внимание на двоеточие и пробел между ними.
*/

const number = function (array) {
      return array.map((item, i) => {
            return `${i + 1}: ${item}`;
      });
};
