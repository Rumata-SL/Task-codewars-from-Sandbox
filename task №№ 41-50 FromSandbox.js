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
} */
