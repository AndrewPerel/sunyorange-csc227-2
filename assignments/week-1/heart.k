function main()
{
	turnLeft();
	move();
	move();
	turnRight();

	repeat (9)
	{
		placeBeepers();
	}
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
	
	if (frontIsClear())
	{
		move();
	}

	turnRight();
}

function turnRight()
{
	turnLeft();
	turnLeft();
	turnLeft();
}
