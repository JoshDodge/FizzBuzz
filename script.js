// Set prompt to intialize variable for user input number.
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// Set variable i to 1, then increment by 1 until until equal to variable answer. 
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

