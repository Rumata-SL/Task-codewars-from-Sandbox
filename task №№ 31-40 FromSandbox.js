"use strict";

// Task № 31 7 kyu---------------------------
// Isograms
/*
      An isogram is a word that has no repeating letters,
      consecutive or non-consecutive. Implement a 
      function that determines whether a string that 
      contains only letters is an isogram. Assume the 
      empty string is an isogram. Ignore letter case.
      Example: (Input --> Output)
      "Dermatoglyphics" --> true
      "aba" --> false
 */
/*
      Изограмма — это слово, в котором нет повторяющихся 
      букв, последовательных или непоследовательных.
      Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим,
      что пустая строка является изограммой. Игнорировать
      регистр букв.
      Пример: (Ввод --> Вывод)
      "Dermatoglyphics" --> true
      "aba" --> false
*/
/* 
function isIsogram(str) {
      str = str.toLowerCase();
      for (let i = 0; i < str.length; ++i) {
            for (let j = i + 1; j < str.length; ++j) {
                  if (str[i] === str[j]) {
                        return false;
                  }
            }
      }
      return true;
} */

// Task № 32 8 kyu---------------------------
// MakeUpperCase
/*
      Write a function which converts the input
      string to uppercase. 
*/
/*
      Напишите функцию, которая преобразует входную
      строку в верхний регистр. 
*/

/* function makeUpperCase(str) {
      str = str.toUpperCase();
      return str;
}
*/

// Task № 33 8 kyu---------------------------
// String repeat
/*
Write a function called repeatStr which 
repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII" 
*/
/*
Напишите вызываемую функцию, repeatStrкоторая 
повторяет заданную строку stringточное количество n раз.
repeatStr(6, "I") // "IIIIII" 
*/
/* function repeatStr(n, s) {
      return s.repeat(n);
} */
// Task № 34 8 kyu---------------------------
// Fake Binary
/* 
      Given a string of digits, you should replace 
      any digit below 5 with '0' and any digit 5 and
      above with '1'. Return the resulting string.
*/
/*
      Учитывая строку цифр, вы должны заменить любую
      цифру ниже 5 на «0», а любую цифру 5 и выше на «1».
      Верните полученную строку. 
*/
/* 
function fakeBin(x) {
      let array = [];
      x = x.split("");
      for (let i = 0; i < x.length; i++) {
            if (+x[i] < 5) {
                  array.push(0);
            } else if (+x[i] >= +5) {
                  array.push(1);
            }
      }
      array = array.join("");
      return array;
} 
*/
// Task № 35 8 kyu---------------------------
// Simple multiplication
/*
      This kata is about multiplying a given number by 
      eight if it is an even number and by nine otherwise. 
 */
/* 
      Это ката об умножении заданного числа на восемь,
      если оно четное, и на девять в противном случае.
 */
/* 
function simpleMultiplication(number) {
      return number % 2 ? number * 9 : number * 8;
}
 */

// Task № 36 8 kyu---------------------------
// Reversed Strings
/*
Complete the solution so that it reverses
the string passed into it.
*/
/*
Завершите решение так, чтобы оно перевернуло
переданную в него строку. 
*/
/* 
function solution(str) {
      str = str.split("").reverse().join("");
      return str;
} */
// Task № 37 8 kyu---------------------------
// Remove String Spaces
/*
Simple, remove the spaces from the string,
then return the resultant string. 
*/
/*
Просто удалите пробелы из строки,
затем верните результирующую строку.
*/
/* 
function noSpace(x) {
      return x.split(" ").join("");
} */
// Task № 38 8 kyu---------------------------
// Opposites Attract
/*
      Timmy & Sarah think they are in love, but around 
      where they live, they will only know once they pick a
      flower each. If one of the flowers has an even number of 
      petals and the other has an odd number of petals it means
      they are in love.
      Write a function that will take the number of petals of each flower and return true if they are in love and 
      false if they aren't. 
*/
/*
      Тимми и Сара думают, что они влюблены, но там, где 
      они живут, они узнают об этом, только когда каждый
      сорвет 
      по цветку. Если у одного из цветов четное количество лепестков, а у другого нечетное количество 
      лепестков, это означает, что они влюблены.
      Напишите функцию, которая будет принимать
      количество лепестков каждого цветка и возвращать
      true, если они влюблены, и false, если нет. 
*/
/* 
function lovefunc(flower1, flower2) {
      if (
            (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
            (flower1 % 2 !== 0 && flower2 % 2 === 0)
      ) {
            return true;
      } else {
            return false;
      }
} */
// Task № 39 8 kyu---------------------------
// Beginner Series #1 School Paperwork
/*
      Your classmates asked you to copy some paperwork for them.
      You know that there are 'n' classmates and the paperwork
      has 'm' pages.
      Your task is to calculate how many blank pages do you need.
      If n < 0 or m < 0 return 0. 
*/
/*
      Ваши одноклассники попросили вас скопировать для 
      них некоторые документы. Вы знаете, что есть «n» одноклассников, а в документах «m» страниц.
      Ваша задача — посчитать, сколько чистых страниц 
      вам нужно. Если n < 0или m < 0вернуться 0.
 */
/* 
function paperwork(n, m) {
      return n < 0 || m < 0 ? 0 : n * m;
}
 */
// Task № 40 8 kyu---------------------------
// Sum without highest and lowest number
/*
      Sum all the numbers of a given array ( cq. list ),
      except the highest and the lowest element ( by value,
      not by index! ).
      The highest or lowest element respectively is a
      single element at each edge, even if there are
      more than one with the same value.
      Mind the input validation. 
*/
/*
      Суммируйте все числа заданного массива (cq. list)
      , кроме самого высокого и самого низкого элемента
      (по значению, а не по индексу!).
      Самый высокий или самый низкий элемент,
      соответственно, является одним элементом
      на каждом ребре, даже если их несколько с
      одинаковым значением.
      Помните о проверке ввода. 
*/
/* 
function sumArray(array) {
      if (array == null || array.length < 2) {
            return 0;
      } else {
            let result = 0;
            array.sort(function (a, b) {
                  return a - b;
            });
            for (let i = 1; i < array.length - 1; i++) {
                  result += array[i];
            }
            return result;
      }
}
 */
