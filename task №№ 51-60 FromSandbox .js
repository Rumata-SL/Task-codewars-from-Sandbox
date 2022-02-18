"use strict";
// Task № 51 7 kyu---------------------------
// Friend or Foe?
/*
      Make a program that filters a list of strings
      and returns
      a list with only your friends name in it.
      If a name has exactly 4 letters in it, you can
      be sure that it has to be a friend of yours! Otherwise,
      you can be sure he's not...
      Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] 
 */
/* function friend(friends) {
      return friends.filter((item) => item.length === 4);
} */

// Task № 52 7 kyu---------------------------
// Square Every Digit
/* 
Welcome. In this kata, you are asked to square every
digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
/* function squareDigits(num) {
      return +[...(num + "")].map((el) => el * el).join``;
} */

// Task № 53 8 kyu---------------------------
// Beginner - Reduce but Grow
/*
      Given a non-empty array of integers, 
      return the result of multiplying the 
      values together in order. Example:
      [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
 */
/* function grow(x) {
      let sum = 1;
      for (let i = 0; i < x.length; i++) {
            sum *= x[i];
      }
      return sum;
} */
// Task № 54 5 kyu---------------------------
// Rot13
/*
      ROT13 is a simple letter substitution cipher that replaces 
      a letter with the letter 13 letters after it in the alphabet.
      ROT13 is an example of the Caesar cipher.
      Create a function that takes a string and returns the string 
      ciphered with Rot13. If there are numbers or special characters
      included in the string, they should be returned as they are.
      Only letters from the latin/english alphabet should be shifted,
      like in the original Rot13 "implementation". 
 */
/* 
      ROT13 — это простой шифр с заменой букв, который заменяет букву 
      буквой через 13 букв после нее в алфавите. ROT13
      является примером шифра Цезаря.
      Создайте функцию, которая принимает строку и возвращает строку,
      зашифрованную с помощью Rot13. Если в строку включены числа
      или специальные символы, они должны быть возвращены как есть.
      Сдвинуты должны быть только буквы латинского/английского алфавита,
      как в оригинальной "реализации" Rot13.
 */
/* 
function rot13(message) {
      return message.replace(/[a-z]/gi, str => String.fromCharCode(str.charCodeAt(0) + (str.toLowerCase() <= 'm' ? 13 : -13)));
} */
