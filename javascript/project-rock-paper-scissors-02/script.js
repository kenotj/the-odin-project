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

function FinalizeResults()
{
  let elemFinalResult = document.querySelector("#result-final");
  if(humanScore > computerScore)
  {
    console.log("you won!");
    elemFinalResult.textContent = "you won!";
  }
  else if (humanScore == computerScore)
    {
      console.log("its a tie!");
      elemFinalResult.textContent = "its a tie.";
    }
    else
      {
        console.log("you lost... :(");
        elemFinalResult.textContent = "you lost... :(";
  }
}

let hScore = document.querySelector("#hscore");
let cScore = document.querySelector("#cscore");
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

  hScore.textContent = humanScore.toString();
  cScore.textContent = computerScore.toString();
  if(humanScore === 5 || computerScore === 5)
    FinalizeResults();
  console.log("(player score, computerscore): (", humanScore, ", ", computerScore, ")");
  return true;
}

/** UI ELEMENTS
 */
function CreateButton(parent, text)
{
  if (!parent || !(typeof body !== Object))
    throw new Error("Invalid parent element");

  let button = document.createElement("button");
  button.id = "#button-" + text.toLowerCase();
  button.textContent = text;
  parent.append(button);
}

// Main logic
function main()
{
  const body = document.querySelector("body");
  let selectionMenu = document.createElement("div");
  selectionMenu.className = "selection";

  CreateButton(selectionMenu, "Rock");
  CreateButton(selectionMenu, "Paper");
  CreateButton(selectionMenu, "Scissors");

  selectionMenu.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON")
    {
      let humanChoice = "";
      switch(e.target.id)
      {
      case "#button-rock":
        humanChoice = rock;
        break;
      case "#button-paper":
        humanChoice = paper;
        break;
      case "#button-scissors":
        humanChoice = scissors;
        break;
      default:
        console.error("Error! invalid selection selected: ", e.target.id);
        return;
      };
      PlayRound(humanChoice, GetComputerChoice());
    }
  });
  body.append(selectionMenu);
}
main()