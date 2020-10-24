module.exports = function check(str, bracketsConfig) {

// function check(str, bracketsConfig) {

  let stack = [],
      openingChars = [];
      closingChars = [];

      bracketsConfig.forEach ((element) => { //вместо элемент можно писать любое слово, это просто название аргумента, которые попадает в обработку
        openingChars.push(element[0]);
        closingChars.push(element[1]);
      });

    // console.log(openingChars);
    // console.log(closingChars);

  for (i = 0; i < str.length; i++) {
  if (closingChars.includes(str[0])) {
    // console.log(false);
  } else if (openingChars.includes(str[i])) {
    stack.push(str[i]);
    // console.log(stack);
  } else if (closingChars.includes(str[i])) {
    stack.pop(str[i-1]);
    // console.log(stack);
  } else if (stack.length === 0 && i < str.length && closingChars.includes(str[0])) {
    // console.log(false);

  }
  
  // console.log(stack)
  
}
return stack.length === 0 ? true : false;
}



// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];

// check('[]()(', config2)

// // check('())(');
// // check('()');
// // check('()', config1);




// 1
// 1
// 1
// 1
// 1
// 5
// 6
// 1
// 1
// 1
// 1
//   1
//   1
//   1
//   1
//   2
//   2
//   2
//   2
// 8
// 8
// 8
// 8
// 8
// 8
// 2
// 2
// 2
// 2
// 5
// 5
// 7
//  7
//  8
// 7
// 7
// 7
//   7
//   8
// 7
// 7
// 5
// 5
// 5
// 5
//   6
//   6
//   6
//   6
//   7
//   7
//   7
//   7
// 7777776622222111111222288888822225577877778775555666677777777776622222