var elem = null;

// elem이 false 값이면 elem으로 평가되고, else이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
console.log(value); // null