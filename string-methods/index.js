//length of our string

const name = "Adrienn";
console.log(name.length);


//prinitng out characters

const word = "JavaScript";
console.log(word.length);
console.log(word[0],word[4]);


//printin out park

const park = "I can walk in the park all day!"
const stringOfPark = park.substring(18,22);
console.log(stringOfPark);


//printing out aSc

const programmingLanguage = "JavaScript";
const aSc = programmingLanguage.substring(3,6);
console.log(aSc);

//Uper case

const hello = "Hello World";
console.log(hello.toUpperCase());

//Lower case

const hello2 = "Hello Earthling";
console.log(hello2.toLowerCase());

//containing

const shoes = "nice shoes";
console.log(shoes.includes("l"),shoes.includes("n"));

//front back

console.log(`H${hello}H`);

console.log("H"+hello+"H");

console.log(hello[0], hello, hello[0]);


//last three 

console.log(hello.substring(8,11) + hello + hello.substring(8,11));

//Java

const phrase = "It is a wonderful day.";
console.log(phrase.toUpperCase());
console.log(phrase.includes("Java"));


//first and last

console.log("D"+ hello.substring(1, 10)+"h");