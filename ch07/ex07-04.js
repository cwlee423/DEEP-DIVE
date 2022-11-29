var x = 5, result;

// 선할당 후 증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후 할당(prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후 감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후 할당(prefix decrement operator)
result = --x;
console.log(result, x); // 5 5