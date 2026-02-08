const yesBtn = {
  x: width / 2,
  y: 300,
  w: 220,
  h: 70,
  label: "Yes",
};

const noBtn = {
  x: width / 2,
  y: 425,
  w: 220,
  h: 70,
  label: "No",
};

let straightVisit = false;

function drawStraight() {
  //add one collection point
  if (!straightVisited) {
    collect++;
    straightVisited = true;
  }

  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Shore", width / 2, 80);

  // ---- Instruction text ----
  textSize(18);

  // \n creates a line break in the text
  // This is useful for simple multi-line instructions
  const lines =
    "As you walk along the shore, the waves gently crash over your feet…\n" +
    "You couldn’t help but sink them into the wet sand. Leave a signature?";

  text(lines, width / 2, 160);

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
  const yesBtn = { x: width / 2, y: 300, w: 220, h: 70 };
  const noBtn = { x: width / 2, y: 425, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(yesBtn)) {
    collect++;
    currentScreen = "seaglass";
  }

  if (isHover(noBtn)) {
    currentScreen = "game";
  }
}

function drawStraightButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check whether the mouse is hovering over the button
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Subtle colour change on hover for visual feedback
  fill(hover ? color(200, 200, 255, 200) : color(220, 220, 255, 170));

  // Draw the button shape
  rect(x, y, w, h, 12);

  // Draw the button text
  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
