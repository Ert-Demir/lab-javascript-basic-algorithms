// Iteration 1: Names and Input
const hacker1 = "Ertugrul";
const hacker2 = "Ertdmr";

const driver = `The driver's name is ${hacker1}.`;
console.log(driver);

const navigator = `The navigator's name is ${hacker2}.`;
console.log(navigator);


// Iteration 2: Conditionals
const longestName = (name1, name2) => {
  if (name1.length > name2.length) {
    return `The driver has the longest name, it has ${name1.length} characters.`;
  } else if (name2.length > name1.length) {
    return `It seems that the navigator has the longest name, it has ${name2.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${name1.length} characters!`;
  }
};



// Iteration 3: Loops
console.log(longestName(hacker1, hacker2));

const capitalize = (name) => {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    result += name[i].toUpperCase() + " ";
  }
  return result.trim();
};

console.log(capitalize(hacker1));

const reverse = (name) => {
  let result = "";
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  return result;
};

console.log(reverse(hacker2));

const lexicographicOrder = (name1, name2) => {
  if (name1 < name2) {
    return "The driver's name goes first.";
  } else if (name2 < name1) {
    return "Yo, the navigator goes first definitely.";
  } else {
    return "What?! You both have the same name?";
  }
};

console.log(lexicographicOrder(hacker1, hacker2));