const leftBackBtn = {
  x: 400, // x position (centre of the button)
  y: 560, // y position (centre of the button)
  w: 220, // width
  h: 70, // height
  label: "Return", // text shown on the button
};

let leftVisited = false;

function drawLeft() {
  //add one collection point
  if (!leftVisited) {
    collect++;
    leftVisited = true;
  }

  // Set background for the game screen
  background(176, 243, 245);
  rectMode(CORNER);
  //sand
  fill(255, 250, 212);
  rect(0, 480, 800, 330);
  //crabshell
  fill(176, 96, 69);
  quad(140, 590, 60, 650, 100, 700, 160, 675);
  //crab
  fill(255, 112, 64);
  ellipse(108, 673, 80, 55);
  ellipse(60, 678, 30);
  ellipse(140, 690, 30);
  fill(0);
  ellipse(90, 668, 8);
  ellipse(110, 670, 8);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(32);
  text("Left Side", 400, 80);

  // ---- Instruction text ----
  textSize(18);

  const lines =
    "The sand is warm from the sunshine. It glitters a little, too.\n" +
    "Out the corner of your eye, you see some pretty seashells and corals.\n" +
    "\n" +
    "As you walk over, you notice some of the spiral shells moving.\n" +
    "Oh...! It's a little hermit crab. How cute.";

  text(lines, 400, 145);

  // ---- Back button ----
  // This button lets the player return to the start screen
  //   const backBtn = {
  //     x: 400, // centred horizontally
  //     y: 560,
  //     w: 220,
  //     h: 70,
  //     label: "Return",
  //   };

  // Draw the back button
  drawLeftButton(leftBackBtn);

  // Change cursor when hovering over the button
  cursor(isHover(leftBackBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function leftMousePressed() {
  // Button data must match the draw position
  const leftBackBtn = { x: 400, y: 560, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(leftBackBtn)) {
    currentScreen = "game";
  }
}

function leftKeyPressed() {
  if (key === "r" || "R") {
    currentScreen = "game";
  }
}

function drawLeftButton({ x, y, w, h, label }) {
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
