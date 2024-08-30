module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

   let array = [].concat(...bracketsConfig).join();
    console.log(array);

        if (str.includes("{}") || str.includes("[]") || str.includes("()")) {
          str = str.replace("{}", "");
          str = str.replace("[]", "");
          str = str.replace("()", "");

          console.log(str);
      }


}
