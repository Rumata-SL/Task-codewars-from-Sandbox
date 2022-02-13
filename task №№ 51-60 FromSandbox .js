"use strict";
// Task № 51 7 kyu---------------------------
// Friend or Foe?
/*
      Make a program that filters a list of strings
      and returns
      a list with only your friends name in it.
      If a name has exactly 4 letters in it, you can
      be sure that it has to be a friend of yours! Otherwise,
      you can be sure he's not...
      Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] 
 */
/* function friend(friends) {
      return friends.filter((item) => item.length === 4);
} */

// Task № 52 7 kyu---------------------------
// Square Every Digit
/* 
Welcome. In this kata, you are asked to square every
digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
/* function squareDigits(num) {
      return +[...(num + "")].map((el) => el * el).join``;
} */

// Task № 53 8 kyu---------------------------
// Beginner - Reduce but Grow
/*
      Given a non-empty array of integers, 
      return the result of multiplying the 
      values together in order. Example:
      [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
 */
/* function grow(x) {
      let sum = 1;
      for (let i = 0; i < x.length; i++) {
            sum *= x[i];
      }
      return sum;
} */
