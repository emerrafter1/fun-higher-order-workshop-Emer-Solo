function identity(input) {
  return input
}

function identityF(input) {
 return function(){
  return identity(input)
 }
}

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function increment(num1) {
  return add(num1,1)
}

function addF(num1) {

  function add(num2){
    return add(num1, num2)
  }

  return add;
}

function curry(binaryFunction, input) {
  
  function feeder(x){
    return binaryFunction(x, input)
  }

  return feeder;
}



function liftF(binaryFunction) {
  function feeder(x){
      function feeder2(y){
      return binaryFunction(x,y)
      }
      return feeder2
    
  }
  return feeder;
  
}

// liftF(add) = feeder(x){
//   function feeder2(y){
//   return add(x,y)
//   }
//   return feeder2

// }

// liftF(add)(1) = feeder2(y){
//   return add(1,y)
//   }
//   return feeder2

//   liftF(add)(1)(6) = add(1,6)


function once(inputFunction) {
  let hasBeenCalled = false;
  let output;

   function secondFunction () {
    if (hasBeenCalled === false) {
      hasBeenCalled = true; //checks has function been called before
      output = inputFunction();
    }
    return output; //result of returnHello()
  };

  return secondFunction
}


function twice(binaryFunction) {

  function unaryFunction(arg1){
    return binaryFunction(arg1, arg1)
  }

  return unaryFunction
}

function composeU(unaryFunc1,unaryFunc2) { //composeU(square, double)

  function unaryFunc3(x){ //squareThenDouble(5)
    return unaryFunc2(unaryFunc1(x))
  }
  return unaryFunc3

}

function composeB(binaryFunction1, binaryFunction2) {

  function composedFunction(x,y,z){
     // return value of first binary function
    return binaryFunction2(binaryFunction1(x,y),z)

  }
  return composedFunction

}

//binaryFunction1 => add
//binaryFunction2 => multiply


function limit(functionToBeCalled, numOfTimes) {

  function binaryFunction(x,y){
      for(let i = 0; i<numOfTimes; i++){
        numOfTimes--
        return functionToBeCalled(x,y)
      }
  }

  return binaryFunction

}

function from(startingValue) {

  function consecutiveValue(){
    return startingValue++
  }
  return consecutiveValue;

}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
  once,
};
