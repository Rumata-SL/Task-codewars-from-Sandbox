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
