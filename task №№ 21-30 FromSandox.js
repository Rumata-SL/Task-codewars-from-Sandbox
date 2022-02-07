"use strict";
// Task № 21 8 kyu---------------------------
// Remove First and Last Character
/*
      It's pretty straightforward. Your goal is
      to create a function that removes the first 
      and last characters of a string. You're
      given one parameter, the original string.
      You don't 
      have to worry with strings with less than two characters. 
*/
/*
      Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и 
      последний символы строки. Вам дан один параметр, 
      исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов. 
*/
/* 
function removeChar(str) {
      let arr = str.split("");
      arr.shift();
      arr.pop();
      arr = arr.join("");
      return arr;
}
*/
// Task № 22 7 kyu---------------------------
// Odd or Even?
/*
      Given a list of integers, determine whether the 
      sum of its elements is odd or even.
      Give your answer as a string matching "odd" or "even".
      If the input array is empty consider it as:
      [0] (array with a zero). 
 */
/*
      Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.
      Дайте ответ в виде сопоставления строк "odd"или "even".
      Если входной массив пуст, рассматривайте его как: [0](массив с нулем). 
*/
/* 
function oddOrEven(array) {
      if (array.length == 0) {
            return "even";
      }
      let sum = array.reduce((acc, current) => {
            return acc + current;
      });
      return sum % 2 == 0 ? "even" : "odd";
}
*/

// Task № 23 7 kyu---------------------------
// List Filtering
/*
      In this kata you will create a function that
      takes a list of non-negative integers and 
      strings and returns a new list with the 
      strings filtered out. 
 */
/*
      В этом ката вы создадите функцию, которая
      берет список неотрицательных целых чисел и
      строк и возвращает новый список с 
      отфильтрованными строками. 
*/
/* 
function filterList(l) {
      let arr = [];
      l.forEach((element) => {
            if (typeof element === "number") {
                  arr.push(element);
            }
      });
      return arr;
}
 */

// Task № 24 8 kyu---------------------------
// Sum of positive
/*
      You get an array of numbers, return the sum
      of all of the positives ones.
      Example [1,-4,7,12] => 1 + 7 + 12 = 20
      Note: if there is nothing to sum, the sum is
      default to 0. 
 */
/*
      Вы получаете массив чисел, возвращаете сумму 
      всех положительных.
      Пример [1,-4,7,12]=>1 + 7 + 12 = 20
      Примечание: если суммировать нечего,
      сумма по умолчанию равна 0. 
 */
/* 
function positiveSum(arr) {
      if (arr.length == 0) {
            return 0;
      }
      let sum = 0;
      arr.forEach((element) => {
            if (element > 0) {
                  sum += element;
            }
      });
      return sum;
}
 */

// Task № 25 8 kyu---------------------------
// Convert a String to a Number!
/*
      We need a function that can transform a 
      string into a number. What ways of achieving 
      this do you know? 
 */
/*
      Нам нужна функция, которая может преобразовать
      строку в число. Какие способы достижения 
      этого вы знаете? 
  */
/* 
const stringToNumber = function (str) {
      return +str;
};
 */

// Task № 26 8 kyu---------------------------
// Convert a Boolean to a String
/*
      Implement a function which convert
      the given boolean value into its string 
      representation. 
*/
/*
      Реализуйте функцию, которая преобразует данное логическое значение в его строковое представление. 
*/
/* 
function booleanToString(b) {
      return b + "";
}
 */

// Task № 27 8 kyu---------------------------
// Will you make it?
/*
      You were camping with your friends far away from 
      home, but when it's time to go back, you realize
      that your fuel is running out and the nearest 
      pump is 50 miles away! You know that on average
      your car runs on about 25 miles per gallon.
      There are 2 gallons left. Considering these
      factors, write a function that tells you
      if it is possible to get to the pump or not. Function should return true (1 in Prolog
      and NASM) if it is possible and
      false (0 in Prolog and NASM) if not.
      The input values are always positive. 
*/
/*
      Вы были в походе с друзьями далеко от дома,
      но когда пришло время возвращаться, вы понимаете,
      что топливо на исходе, а ближайшая заправка
      50далеко! Вы знаете, что в среднем ваш автомобиль расходует около 25миль на галлон. Остаются
      2галлоны. Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до
      насоса или нет. Функция должна возвращать true
      ( 1в Прологе и NASM), если это возможно, 
      и false( 0в Прологе и NASM), если нет. Входные значения всегда положительны. 
*/
/* 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
      return fuelLeft * mpg >= distanceToPump;
};
 */
// Task № 28 8 kyu---------------------------
// Is he gonna survive?
/*
      A hero is on his way to the castle to complete
      his mission. However, he's been told that the 
      castle is surrounded with a couple of powerful
      dragons! each dragon takes 2 bullets to be defeated,
      our hero has no idea how many bullets he should carry..
      Assuming he's gonna grab a specific given number of bullets
      and move forward to fight another specific given number of 
      dragons, will he survive? 
*/
/*
      Герой направляется в замок, чтобы выполнить свою миссию.
      Однако ему сказали, что замок окружен парочкой 
      могущественных драконов! каждому дракону требуется 2 пули,
      чтобы быть побежденным, наш герой понятия не имеет, 
      сколько пуль он должен нести.. Предполагая, что он 
      собирается схватить определенное количество пуль и 
      двигаться вперед, чтобы сразиться с другим заданным
      количеством драконов, выживет ли он? 
 */
/* 
function hero(bullets, dragons) {
      return bullets / dragons >= 2;
}
 */

// Task № 29 6 kyu---------------------------
//Break camelCase
/*
      Complete the solution so that the function will break up camel casing, using a space between words.
      Example
      "camelCasing"  =>  "camel Casing"
      "identifier"   =>  "identifier" 
 */
/*
      Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.
      Пример
      "camelCasing"  =>  "camel Casing"
      "identifier"   =>  "identifier"  
*/
/* 
function solution(string) {
      return string.split(/(?=[A-Z])/).join(" ");
}
 */
