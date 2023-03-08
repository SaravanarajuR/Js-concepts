////////////////////////////////////////////CLOSURE/////////////////////////////////////////////
function closure(a) {
  return function inner(b) {
    console.log(a);
    console.log(b);
  };
}

const closureStore = closure("n");
closureStore("x");
closureStore("p");

//////////////////////////////////////FUNCTION CURRYING///////////////////////////////////////
//1

function curry(a) {
  return function (b) {
    return function (c) {
      return Math.floor((a * b) / c);
    };
  };
}

console.log(curry(10)(20)(2));

//2

function infCurry(a) {
  return function (b) {
    if (b != null) return infCurry(a + b);
    return a;
  };
}

console.log(infCurry(10)(20)(30)(80)(56)(34)());

////////////////////////////PARTIAL APPLICATION OF FUNCTIONS////////////////////////////////////
