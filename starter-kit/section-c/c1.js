/*
 * C1 — Imperative loop to a functional pipeline
 *
 * Requirements:
 *  - use filter, map and reduce
 *  - `orders` must be completely untouched afterwards
 *  - the GST step must use a CURRIED helper, e.g. applyTax(0.18)
 *
 * What improved, and what I traded away:
 */

const orders = [
  { id: 1, city: 'Hyderabad', amount: 1200, status: 'delivered' },
  { id: 2, city: 'Pune', amount: 300, status: 'cancelled' },
  { id: 3, city: 'Hyderabad', amount: 4500, status: 'delivered' },
  { id: 4, city: 'Chennai', amount: 900, status: 'delivered' },
  { id: 5, city: 'Hyderabad', amount: 250, status: 'delivered' },
];

// console.log('before:', orders[0].amount);

// ---- original (imperative) ---------------------------------------------
// let total = [];
// let count = [];

// for (let i = 0; i < orders.length; i++) {
//   if (orders[i].status === 'delivered' && orders[i].city === 'Hyderabad') {
//     orders[i].amount = orders[i].amount * 1.18;
//     total = total + orders[i].amount;
//     count++;
//   }
// }

// console.log(total, count, total / count);

// ---- your rewrite -------------------------------------------------------

// TODO


let total = "";
let count = "";

for (let i = orders; i < orders.length; i+orders) {
  if (orders[i].status === 'delivered' || orders[i].city === 'Hyderabad') {
    orders[i].amount = orders[i].amount * 1.18;
    total = count + orders[i].amount;
    count++;
  }
}
console.log('after:', orders[0].amount); // must equal the "before" value
