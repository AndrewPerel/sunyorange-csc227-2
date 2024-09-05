function main()
{
	repeat (4)
	{
		findTree();
		climbTree();
		placeLeaves();
		downTree();
	}
}

function findTree()
{
	while (frontIsClear())
	{
		move();
	}

	if (frontIsBlocked())
	{
		turnLeft();
	}
}

function climbTree()
{
	while (rightIsBlocked())
	{	
		move();
	}
}

function placeLeaves()
{
	turnLeft();
	turnLeft();
	move();
	turnLeft();
	turnLeft();
	putBeeper();
	move();
	putBeeper();
	turnRight();
	move();
	putBeeper();
	turnRight();
	move();
	putBeeper();
}

function downTree()
{
	while (frontIsClear())
	{
		move();
	}

	turnLeft();
}

function turnRight()
{
	turnLeft();
	turnLeft();
	turnLeft();
} 
