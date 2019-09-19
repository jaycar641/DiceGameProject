//console.log("");
alert("Hello welcome to the Race Game!  Your goal is to race across map to reach the other side with as much points as possible, and without dying.");

let flagCapture = false;
let diceList = [4, 6, 8, 10, 12];
let pointTotal = 0;
let totalDistance = 0;



function gameFlow (diceselected) 

{	
	let result = 0;
	result = rollDice(diceselected);
	
	if (result<= 0) 
	{
		result= 0;
	}
	return result;
}

function rollDice (randomNum) 
{
	
	let result = Math.floor((Math.random() * (randomNum) + 1));
	return result;

}

function diceSelector ()
{
		let dicePicked = prompt("Uh-oh! You've encountered a problem.  Enter a dice to roll to see what happens!; 4, 6, 8, 10, 12")

	return dicePicked;
}


function pointsSystem(usingdice1,diceresult, pointtotal) 

{
		if (diceresult == usingdice1 ) 
		{
			console.log("You were approached by a wild animal an was mortally wounded!  Gameover!")
			pointTotal = 0;
			totalDistance = 0;
			
		}
		

		else if (diceresult == usingdice1/3 || diceresult == usingdice1/6) 
		{
			console.log("You fell into a pit!  You've lost 15 points!")
			pointTotal -= 15;

		}	

		else if (diceresult == 5 || usingdice1 == 1) // 5, 8, 12, or 10
		{
			console.log("You were approached by a wild animal an was seriously wounded!  You've lost 30 points!")
			pointTotal -= 30;

		}
		else if (usingdice1 != 10 && diceresult == usingdice1/2) 
		{
			console.log("Nothing happened! You just move forward")
		}

		else 
		{

			console.log("You found treasure!")
			pointTotal += 20;
		}

		if (pointTotal <= 0) 
		{
			pointTotal = 0

		}

		return pointTotal;

}


function resetGame() 
{
		totalDistance = 0;
		pointTotal = 0;
		flagCapture = false;
		//alert("Hello welcome to the Race Game!  Your goal is to race across map to reach the other side with as much points as possible, and without dying.");

}


	
		while(flagCapture == false) 

{

		let resultDice = 0;
		let usingdDice = 0;

		totalDistance += gameFlow(20); //dice is rolled, and returns distance

		usingDice = diceSelector();
		resultDice = gameFlow(usingDice)
		pointTotal += pointsSystem(usingDice, resultDice, pointTotal);
		usingDice = 0;
		resultDice = 0;

		
		if (totalDistance >= 100) 
	{
		alert("You win!")
		flagCapture = true;
		resetGame();		

	}
		else {alert("You have " + pointTotal + "points and at a distance of " + totalDistance + "/100");
		}
		

}
	resetGame();

