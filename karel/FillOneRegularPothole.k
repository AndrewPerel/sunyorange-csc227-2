function fillRegularPothole ()
{
	fillPotHole();
	fillPotHole();
	fillPotHole();
	fillPotHole();
	fillPotHole();
}

function turnRight()
{
	turnLeft();
	turnLeft();
	turnLeft();
}

function fillPotHole()
{
	move();
	turnRight();
	move();
	putBeeper();
	turnLeft();
	turnLeft();
	move();
	turnRight();
	move();
}