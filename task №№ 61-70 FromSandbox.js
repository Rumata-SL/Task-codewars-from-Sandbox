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

// Task № 64 8 kyu---------------------------
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
