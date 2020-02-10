const findSimilar = input => {
  let last = "";

  for (let i = 0; i < input.length; i++) {
    if (last === "") {
      last = input[i];
      continue;
    }

    if (parseInt(last) === parseInt(input[i]))
      return true;

    last = input[i];
  }

  return false;
};

module.exports = findSimilar;
