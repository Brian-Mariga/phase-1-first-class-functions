function receivesAFunction(callBack) {
  callBack();
}
function returnsANamedFunction() {
  function namedFunction() {
    console.log("Named function.");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Anonymous function.");
  };
}
