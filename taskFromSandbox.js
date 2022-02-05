"use strict";
// task № 1 8 kyu---------------------------
/* 
      Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

      Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
 */
/* 
function digitize(n) {
      n = n + "";
      n = n.split("").reverse();
      for (let i = 0; i < n.length; i++) {
            n[i] = +n[i];
      }
      return n;
}
 */
