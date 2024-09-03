function main()
{
	turnLeft();
	move();
	move();
	turnRight();
	placeBeepers();
}

function placeBeepers()
{
	if (beepersPresent())
	{
		while (beepersPresent())
		{
			pickBeeper();
		}
		
		while (beepersInBag())
		{
			putBeeper();
			move();
		}
	}

	if (noBeepersPresent())
	{		
		if (frontIsBlocked())
		{
			return();
		}
		
		if (frontIsClear())
		{
			move();
			placeBeepers();
		}
	}
}

function return()
{
	turnLeft();
	turnLeft();

	while (frontIsClear())
	{
		move();
	}

	turnRight();
	move();
	turnRight();
	placeBeepers();
}

function turnRight()
{
	turnLeft();
	turnLeft();
	turnLeft();
}