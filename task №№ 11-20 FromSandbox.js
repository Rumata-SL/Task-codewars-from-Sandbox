"use strict";
// Task № 11 8 kyu---------------------------
// Convert boolean values to strings 'Yes' or 'No'.
/*
      Complete the method that takes a boolean value
      and return a "Yes" string for true,
      or a "No" string for false.  
*/
/*
      Завершите метод, который принимает логическое значение
      и возвращает "Yes"строку для true,
      или "No"строку для false. 
*/
/* 
function boolToWord(bool) {
      return bool ? "Yes" : "No";
}
 */

// Task № 12 7 kyu---------------------------
// Sum of two lowest positive integers
/*
      Create a function that returns the sum of the two
      lowest positive numbers given an array of minimum
      4 positive integers. No floats or non-positive
      integers will be passed.
      For example, when an array is passed like [19, 5, 42, 2, 77],
      the output should be 7  
*/
/*
      Создайте функцию, которая возвращает сумму двух
      наименьших положительных чисел для заданного 
      массива минимум из 4 положительных целых чисел.
      Не будут переданы числа с плавающей запятой или
      неположительные целые числа.
      Например, когда массив передается как [19, 5, 42, 2, 77],
      вывод должен быть 7.  
*/
/* 
function sumTwoSmallestNumbers(numbers) {  
      numbers.sort((a, b) => a-b);
      return numbers[0] + numbers[1];
}
 */

// Task № 13 8 kyu---------------------------
// Even or Odd
/*
      Create a function that takes an integer as an
      argument and returns "Even" for even numbers
      or "Odd" for odd numbers.  
  */
/*
      Создайте функцию, которая принимает целое число
      в качестве аргумента и возвращает «Четное» для
      четных чисел или «Нечетное» для нечетных чисел. 
*/
/* 
function even_or_odd(number) {
      return number % 2 ? "Odd" : "Even";
}
 */
// Task № 14 8 kyu---------------------------
// Basic Mathematical Operations
/*
      Your task is to create a function that does four
      basic mathematical operations.
      The function should take three arguments -
      operation(string/char), value1(number),
      value2(number).
      The function should return result of numbers 
      after applying the chosen operation. 
*/
/*
      Ваша задача — создать функцию, которая выполняет
      четыре основные математические операции.
      Функция должна принимать три аргумента - 
      операция(строка/символ), значение1(число),
      значение2(число).
      Функция должна возвращать числовой результат
      после применения выбранной операции. 
*/
/* 
function basicOp(operation, value1, value2) {
      if(operation === "+"){
            return value1 + value2;
      }else if(operation === "-"){
            return value1 - value2;
      }else if(operation === "*"){
            return value1 * value2;
      }else if(operation === "/"){
            return value1 / value2;
      }
}
 */

// Task № 15 8 kyu---------------------------
// Calculate average
/*
      Write a function which calculates the average
      of the numbers in a given list.
      Note: Empty arrays should return 0. 
*/
/*
      Напишите функцию, которая вычисляет среднее
      значение чисел в заданном списке.
      Примечание. Пустые массивы должны возвращать 0.
*/
/* 
function findAverage(array) {
      let sum = 0;
      if (array.length) {
            for (let i = 0; i < array.length; i++) {
                  sum += array[i];
            }
            return sum / array.length;
      }
      return 0;
}
 */
// Task № 16 7 kyu---------------------------
// Jaden Casing Strings
/*
      Your task is to convert strings to how they would
      be written by Jaden Smith. The strings are actual
      quotes from Jaden Smith, but they are not capitalized
      in the same way he originally typed them.
      Example:
      Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
      Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" 
 */
/*
      Ваша задача состоит в том, чтобы преобразовать строки в то,
      как они были бы написаны Джейденом Смитом.
      Строки являются настоящими цитатами Джейдена Смита,
      но они не написаны с заглавной буквы так,
      как он их изначально напечатал.
      Пример:
      Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
      Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" 
*/
/* 
String.prototype.toJadenCase = function () {
      return this.split(" ")
            .map((str) => {
                  return str.charAt(0).toUpperCase() + str.slice(1);
            })
            .join(" ");
};
 */
// Task № 17 8 kyu---------------------------
// A Needle in the Haystack
/*
      Can you find the needle in the haystack?
      Write a function findNeedle() that takes 
      an array full of junk but containing one "needle"
      After your function finds the needle it should 
      return a message (as a string) that says:
      "found the needle at position " plus the 
      index it found the 
*/
/*
      Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"
      После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
      "found the needle at position "плюс indexон нашел иглу 
*/
/* 
function findNeedle(haystack) {
      for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === "needle") {
                  return `found the needle at position ${i}`;
            }
      }
}
 */

// Task № 18 8 kyu---------------------------
// Invert values
/*
      Given a set of numbers, return the additive
      inverse of each. Each positive becomes 
      negatives, and the negatives become positives.
      invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5] 
*/
/*
      Учитывая набор чисел, верните добавку,
      обратную каждому из них. Каждое положительное
      становится отрицательным, а отрицательное
      становится положительным.
      invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]  
*/
/* 
function invert(array) {
      if (array.length === 0) {
            return array;
      }

      let arr = array.map((item) => {
            return item * -1;
      });
      return arr;
}
 */

// Task № 19 8 kyu---------------------------
// Century From Year
/*
      The first century spans from the year 1 up 
      to and including the year 100, the second
      century - from the year 101 up to and
      including the year 200, etc.
      Task
      Given a year, return the century it is in. 
 */
/*
      Первое столетие охватывает период с 1 года
      по 100 год включительно , второе столетие
      — с 101 года по 200 год включительно и т. д.
      Задача
      Учитывая год, верните столетие, в котором он находится.
*/
/* 
function century(year) {
      return Math.ceil(year / 100);
}
 */

// Task № 20 7 kyu---------------------------
// Remove the minimum
/*
      Given an array of integers, remove the smallest value.
      Do not mutate the original array/list.
      If there are multiple elements with the same value,
      remove the one with a lower index. If you get an empty 
      array/list, return an empty array/list.
      Don't change the order of the elements that are left.
*/
/*
      Учитывая массив целых чисел, удалите наименьшее значение.
      Не изменяйте исходный массив/список . Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. Если вы получили пустой массив/список, верните пустой массив/список.
      Не меняйте порядок оставшихся элементов. 
*/
/* 
function removeSmallest(numbers) {
      let minItem = numbers.indexOf(Math.min(...numbers));
      let arr = [...numbers];
      arr.splice(minItem, 1);
      return arr;
} */
