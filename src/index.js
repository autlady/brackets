module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  
    let array = [].concat(...bracketsConfig);

    const bracketsNew = {};

    for (let i = 0; i < array.length; i += 2) {
        bracketsNew[array[i+1]] = array[i];
    }

    let stack = [];

    function isClosedBracket (char) {
        let keysOfBrackets = [];
        for (let key in bracketsNew) {
          keysOfBrackets.push(key);
        }
        return keysOfBrackets.indexOf(char) > -1;
    }

    for (let i = 0; i < str.length; i++) {
        const cur = str[i];
        if (isClosedBracket(cur)) {
            if (bracketsNew[cur] !== stack.pop()) return false;
        } else {
            stack.push(cur);
        }
    }
    
    return stack.length === 0;
}
