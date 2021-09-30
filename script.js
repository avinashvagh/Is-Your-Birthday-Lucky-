const dateOfBirth = document.querySelector
("#date-of-birth");
const luckyNumber = document.querySelector
("#lucky-number");
const checkNumberButton = document.querySelector
("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber)

{
  if (sum%luckyNumber===0){
    console.log("Your birthday is lucky ");

  }else{
    console.log("your birthday is not lucky ");
    
  }
}

function checkBirthDateIsLucky(){
  const dob =dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum&dob)
  compareValues(sum, luckyNumber.value)
  else
  outputBox.innetText ="Please enter both the fields";
}

function calculationSum(date){
  dob = dob.replaceAll("-","");
  let sum=0;
  for (let index=0; index<dob.length; index++){
    sum = sum + dob.charAt(index);

  }
  return = sum;
}


checkNumberButton.addEventListener('click', function getValues(){
  console.log (dateOfBirth.value, luckyNumber.value);
})
