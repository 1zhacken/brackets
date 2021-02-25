module.exports = function check(str, bracketsConfig) {
  brackets = {}; //vocabulary for saving brackets 
  brStack = []; //stack for saving bracket's order

  bracketsConfig.forEach(brType => brackets[brType[0]] = brType[1]); //here we match opening and closing brackets

  str.split('').forEach(c => {
    brStack.push(c); //add symbol to stack
    if (brackets[brStack[brStack.length-2]] == c) { //if last 2 elements of stack are matcing as opening and closing brackets
      brStack.pop(); brStack.pop(); //delete both from stack
    }
  });

  return brStack.length == 0; //if all opening brackets are closed - in stack shouldn't be no one element
}

