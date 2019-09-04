//bandname exercise

function bandNameCalc(clothingColor, lastFoodEaten) {
  return `The band name is The ${clothingColor} ${lastFoodEaten}!`;
}

console.log(bandNameCalc("red", "tea"));

function generateBandName(clothingColor, lastFoodEaten) {
  const color =
    clothingColor.charAt(0).toUpperCase() + clothingColor.substring(1);
  const food =
    lastFoodEaten.charAt(0).toUpperCase() + lastFoodEaten.substring(1);
  return `The name of my Band is: The ${color} ${food}.`;
}

console.log(generateBandName("pink", "mango"));

//fortuneteller exercise

function tellFortune(childrenNum, partnersName, geoLocation, jobTitle) {
  var future =
    `You will be a ` +
    jobTitle +
    ` in ` +
    geoLocation +
    ` and married to ` +
    partnersName +
    ` with ` +
    childrenNum +
    ` kids.`;
  console.log(future);
}
tellFortune(3, "Axel", "Cuba", "carpenter");
tellFortune(8, "Marie", "Teheran", "actor");
tellFortune(10, "Andrew", "Sofia", "Lisboa");

//puppyage calculator

function calculateDogage(puppysAge) {
  var dogAge = puppysAge * 7;
  console.log("Your doggie is " + dogAge + " years old.");
}
calculateDogage(28);
calculateDogage(4);
calculateDogage(7);
