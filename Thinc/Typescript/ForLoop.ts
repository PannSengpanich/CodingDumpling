/*   OPERATION
+  -  *  /  %  ++  --

let A = 30;
A++;
console.log(A); //31

*/

for (let i = 0; i < 3; i++) {
  console.log("สวัสดีครั้งที่", i);
}

const roomList0 = ["201A", "201B"];
for (const room of roomList0) {
  console.log("วันนี้มีกิจกรรมที่ห้อง", room);
}

/* forEach : function for each element
   map : return a new array
   some : check if any values ...
   every : check if all values ...
   filter : select some elements from array
   reduce : calculate something from array
  */

const list = [1, 2, 3, 4, 5];

list.forEach((value, index, array) => {
  console.log(`value: ${value}, index: ${index}`); // use `....`
});

const newList = list.map((value, index, array) => {
  return value * 2;
});
console.log(newList);

const hassomeEven = list.some((value, index, array) => {
  return value % 2 == 0;
});
console.log(hassomeEven);

const hasallEven = list.every((value, index, array) => {
  return value % 2 == 0;
});
console.log(hasallEven);

const evenList = list.filter((value, index, array) => {
  return value % 2 == 0;
});
console.log(evenList);

const sum = list.reduce((previousValue, currentValue, currentIndex, array) => {
  return previousValue + currentValue;
}, 0);
console.log(sum);
