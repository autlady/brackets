module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

   let array = [].concat(...bracketsConfig).join();
    console.log(array);


}
