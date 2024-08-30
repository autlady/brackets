module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

   let array = [].concat(...bracketsConfig).join();
    console.log(array);

      let stack = [];
      let brackets = {
          ')' : '(',
          '}' : '{',
          ']' : '['
      };

      for (let i = 0; i < str.length; i++) {
          const cur = str[i];

          if(isClosedBracket(cur)) {
              if (brackets[cur] !== stack.pop()) return false;
          } else {
              stack.push(cur);
          }
      }

      return stack.length === 0;

      function isClosedBracket (char) {
          return [')','}',']'].indexOf(char) > -1;
      }
}
