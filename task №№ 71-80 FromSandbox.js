"use strict";

// Task № 71 8 kyu---------------------------
// Find the smallest integer in the array

/*
      Given an array of integers your solution should find the smallest integer.
      For example:
      Given [34, 15, 88, 2] your solution will return 2
      Given [34, -345, -1, 100] your solution will return -345 
 */
/*
      Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
      Например:
      Учитывая [34, 15, 88, 2], что ваше решение вернется2
      Учитывая [34, -345, -1, 100], что ваше решение вернется-345
*/
/* 
class SmallestIntegerFinder {
      findSmallestInt(args) {
            return Math.min(...args);
      }
}
 */

// Task № 72 8 kyu---------------------------
// Area or Perimeter
/*
      You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
      If it is a square, return its area. If it is a rectangle, return its perimeter.
      area_or_perimeter(6, 10) --> 32
      area_or_perimeter(3, 3) --> 9 
*/
/*
      Вам даны lengthи widthчетырехугольника. Многоугольник может быть прямоугольным или квадратным.
      Если это квадрат, вернуть его площадь. Если это прямоугольник, верните его периметр.
      area_or_perimeter(6, 10) --> 32
      area_or_perimeter(3, 3) --> 9 
*/
/* 
const areaOrPerimeter = function (l, w) {
      return l === w ? l * w : l * 2 + w * 2;
};
 */

// Task № 73 8 kyu---------------------------
// Sum The Strings
/*
      Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
      Example: (Input1, Input2 -->Output)
      "4",  "5" --> "9"
      "34", "5" --> "39"
      "", "" --> "0"
      "2", "" --> "2"
      "-5", "3" --> "-2" 
*/
/*
      Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки):
      Пример: ( Ввод1, Ввод2 -->Вывод )
      "4",  "5" --> "9"
      "34", "5" --> "39"
      "", "" --> "0"
      "2", "" --> "2"
      "-5", "3" --> "-2" 
*/
/* 
function sumStr(a, b) {
      let sum = +a + +b;
      return sum + "";
}
 */
// Task № 74 7 kyu---------------------------
// Testing 1-2-3
/*
      Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
      Write a function which takes a list of strings and returns each line prepended by the correct number.
      The numbering starts at 1. The format is n: string. Notice the colon and space in between. 
*/
/*
      Ваша команда пишет новый модный текстовый редактор, и вам поручили внедрить нумерацию строк.
      Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным номером перед ним.
      Нумерация начинается с 1. Формат n: string. Обратите внимание на двоеточие и пробел между ними.
*/
/* 
const number = function (array) {
      return array.map((item, i) => {
            return `${i + 1}: ${item}`;
      });
};
 */

// Task № 75 8 kyu---------------------------
// Remove exclamation marks
/*
      Write function RemoveExclamationMarks which removes all exclamation marks from a given string. 
 */
/*
      Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки. 
*/
/* 
function removeExclamationMarks(s) {
      return s.replace(/!/g, "");
}
 */

// Task № 76 6 kyu---------------------------
// Your order, please
/*
      Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
      Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
      If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
      Examples
      "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
      "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
      ""  -->  "" 
*/
/* 
      Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число и есть позиция, которую должно занимать слово в результате.
      Примечание. Цифры могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
      Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
      Примеры
      "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
      "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
      ""  -->  "" 
*/
/* 
function order(words) {
      return words.length === 0
            ? ""
            : words
                  .split(" ")
                  .sort((pref, next) => {
                        return (
                              Number(pref.match(/\d/)) -
                              Number(next.match(/\d/))
                        );
                  })
                  .join(" ");
}
 */

// Task № 77 7 kyu---------------------------
// Two fighters, one winner.
/*
      Create a function that returns the name of the winner in a fight between two fighters.
      Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
      Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
      Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects. 
*/
/*
      Создайте функцию, которая возвращает имя победителя в схватке между двумя бойцами.
      Каждый боец ​​по очереди атакует другого, и побеждает тот, кто убьет другого первым. Смерть определяется как наличие health <= 0.
      Каждый боец ​​будет Fighterобъектом/экземпляром. См. класс бойца ниже на выбранном вами языке.
      Оба healthи damagePerAttack( damage_per_attackдля python) будут целыми числами больше, чем 0. Вы можете мутировать Fighterобъекты. 
*/
/* 
function declareWinner(fighter1, fighter2, firstAttacker) {
      const one = Math.ceil(fighter1.health / fighter2.damagePerAttack);
      console.log(one);
      const two = Math.ceil(fighter2.health / fighter1.damagePerAttack);
      console.log(two);
      if (one == two) {
            return firstAttacker;
      } else {
            return one > two ? fighter1.name : fighter2.name;
      }
}
 */
