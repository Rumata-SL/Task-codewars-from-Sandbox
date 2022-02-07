"use strict";
// Task № 41 8 kyu---------------------------
// Sum Arrays
/*
      Write a function that takes an array of numbers 
      and returns the sum of the numbers. The numbers
      can be negative or non-integer. If the array does
      not 
      contain any numbers then you should return 0.
      Examples
      Input: [1, 5.2, 4, 0, -1]
      Output: 9.2 
*/
/* 
      Напишите функцию, которая принимает массив чисел 
      и возвращает сумму чисел. Числа могут быть 
      отрицательными или нецелыми. Если массив не 
      содержит чисел, вы должны вернуть 0.
      Примеры
      Вход: [1, 5.2, 4, 0, -1]
      Выход:9.2
 */
/* 
function sum(numbers) {
      let sum = 0;
      if (numbers.length === 0) {
            return 0;
      }
      numbers.forEach((element) => {
            sum += element;
      });
      return sum;
} 
*/

// Task № 42 8 kyu---------------------------
// Calculate BMI
/*
      Write function bmi that calculates body mass index
      (bmi = weight / height2).
      if bmi <= 18.5 return "Underweight"
      if bmi <= 25.0 return "Normal"
      if bmi <= 30.0 return "Overweight"
      if bmi > 30 return "Obese" 
*/
/*
      Напишите функцию bmi, которая вычисляет индекс массы тела
      (bmi = вес / рост 2 ).
      если ИМТ <= 18,5, вернуть "Недостаточный вес"
      если ИМТ <= 25,0, вернуть «Нормальный»
      если ИМТ <= 30,0 вернуть "Избыточный вес"
      если ИМТ > 30, верните «Ожирение». 
*/
/* 
function bmi(weight, height) {
      let index = weight / height ** 2;
      let count = "";
      if (index <= 18.5) {
            return (count += "Underweight");
      } else if (index <= 25.0) {
            return (count += "Normal");
      } else if (index <= 30.0) {
            return (count += "Overweight");
      } else if (index > 30) {
            return (count += "Obese");
      }
}
 */
// Task № 43 8 kyu---------------------------
//Convert a string to an array
/*
      Write a function to split a string and convert
      it into an array of words. For example:
      "Robin Singh" ==> ["Robin", "Singh"] 
*/
/* 
      Напишите функцию, которая разбивает строку и
      преобразует ее в массив слов. Например:
      "Robin Singh" ==> ["Robin", "Singh"]
 */
/* 
function stringToArray(string) {
      return string.split(" ");
} 
*/

// Task № 44 8 kyu---------------------------
// Return Negative
/*
      In this simple assignment you are given a
      number and have to make it negative. 
      But maybe the number is already negative? 
 */
/*
      В этом простом задании вам дается число, и 
      вы должны сделать его отрицательным. А может быть,
      число уже отрицат 
 */
/* 
function minNum(num) {
      return num > 0 ? num - num * 2 : num;
} */
// Task № 45 8 kyu---------------------------
// L1: Set Alarm
/* 
      The function should return true if you are 
      employed and not on vacation (because these are the circumstances under which you need to set an alarm).
      It should return false otherwise. Examples:
      setAlarm(true, true) -> false
      setAlarm(false, true) -> false
      setAlarm(false, false) -> false
      setAlarm(true, false) -> true 
*/
/*
      Функция должна возвращать true, если вы работаете,
      а не в отпуске (поскольку это обстоятельства, 
      при которых вам нужно установить будильник).
      В противном случае он должен возвращать false.
      Примеры:
      setAlarm(true, true) -> false
      setAlarm(false, true) -> false
      setAlarm(false, false) -> false
      setAlarm(true, false) -> true 
 */
/* 
function setAlarm(employed, vacation) {
      return employed && !vacation ? true : false;
}
 */

// Task № 46 8 kyu---------------------------
// Sum Mixed Array
/*
      Given an array of integers as strings and numbers,
      return the sum of the array values as if all were
      numbers.
      Return your answer as a number. 
*/
/*
      Учитывая массив целых чисел в виде строк и чисел,
      верните сумму значений массива, как если бы
      все они были числами.
      Верните ответ в виде числа. 
 */
/* 
function sumMix(x) {
      return x.reduce((x, y) => Number(x) + Number(y), 0);
}
 */
// Task № 47 5 kyu---------------------------
// Extract the domain name from a URL
/*
      Write a function that when given a URL as a string,
      parses out just the domain name and returns it
      as a string. For example:
      domainName("http://github.com/carbonfive/raygun") == "github" 
      domainName("http://www.zombie-bites.com") == "zombie-bites"
      domainName("https://www.cnet.com") == "cnet" 
 */
/*
      Напишите функцию, которая при задании URL-адреса
      в виде строки анализирует только доменное имя
      и возвращает его в виде строки. Например:
      domainName("http://github.com/carbonfive/raygun") == "github" 
      domainName("http://www.zombie-bites.com") == "zombie-bites"
      domainName("https://www.cnet.com") == "cnet" 
 */
/*
 function domainName(url) {
      return url
            .replace("https://", "")
            .replace("http://", "")
            .replace("www.", "")
            .split(".")[0];
}
 */
// Task № 48 8 kyu---------------------------
// Convert a Number to a String!
/*
      We need a function that can transform a
      number into a string.
      What ways of achieving this do you know?
      Examples:
      123 --> "123"
      999 --> "999" 
*/
/*
      Нам нужна функция, которая может преобразовать
      число в строку.
      Какие способы достижения этого вы знаете?
      Примеры:
      123 --> "123"
      999 --> "999"
*/
/* 
function numberToString(num) {
      return num + "";
}
 */
// Task № 49 8 kyu---------------------------
// Are You Playing Banjo?
/*
      Create a function which answers the question
      "Are you playing banjo?".
      If your name starts with the letter "R" or
      lower case "r", you are playing banjo!
      The function takes a name as its only argument,
      and returns one of the following strings:
      name + " plays banjo" 
      name + " does not play banjo" 
 */
/*
      Создайте функцию, которая отвечает на вопрос
      «Вы играете на банджо?».
      Если ваше имя начинается с буквы «R» или строчной «r»,
      вы играете на банджо!
      Функция принимает имя в качестве единственного
      аргумента и возвращает одну из следующих строк:
      name + " plays banjo" 
      name + " does not play banjo"
*/
/* 
function areYouPlayingBanjo(name) {
      return name[0] === "r" || name[0] === "R"
            ? `${name} plays banjo`
            : `${name} does not play banjo`;
}
 */