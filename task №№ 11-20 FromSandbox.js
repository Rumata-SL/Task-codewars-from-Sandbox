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
