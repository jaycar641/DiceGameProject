alert("Hello welcome to capture the flag!  Your goal is to race across map to reach the other players flag before they reach yours. ");

alert("Your are the first to roll!  Click roll");




function gameFlow (random1) 

{

	let randomchoser = rollDice(20);

	if (randomchoser == 1 || 2 || 3 || 4) 
	{
		random1 = parseInt(randomPit);

	}
	else if (randomchoser == 5 || 6 || 7|| 8) 
	{
		random1 = parseInt(randomForwards);
	}

	else if (randomchoser == 9|| 10 || 11 || 12) 
	{
		random1 = parseInt(randomBackwards);
	}

	else if (randomchoser == 13|| 14 || 15 || 16) 
	{
		random1 = parseInt(randomTreasure);
	}


	else 
	{
		random1 = parseInt(randomAnimal);
	}
	

	return random1;
}


function rollDice (randomNum) {

let result = Math.floor(Math.random() * (randomNum+1));

return result;

}



console.log(


