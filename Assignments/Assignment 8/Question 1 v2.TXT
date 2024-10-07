function main()
{
	turnLeft();
	move();
	turnRight();
	move();

	maze();
}

function checkExit()
{
	if (leftIsClear())
	{
		if (rightIsClear())
		{
			
		}

		else
		{
			maze();
		}
	}

	else
	{
		maze();
	}
}

function maze()
{
	if (leftIsClear())
	{
		turnLeft();
	}

	if (rightIsClear())
	{
		turnRight();
	}

	run();

	checkExit();
}

function run()
{
	while (frontIsClear())
	{
		if (beepersPresent())
		{
			pickBeeper();
		}

		move();
	}
}

function turnRight()
{
	repeat(3)
	{
		turnLeft();
	}
}