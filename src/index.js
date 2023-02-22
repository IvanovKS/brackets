module.exports = function check(str, bracketsConfig) {
  // your solution
  const open_br = ['(', '[', '{', '|', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const close_br = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['1']: '1',
    ['2']: '2',
    ['3']: '3',
    ['4']: '4',
    ['5']: '5',
    ['6']: '6',
    ['7']: '7',
    ['8']: '8',
    ['9']: '9'
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (open_br.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (close_br[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  const solution = stack.length;
  // let www;
  if (stack.length % 2 === 0) {
    return true;
  } 
  // return stack.length === 0;
}
