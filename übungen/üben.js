function timesHundred(num) {
  return num / 26;
}

console.log(timesHundred(100));

var sum = 0;

function addFive() {
  sum = sum + 5;
}

addFive();

var globalPlace = "Earth";

function functionalPlace(season) {
  if (season !== "Summer") {
    // const place = 'Northern hemisphere';
    var place = "Northern hemisphere";
  } else {
    // const place = 'Southern hemisphere';
    var place = "Southern hemisphere";
  }
  // Test yourself: What will the value of place be
  // by the time we reach this line?
  return place;
}

console.log(globalPlace);
console.log(functionalPlace("Summer"));

var val = 12;

function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual();

function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(99));

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

console.log(val);

switch (val) {
  case "bob":
    answer = ("Marley");
    break;
  case 42:
    answer = ("The  answer");
    break;
  case 1:
    answer = ("There is no #1");
    break;
  case 99:
    answer = ("Missed me by this much!");
    break;
  default: 7
    answer = ("Ate Nine");
