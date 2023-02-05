"use strict"

// ----- 1 задание -----
let a = ['lorem', 123, true, 'ipsum'];
console.log(a.length);
// ----- 2 задание -----
console.log(a[0])
console.log(a[a.length - 1])
// ----- 3 задание -----
let em = [777, false, 'lorem', 77, 'ipsum']
// ----- 4 задание -----
em.unshift(666, 'Mohmad', true);
// ----- 5 задание -----
em.shift()
em.pop()
em.pop()
console.log(em)
// ----- 6 задание -----
let number = [1, 3, 5, 7, 9]
console.log(number[0]*2, number[1]*2, number[2]*2, number[3]*2,number[4]*2)
// ----- 7 задание -----
number.splice(1,3)
console.log(number)


