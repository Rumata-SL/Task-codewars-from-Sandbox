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

// Task № 62 7 kyu---------------------------
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
/* 
function highAndLow(numbers) {
      numbers = numbers.split(" ");
      return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
 */

// Task № 63 6 kyu---------------------------
// Tribonacci Sequence

/* 
      Well met with Fibonacci bigger brother, AKA Tribonacci.
      As the name may already reveal, it works basically like
      a Fibonacci, but summing the last 3 (instead of 2) numbers
      of the sequence to generate the next. And, worse part of it,
      regrettably I won't get to hear non-native Italian speakers
      trying to pronounce it :(
      So, if we are to start our Tribonacci sequence with [1, 1, 1] 
      as a starting input (AKA signature), we have this sequence:
      [1, 1 ,1, 3, 5, 9, 17, 31, ...] 
*/
/* 
      Хорошо познакомился со старшим братом Фибоначчи,
      также известным как Трибоначчи.
      Как уже видно из названия, он работает в основном как Фибоначчи,
      но суммирует последние 3 (вместо 2) чисел последовательности для
      генерации следующего. И, что еще хуже, к сожалению, я не услышу,
      как его произносят не носители итальянского языка :(
      Итак, если мы хотим начать нашу последовательность 
      Трибоначчи [1, 1, 1]в качестве начального ввода ( подпись AKA ),
      у нас есть эта последовательность:
      [1, 1 ,1, 3, 5, 9, 17, 31, ...]
      Но что, если мы начали с [0, 0, 1]п 
*/
/* 
function tribonacci(signature, n) {
      let trib = signature;
      for (let i = 3; i < n; i++) {
            trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
      }
      return trib.slice(0, n);
}
 */

// Task № 64 8 kyu---------------------------
// Rock Paper Scissors!
/*
      Let's play! You have to return which player won!
      In case of a draw return Draw!.
      Examples:
      rps('scissors','paper') // Player 1 won!
      rps('scissors','rock') // Player 2 won!
      rps('paper','paper') // Draw! 
*/
/*
      Давайте играть! Вы должны вернуть, какой игрок выиграл!
      В случае ничьей возврат Draw!.
      Примеры:
      rps('scissors','paper') // Player 1 won!
      rps('scissors','rock') // Player 2 won!
      rps('paper','paper') // Draw! 
*/
/*
const rps = (p1, p2) => {
      if (p1 === p2) {
            return `Draw!`;
      }
      let arr = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper",
      };
      if (arr[p1] === p2) {
            return `Player 1 won!`;
      } else {
            return `Player 2 won!`;
      }
}; 
*/

// Task № 65 8 kyu---------------------------
// Thinkful - Logic Drills: Traffic light
/*
      You're writing code to control your town's traffic lights.
      You need a function to handle each change from green,
      to yellow, to red, and then to green again.
      Complete the function that takes a string as 
      an argument representing the current state of 
      the light and returns a string representing 
      the state the light should change to. 
*/
/*
      Вы пишете код для управления светофорами в вашем городе.
      Вам нужна функция для обработки каждого изменения с green,
      на yellow, на red, а затем greenснова на .
      Завершите функцию, которая принимает строку в 
      качестве аргумента, представляющую текущее
      состояние источника света, и возвращает строку,
      представляющую состояние, в которое свет должен измениться. 
  */
/*
function updateLight(current) {
      return current === "yellow"
            ? "red"
            : current === "red"
            ? "green"
            : "yellow";
}
 */
// Task № 66 8 kyu---------------------------
// You Can't Code Under Pressure #1
/* 
      Code as fast as you can! You need to
      double the integer and return it. 
 */
/* 
      Код так быстро, как вы можете!
      Вам нужно удвоить целое число и вернуть его.
*/
/* 
function doubleInteger(i) {
      return (i *= 2);
}
 */

// Task № 67 7 kyu---------------------------
// Vowel Count
/*
      Return the number (count) of vowels in the given string.
      We will consider a, e, i, o, u as vowels for this Kata (but not y).
      The input string will only consist of lower case letters and/or spaces.
 */
/*
      Возвращает количество (количество) гласных в заданной строке.
      Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).
      Входная строка будет состоять только из строчных букв и/или пробелов.
*/
/* 
function getVowels(str) {
      str = str.match(/[aeiou]/gi);
      return str === null ? 0 : str.length;
}
 */
// Task № 68 7 kyu---------------------------
// Make a function that does arithmetic!
/*
      Given two numbers and an arithmetic operator (the name of it, as a string),
      return the result of the two numbers having that operator used on them.
      a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
      The four operators are "add", "subtract", "divide", "multiply".
*/
/*
      Имея два числа и арифметический оператор (его имя в виде строки), верните результат двух чисел, к которым был применен этот оператор.
      aи bоба будут положительными целыми числами, и aвсегда будут первым числом в операции и bвсегда вторым.
      Четыре оператора: «сложить», «вычесть», «делить», «умножить».
*/
/* 
function arithmetic(a, b, operator) {
      let calc = {
            add: a + b,
            subtract: a - b,
            multiply: a * b,
            divide: a / b,
      };
      return calc[operator];
}
 */

// Task № 69 7 kyu---------------------------
// Disemvowel Trolls
/*
      Trolls are attacking your comment section!
      A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
      Your task is to write a function that takes a string and return a new string with all vowels removed.
      For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!". 
*/
/*
      Тролли атакуют ваш раздел комментариев!
      Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
      Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
      Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!». 
*/
function disemvowel(str) {
      return str.replace(/[aeiou]/gi, "");
}
