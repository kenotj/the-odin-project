const rock      = "rock";
const paper     = "paper";
const scissors  = "scissors";

let humanScore    = 0;
let computerScore = 0;

function GetComputerChoice()
{
  let choice = Math.floor(Math.random() * 3);
  switch(choice)
  {
  case 0:
    return rock;
    break;

  case 1:
    return paper;
    break;

  case 2:
    return scissors;
    break;

  default:
    console.error("ERROR! Computer choice is invalid!");
    break;
  };
}

function ValidateSelection(selection)
{
  selection.toLowerCase();
  return selection == rock
      || selection == paper
      || selection == scissors;
}

function PlayRound(humanChoice, computerChoice)
{
  if(!ValidateSelection(humanChoice))
  {
    console.error("Invalid selection! Please try again.");
    return false;
  }

  if(!ValidateSelection(computerChoice))
  {
    console.error("ERROR! Computer choice is invalid");
    false;
  }

  // comparison logic
  switch(humanChoice)
  {
  case rock:
  {
    if(computerChoice == paper) computerScore++;
    if(computerChoice == scissors) humanScore++;
  } break;

  case paper:
  {
    if(computerChoice == scissors) computerScore++;
    if(computerChoice == rock) humanScore++;
  } break;

  case scissors:
  {
    if(computerChoice == rock) computerScore++;
    if(computerChoice == paper) humanScore++;
  } break;
  };
  return true;
}

// Main logic

function main()
{
  let humanSelection = "";
  for(let nIndex = 0; nIndex < 5; )
  {
    humanSelection = prompt("Make your choice:");
    if(PlayRound(humanSelection, GetComputerChoice()))
      ++nIndex;
  }

  console.log("your score is: " + humanScore + ", computer score is: " + computerScore);
  if(humanScore > computerScore)
  {
    console.log("you won!");
  }
  else if (humanScore == computerScore)
  {
    console.log("its a tie!");
  }
  else
  {
    console.log("you lost... :(");
  }
}
main()