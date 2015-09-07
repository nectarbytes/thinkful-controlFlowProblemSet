//  If/Else Statements
//  Unit 2 / Lesson 3 / Project 1

//  THE GRADE ASSIGNER
//  Write a program that references a number score and 
//  console.logs a grade for that score, 
//  either "A", "B", "C", "D", or "F".
console.log("******************************");
console.log("Unit 2 / Lesson 3 / Project 1 / IF/ELSE STATEMENTS");
console.log("\n");
console.log("The Grade Assigner program assigns a letter grade to a numeric score.");
var score = 100;  
	if (score >= 100) {
        console.log('A+');
    }else if (score >= 94) {
        console.log('A');
    } else if (score >= 84) {
        console.log('B');
    } else if (score >= 74) {
        console.log('C');
    } else if (score >= 64) {
        console.log('D');
    } else {
        console.log('F');
    }

//  THE WORLD TRANSLATOR
//  Write a program that references a language code,
//  and console.logs "Welcome" for the given language.
//  Defaults to English.
console.log("\n");
console.log("The World Translator program outputs Welcome in the spedified language.");
var english = "en";
var spanish = "es";
var german = "de";
var french = "fr";

var lang = spanish;
if (lang === "fr"){
	console.log("Bienvenue");
} else if (lang === "es"){
	console.log("Bienvenida");
} else if (lang === "de"){
	console.log("Willkommen");
} else {
	console.log("Welcome");
}


//  THE PLURALIZER
//  Write a program that references a noun and a number and
//  console.log's the number and pluralized form of the noun.
//  Also make it handle a few collective nouns like sheep and geese.
//  Note: this code was implemented to work using prompts and alerts,
//  the relevent code has been commented out, but can be uncommented to work. 
console.log("\n");
console.log("The Pluralizer program outputs a number and a noun in its plural or singular form depending on the number specified.");
var dog = "dog";
var horse = "horse";
var cow = "cow";
var mouse = "mouse";
var mousePlural = "mice";
var sheep = "sheep";
var sheepPlural = "sheep";
var goose = "goose"
var goosePlural = "geese";

var number = 1;//prompt("Please enter a number.");
var noun = mouse;//prompt("Please choose an animal (dog, horse, cow, mouse, sheep, goose). Make sure you write the singular!");
if (number == 1){
	//alert(number + " " + noun);
	console.log(number + " " + noun);
} else {
	if (noun === "mouse"){
		//alert(number + " " + mousePlural);
		console.log(number + " " + mousePlural);
	} else if (noun === "sheep") {
		//alert(number + " " + sheepPlural);
		console.log(number + " " + sheepPlural);
	} else if (noun === "goose") {
		//alert(number + " " + goosePlural);
		console.log(number + " " + goosePlural);
	} else {
		//alert(number + " " + noun + "s");
		console.log(number + " " + noun + "s");
	}
}


console.log("\n");
console.log("******************************");
console.log("Unit 2 / Lesson 3 / Project 2 / WHILE LOOPS");
//  BACKWARD LOOP
//  Fix the while loop so it decrements counting from 9 down to 0.
//  Output should be 9 8 7 6 5 4 3 2 1 0
console.log("Create a backward loop and print numbers 9 to 0.");
var i = 9;
while (i >= 0){
	console.log(i);
	i--;
}

//  CAR DEALERSHIP
//  Create an array of car names and use a while loop 
//  to collect the names into a string.
var carNames = ["Toyota", "Honda", "Nissan", "Volkswagen", "Saab"];

console.log("\n");
console.log("Outputs the cars array as a string using the join menthod.");
console.log(carNames.join(" "));

console.log("\n");
console.log("Outputs the cars array as a string using a while loop.");
var i = 0;
var text = "";
while (i < carNames.length){
	text += carNames[i] + " ";
	i++;
}
console.log(text);

//  ADDITIONAL EXERCISE
//  Use a while loop to print out even numbers from 1 to 20. 
console.log("\n");
console.log("Print out even numbers from 1 to 20.");
var i = 1;
while(i <= 20){
	if (i%2 === 0){
		console.log(i);
	}
	i++;
}


console.log("\n");
console.log("******************************");
console.log("Unit 2 / Lesson 3 / Project 3 / FOR LOOPS ");

 //  The even/odd reporter
 //  Iterate from 0 to 20 and check if the current number is even or odd
 //  and then report it to the screen (eg 2 is even).
console.log("\n");
console.log("Report whether numbers 0 to 20 are odd or even.");
 for (var i = 0; i <= 20; i++){
 	if (i%2 === 0){
 		console.log(i + " is even");
 	} else {
 		console.log(i + " is odd");
 	}
 }

 //  What number's bigger?
 //  Write a program that compares two numbers and console.log's the higher one.
console.log("\n");
console.log("Compare two numbers and report the higher one.");
var x = 9;
var y = 99;

if (x > y){
	console.log(x + " is larger");
} else if (y > x ){
	console.log(y + " is larger");
} else if (x == y){
	console.log(x + " and " + y + " are equal");
}

//  Multiplication Tables
//  Write a for loop that will iterate from 0 to 10.
//  For each iteration multiply the number by 9 and log the result.
//  (eg 2 * 9 = 18).
//  Bonus: Use a nested for loop to show the tables for every multiplier 1 to 100.
console.log("\n");
console.log("Multiply each iteration of a for loop, 0 to 10, by 9.");
for (var i = 0; i <= 10; i++){
	result = i * 9;
	console.log(i + " * 9 = " + result);
}

console.log("\n");
console.log("Use a nested for loop to show the tables for every multiplier 1 to 100.");
for (var i = 1; i <= 10; i++){
	for(var j = 1; j <= 10; j++){
		var result = i * j;
		console.log(i + " * " + j + " = " + result);
	}
}



