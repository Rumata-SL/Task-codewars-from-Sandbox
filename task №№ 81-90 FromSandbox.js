"use strict";
// Task № 81 8 kyu---------------------------
// Can we divide it?
/*
      Your task is to create the functionisDivideBy (or is_divide_by) 
      to check if an integer number is divisible by both integers a and b. 
*/
/*
      Ваша задача состоит в том, чтобы создать функцию isDivideBy(или ),
      проверяющую, делится is_divide_byли целое число как на целые числа, так и на .numberab 
*/
/* 
function isDivideBy(number, a, b) {
      return (number % a === 0) && (number % b === 0)? true : false;
}
 */

// Task № 82 8 kyu---------------------------
// Grasshopper - Messi goals function
/*
      Messi is a soccer player with goals in three leagues:
      LaLiga
      Copa del Rey
      Champions
      Complete the function to return his total number of goals in all three leagues. 
*/
/*
      Месси – футболист, забивший голы в трех лигах:
      Ла Лига
      Копа дель Рей
      Чемпионы
      Завершите функцию, чтобы вернуть его общее количество голов во всех трех лигах. 
*/
/* 
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
      return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
 */

// Task № 83 8 kyu---------------------------
// Is it even?
/*
      In this Kata we are passing a number (n) into a function.
      Your code will determine if the number passed is even (or not).
      The function needs to return either a true or false.
      Numbers may be positive or negative, integers or floats.
      Floats are considered UNeven for this kata. 
*/
/*
      В этом Ката мы передаем число (n) в функцию.
      Ваш код определит, является ли переданное число четным (или нет).
      Функция должна возвращать либо истину, либо ложь.
      Числа могут быть положительными или отрицательными,
      целыми числами или числами с плавающей запятой.
      Поплавки считаются НЕЧЕТНЫМИ для этого ката. 
*/
/* 
function testEven(n) {
      return n % 2 ? false : true;
}
 */
// Task № 84 8 kyu---------------------------
// Grasshopper - Debug sayHello
/*
      The starship Enterprise has run into some problem when
      creating a program to greet everyone as they come aboard.
      It is your job to fix the code and get the program working again! 
*/
/*
      Звездолет «Энтерпрайз» столкнулся с проблемой при создании 
      программы для приветствия всех, кто поднимается на борт.
      Ваша задача — исправить код и заставить программу снова работать! 
*/
/* 
function sayHello(name) {
      return `Hello, ${name}`;
}
 */
// Task № 85 8 kyu---------------------------
// Double Char
/*
      Given a string, you have to return a string in 
      which each character (case-sensitive) is repeated once. 
*/
/*
      Учитывая строку, вы должны вернуть строку, в которой каждый 
      символ (с учетом регистра) повторяется один раз. 
*/
/* 
function doubleChar(str) {
      let arr = [];
      for (let i = 0; i < str.length; i++) {
            arr.push(str[i]);
            arr.push(str[i]);
      }
      return arr.join("");
}
 */
// Task № 86 8 kyu---------------------------
// Volume of a Cuboid
/*
      Bob needs a fast way to calculate the volume of a cuboid
      with three values: length, width and the height of the cuboid.
      Write a function to help Bob with this calculation. 
*/
/* 
      Бобу нужен быстрый способ вычисления объема прямоугольного 
      параллелепипеда с тремя значениями: length, widthи heightпрямоугольного 
      параллелепипеда. Напишите функцию, которая поможет Бобу в этом вычислении. 
*/

/* 
class Kata {
      static getVolumeOfCuboid(length, width, height) {
            return length * width * height
      }
} 
*/
