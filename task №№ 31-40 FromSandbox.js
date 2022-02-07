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
