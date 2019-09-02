//Lowest number

console.log(Math.min(45, 768, 38752845, 0, 758, 221));

//Highest number

console.log(Math.max(76, 847, 9303, 92928, 463829221));

//Rounding

//Round up

console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

//Round down

console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(28.329));

//Dice Roll
//console.log(Math.random() + 3);
console.log(Math.ceil(Math.random() * 6 + 1));

console.log(Math.floor(Math.random() * 6 + 1));

//First look at whats inside the () inside the ().
//it will look for a random number between 0-<1.
//that number multiplied by 6 would give you a result
//between 0 and 5 because the random number can never be 1
//but always less than 1. Because we want a number
//between 1 and 6 we + 1
