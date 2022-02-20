"use strict";

// Task № 61 8 kyu---------------------------
// Function 1 - hello world
/*
      Make a simple function called greet that
      returns the most-famous "hello world!".
 */
/*
      Создайте простую функцию с именем приветствие ,
      которая возвращает самое известное «привет, мир!». 
*/
/* 
const greet = () => "hello world!";
 */

// Task № 62 8 kyu---------------------------
// Highest and Lowest
/*
      In this little assignment you are given a string of
      space separated numbers, and have to return the 
      highest and lowest number. 
 */
/*
      В этом небольшом задании вам дается строка чисел,
      разделенных пробелами, и вы должны вернуть
      наибольшее и наименьшее число. 
 */
function highAndLow(numbers) {
      numbers = numbers.split(" ");
      return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
