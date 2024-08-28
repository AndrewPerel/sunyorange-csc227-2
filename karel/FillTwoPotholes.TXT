function fillPotholes ()
{
	move();
	fillPotHole();
	move();
	move();
	move();
	fillPotHole();
	move();
}

function turnRight()
{
	turnLeft();
	turnLeft();
	turnLeft();
}

function fillPotHole()
{
	turnRight();
	move();
	putBeeper();
	turnLeft();
	turnLeft();
	move();
	turnRight();
}