const rightBackBtn = {
  x: 400, // x position (centre of the button)
  y: 560, // y position (centre of the button)
  w: 220, // width
  h: 70, // height
  label: "Return", // text shown on the button
};

let rightVisited = false;

function drawRight() {
  //add one collection point
  if (!rightVisited) {
    collect++;
    rightVisited = true;
  }

  // Set background for the game screen
  background(176, 243, 245);
  rectMode(CORNER);
  //sand
  fill(255, 250, 212);
  rect(0, 480, 800, 330);
  //teal rock
  fill(169, 184, 181);
  ellipse(673, 510, 45, 35);
  //coral rock
  fill(194, 142, 118);
  ellipse(750, 525, 50, 40);
  //black rock
  fill(46, 44, 44);
  ellipse(590, 560, 80, 30);
  //blue rock
  fill(130, 139, 181);
  ellipse(623, 583, 70, 30);
  //white rock
  fill(232, 232, 232);
  ellipse(710, 550, 60, 35);
  //drift wood
  fill(163, 142, 132);
  quad(450, 650, 430, 720, 800, 720, 800, 660);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(32);
  text("Right Side", 400, 80);

  // ---- Instruction text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line instructions
  const lines =
    "The wind blows through your hair, your clothes flapping in the wind.\n" +
    "It smells salty and fresh, like the ocean. May be a little obvious, but it's true.\n" +
    "\n" +
    "You look down; there are some cool rocks here, of all sorts of colours.\n" +
    "There's even a piece of drift wood. Cool.";

  text(lines, 400, 145);

  // ---- Back button ----
  // This button lets the player return to the start screen
  const rightBackBtn = {
    x: 400, // centred horizontally
    y: 560,
    w: 220,
    h: 70,
    label: "Return",
  };

  // Draw the back button
  drawRightButton(rightBackBtn);

  // Change cursor when hovering over the button
  cursor(isHover(rightBackBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function rightMousePressed() {
  // Button data must match the draw position
  const rightBackBtn = { x: 400, y: 560, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(rightBackBtn)) {
    currentScreen = "game";
  }
}

function rightKeyPressed() {
  if (key === "r" || "R") {
    currentScreen = "game";
  }
}

function drawRightButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check whether the mouse is hovering over the button
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Subtle colour change on hover for visual feedback
  fill(
    hover
      ? color(209, 239, 240) // lighter blue on hover
      : color(255), // white on normal state
  );

  // Draw the button shape
  rect(x, y, w, h, 12);

  // Draw the button text
  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
