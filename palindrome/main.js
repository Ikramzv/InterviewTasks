function main(str = "menem") {
  // Turn argument to string since it can be number
  const pureString = str.toString();
  // replace all non-word characters ( space,special signs and others ) with empty string
  const re = /[\W_]/gi;
  const string = pureString.replace(re, "");
  console.log(string);

  // Divide string length half and check according to particular index if no matching return false otherwise return true
  for (let i = 0; i < str.length / 2; i++) {
    if (!new RegExp(`${string[i]}`, "i").test(string[string.length - 1 - i])) {
      return false;
    }
  }

  return true;
}

console.log(main("0_0 (: /- :) 0-0"));
