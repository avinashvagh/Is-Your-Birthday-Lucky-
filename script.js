const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky ";
  } else {
    outputBox.innerText = "your birthday is not lucky ";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculationSum(dob);
  if (luckyNumber.value != "" && dob != "") {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText = "Please enter both the fields";
  }
}

function calculationSum(date) {
  date = date.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < date.length; index++) {
    sum = sum + date.charAt(index);
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);