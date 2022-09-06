function find(arr) {
  // find the lowest length string
  let lowestLength = arr.reduce((initial, item) => {
    initial === "" ? (initial = item) : "";
    if (initial.length > item.length) {
      initial = item;
    }
    return initial;
  }, "");

  // By using regular expression find the matched strings
  const re = new RegExp(`[${lowestLength}]`, "gi");
  const matches = arr.map((item) => {
    return item.match(re).join("");
  });
  const matchedString = matches.reduce((initial, item, arrayIndex) => {
    // if both existing value equal to empty string and current item's index not equal to 0 then return empty string
    // Because returned value ( at the end of function ) is non-matching value which is set to empty string
    if (initial === "" && arrayIndex !== 0) return "";
    initial === "" ? (initial = item) : "";
    let index = 0;
    // loop over existing string and if this matches with current string then increase the index
    for (let i = 0; i < initial.length; i++) {
      console.log(initial[i], item[i], i);
      if (initial[i] === item[i]) {
        index += 1;
      } else if (index === 0) {
        // if index is 0 that means anything is not matching then set existing value to empty string
        return (initial = "");
      }
    }
    // To determine all matches string slice the existing string untill index
    return initial.slice(0, index);
  }, "");

  return matchedString !== "" ? matchedString : false;
}
