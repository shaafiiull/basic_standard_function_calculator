const getResults = (numbers, operators) => {
  if (operators[0] === "+" || operators[0] === "-") {
    let result = parseFloat(numbers[0]);
    for (let i = 0; i < numbers.length - 1; i++) {
      if (operators[i] === "+") {
        result = result + parseFloat(numbers[i + 1]);
      } else if (operators[i] === "-") {
        result = result - parseFloat(numbers[i + 1]);
      }
    }
    return result;
  }
  if (operators[0] === "x") {
    let result = 1;
    for (let num of numbers) {
      result = result * parseFloat(num);
      console.log(result);
    }
    return result;
  }
  if (operators[0] === "÷") {
    return numbers[0] / numbers[1];
  }
  if (operators[0] === "%") {
    return numbers[0] / 100;
  }
};

export default getResults;
