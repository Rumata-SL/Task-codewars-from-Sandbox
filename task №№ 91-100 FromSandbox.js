"use strict";
// Task № 91 8 kyu---------------------------
// The Feast of Many Beasts
/*
      All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
      Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
      Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.  
*/
/*
      У всех животных праздник! Каждое животное приносит одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Например, большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт.
      Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли животному принести блюдо на пир.
      Предположим, что beastи dishвсегда строчные строки, и каждая из них состоит как минимум из двух букв. beastи dishможет содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки. Они не будут содержать цифр. 
*/
/* 
function feast(beast, dish) {
      let animal = beast.split("");
      let dishs = dish.split("");
      return animal[0] === dishs[0] &&
            animal[animal.length - 1] === dishs[dishs.length - 1]
            ? true
            : false;
}
 */

// Task № 92 8 kyu---------------------------
// Function 2 - squaring an argument
/*
      Now you have to write a function that takes an
      argument and returns the square of it. 
 */
/*
      Теперь вам нужно написать функцию,
      которая принимает аргумент и возвращает его квадрат. 
 */
/* 
const square = (num) => num * num;
 */

// Task № 93 7 kyu---------------------------
// Anagram Detection
/*
      An anagram is the result of rearranging the letters 
      of a word to produce a new word (see wikipedia).
      Note: anagrams are case insensitive
      Complete the function to return true if the two arguments
      given are anagrams of each other; return false otherwise. 
 */
/*
      Анаграмма — это результат перестановки букв 
      слова для получения нового слова (см. Википедию ).
      Примечание: анаграммы нечувствительны к регистру .
      Завершите возвращаемую функцию, trueесли два заданных 
      аргумента являются анаграммами друг друга; вернуть falseиначе. 
*/
/* 
const isAnagram = function (test, original) {
      test = test.toLowerCase().split("").sort().join("");
      original = original.toLowerCase().split("").sort().join("");
      return test === original ? true : false;
};
 */

// Task № 94 7 kyu---------------------------
// Get the Middle Character
/*
      You are going to be given a word. Your job is to return 
      the middle character of the word. If the word's length is odd, 
      return the middle character. If the word's length is even,
      return the middle 2 characters.
  */
/*
      Вам дадут слово. Ваша задача — вернуть средний символ слова.
      Если длина слова нечетная, вернуть средний символ.
      Если длина слова четная, верните средние 2 символа. 
*/
/* 
function getMiddle(s) {
      return s.length % 2
            ? s.charAt(s.length / 2)
            : s.charAt(s.length / 2 - 1).concat(s.charAt(s.length / 2));
}
 */
// Task № 95 8 kyu---------------------------
// Total amount of points
/*
      Our football team finished the championship.
      The result of each match look like "x:y". Results of all matches are
      recorded in the collection.
      For example: ["3:1", "2:2", "0:1", ...]
      Write a function that takes such collection and counts
      the points of our team in the championship.
      Rules for counting points for each match:
      if x>y - 3 points
      if x<y - 0 point
      if x=y - 1 point 
*/
/*
      Наша футбольная команда завершила чемпионат.
      Результат каждого совпадения выглядит как "x:y".
      Результаты всех матчей фиксируются в сборнике.
      Например: ["3:1", "2:2", "0:1", ...]
      Напишите функцию, которая берет такую ​​коллекцию и считает
      очки нашей команды в чемпионате. Правила подсчета очков за каждый матч:
      если х>у - 3 балла
      если х<у - 0 баллов
      если х=у - 1 балл 
*/
/* 
function points(games) {
      let count = 0;
      games.forEach((element) => {
            if (element[0] > element[element.length - 1]) {
                  count += 3;
            } else if (element[0] < element[element.length - 1]) {
                  count += 0;
            } else if ((element[0] = element[element.length - 1])) {
                  count += 1;
            }
      });
      return count;
}
 */
