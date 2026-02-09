const yesBtn = {
  x: 400,
  y: 300,
  w: 220,
  h: 70,
  label: "Yes",
};

const noBtn = {
  x: 400,
  y: 425,
  w: 220,
  h: 70,
  label: "No",
};

let straightVisited = false;

function drawStraight() {
  //add one collection point
  if (!straightVisited) {
    collect++;
    straightVisited = true;
  }

  // Set background for the game screen
  background(176, 243, 245);
  rectMode(CORNER);
  //sand
  fill(255, 250, 212);
  rect(0, 480, 800, 330);
  //sea
  fill(93, 227, 208, 160);
  rect(0, 445, 800, 120);
  //white wave edge
  fill(255);
  rect(0, 555, 800, 18);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(32);
  text("Shore", 400, 80);

  // ---- Instruction text ----
  textSize(18);
  const lines =
    "As you walk along the shore, the waves gently crash over your feet…\n" +
    "\n" +
    "You couldn’t help but sink them into the wet sand. Leave a signature?";

  text(lines, 400, 145);

  // Draw the buttons
  drawStraightButton(yesBtn);
  drawStraightButton(noBtn);

  // Change cursor when hovering over the button
  if (isHover(yesBtn) || isHover(noBtn)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function straightMousePressed() {
  // Button data must match the draw position
  const yesBtn = { x: 400, y: 300, w: 220, h: 70 };
  const noBtn = { x: 400, y: 425, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(yesBtn)) {
    collect++;
    currentScreen = "seaglass";
  }

  if (isHover(noBtn)) {
    currentScreen = "game";
  }
}

function straightKeyPressed() {
  if (key === "y" || key === "Y") {
    currentScreen = "seaglass";
  } else if (key === "n" || key === "N") {
    currentScreen = "game";
  }
}

function drawStraightButton({ x, y, w, h, label }) {
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
