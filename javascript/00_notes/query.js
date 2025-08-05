function main()
{
  let body = document.querySelector("body");

  // creation: paragraph - red
  let paraRed = document.createElement("p");
  paraRed.textContent = "Hey I'm red!";
  paraRed.style.color = "#ff0000";
  body.append(paraRed);

  // creation: heading 3 - blue
  let heading3Blue = document.createElement("h3");
  heading3Blue.textContent = "I'm a blue h3!";
  heading3Blue.style.color = "#0000ff";
  body.append(heading3Blue);

  /** creation: div
   *  <div>
   *    <h1>I'm in a div</h1>
   *    <p>ME TOO!</p>
   *  </div>
   */
  let div = document.createElement("div");

  let h1 = document.createElement("h1");
  h1.textContent = "I'm in a div";
  div.append(h1);

  let p = document.createElement("p");
  p.textContent = "ME TOO!";
  div.append(p);

  body.append(div);
  // !creation: div
}

// Execution of main
main();
