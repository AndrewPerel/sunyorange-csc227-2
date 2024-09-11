function main()
{
	while (frontIsBlocked())
	{
		climb();
	}

	repeat (6)
	{
		climbDown();
	}
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
