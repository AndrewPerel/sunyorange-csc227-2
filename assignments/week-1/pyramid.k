function climbHill()
{
	climb();
	climb();
	climb();
	climb();
	climb();
	climb();

	climbDown();
	climbDown();
	climbDown();
	climbDown();
	climbDown();
	climbDown();
}

function climb()
{
	turnLeft();
	move();
	turnRight();
	move();
}

function climbDown()
{
	move();
	turnRight();
	move();
	turnLeft();
}

function turnRight()
{
	turnLeft();
	turnLeft();
	turnLeft();
}