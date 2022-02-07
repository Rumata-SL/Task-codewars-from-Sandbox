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
