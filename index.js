//closure

//function currying

function fun(a) {
  return function (b) {
    if (b != null) return fun(a + b);
    return a;
  };
}

console.log(fun(10)(20)(30)(80)(56)(34)());
