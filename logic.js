var wordList =  [
	"ashadie",
	"mehfuz",
	"lubaba",
	"lul",
	"lulu"
];

var chosenWord = " ";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 4;


function startGame() {
	/*
	1. select a word at random
	2. want to break up that random word into letters and
	replace them with underscores
	3. we want to add those underscores to the HTML
	4. numgusses always equals9, and blankandsuccess is an empty array,
	and wronggusses is an empty as well

	*/

	console.log('startGame called');

	wrongGuesses = [];
	numGuesses = 4;
	blanksAndSuccesses = [];



	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	letterInChosenWord = chosenWord.split();
	numBlanks = letterInChosenWord.length;
	console.log(chosenWord);
	console.log(numBlanks);


	/*for (var i = 0; i < chosenWord.length; i++) {
		var elem = document.getElementById("word-blank");
		elem.innerHTML = elem.innerHTML + " _ ";
	}

	// letterInChosenWord = chosenWord.split(" ");
	numBlanks = letterInChosenWord.length;
	console.log(chosenWord);
	console.log(numBlanks);*/

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");

		console.log(blanksAndSuccesses);
		document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
		document.getElementById("guesses-left").innerHTML = numGuesses;
		document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
	}
}




function checkLetters(letters) {
	/*
	1. compare the letter the user picks maches any of the letters in the word
	2. I want s conditional statement to determine if the letter the user picked
	is in the word. If no, do something, if not, do something else
	3. if the user is wrong we want to decrease the numGuesses variables by one

	*/
	var lettterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if(chosenWord[i] === letter) {
			lettterInWord = true;
		}
	}

	if (lettterInWord) {
		for (i = 0; i < numBlanks; i++) {
			if (chosenWord[i] === letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	} else {
		numGuesses --;
		wrongGuesses.push(letter);
	}

		/*
			to check if a letter is aready in to the wrong gusese to do
			is set up an if/else conditional that will run a for loop
			that will iterate over all the letter and then use
			the if/else to check if it already exists.
			*/
}




function roundComplete(){

	/*

	1. it's going to update the HTML with letters that are in the word
	2. it's going to update the HTML with gusses we have left
	3. It's gonig to update the HTML to show the wrong gusses
	4. It's going to determine wether the user won the game or not

	*/
	// document.getElementById("word-blank").innerHTML = blanksAndSuccesses;
	document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guesses-left").innerHTML = numGuesses;
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


	//blanksAndSuccesses.indexOf(letter >=0)){
		//console.log(letter)
	//}
	console.log(letterInChosenWord);
	console.log(blanksAndSuccesses);
	if (letterInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
		winCounter++;
		alert("You Win!!");
		document.getElementById("win-counter").innerHTML = winCounter;
	} else if(numGuesses === 0) {
		document.getElementById("loss-counter").innerHTML = lossCounter ++;
		alert("You don't have any more guesses");

		startGame();
	}
}

/*document.onkeyup = function(event){
	console.log("hi");*/

startGame();

document.onkeyup = function(event){
	/*
	1. it's going to take in the letter that we type in
	2. it's going to pass it through the check letter function
	*/
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the letter we typed" + letterGuessed);
	checkLetters(letterGuessed);
	roundComplete();
};
