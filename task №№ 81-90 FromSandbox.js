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
// Task № 87 8 kyu---------------------------
// Sentence Smash
/*
      Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/
/*
      Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения! 
*/
/* 
function smash(words) {
      return (words = words.join(" "));
}
 */

// Task № 88 8 kyu---------------------------
// Super Duper Easy
/*
      Make a function that returns the value multiplied
      by 50 and increased by 6. If the value entered is a string it should return "Error". 
*/
/*
      Создайте функцию, которая возвращает значение,
      умноженное на 50 и увеличенное на 6. Если введенное 
      значение является строкой, оно должно возвращать «Ошибка».
 */
/* 
function problem(x) {
      return typeof x === "string" ? "Error" : x * 50 + 6;
}
 */
// Task № 89 8 kyu---------------------------
// How good are you really?
/*
      There was a test in your class and you passed it. Congratulations!
      But you're an ambitious person. You want to know if you're better than the average student in your class.
      You receive an array with your peers' test scores. Now calculate the average and compare your score!
      Return True if you're better, else False! 
*/
/*
      В вашем классе был тест, и вы его прошли. Поздравляем!
      Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
      Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат!
      Вернись True, если тебе лучше, иначе False! 
*/
/* 
function betterThanAverage(classPoints, yourPoints) {
      let count = 0;
      classPoints.forEach((element) => {
            count += element;
      });
      return yourPoints > ~~(count / classPoints.length) ? true : false;
}
 */
// Task № 90 7 kyu---------------------------
// Check the exam
/*
      The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
      The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
      If the score < 0, return 0. 
*/
/*
      Первый входной массив — это ключ к правильным ответам на экзамене, например ["а", "а", "б", "г"]. Второй содержит представленные ответы студента.
      Два массива не пусты и имеют одинаковую длину. Возвращает оценку для этого массива ответов, давая +4 за каждый правильный ответ, -1 за каждый неправильный ответ и +0 за каждый пустой ответ, представленный в виде пустой строки (в C используется символ пробела).
      Если оценка < 0, вернуть 0. 
*/
/* 
function checkExam(array1, array2) {
      let count = 0;
      for (let i = 0; i < array1.length; i++) {
            if (array2[i] === array1[i]) {
                  count += 4;
            } else if (array2[i] === "") {
                  count += 0;
            } else {
                  count -= 1;
            }
      }
      return count < 0 ? 0 : count;
}
 */
