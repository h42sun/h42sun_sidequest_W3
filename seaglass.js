const backBtn = {
  x: 400, // x position (centre of the button)
  y: 560, // y position (centre of the button)
  w: 220, // width
  h: 70, // height
  label: "Return", // text shown on the button
};

let seaglassVisited = false;

function drawSeaglass() {
  //add one collection point
  if (!seaglassVisited) {
    collect++;
    seaglassVisited = true;
  }

  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(32);
  text("Shore", 400, 80);

  // ---- Instruction text ----
  textSize(18);

  const lines =
    "You used your finger to write your name and draw a smiley face on it. Nice.\n" +
    "Oh…? there seems to be something buried under the sand.\n" +
    "…! It’s a pretty piece of green seaglass. Neat!";

  text(lines, 400, 160);

  // Draw the back button
  drawSeaglassButton(backBtn);

  // Change cursor when hovering over the button
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function seaglassMousePressed() {
  // Button data must match the draw position
  //   const backBtn = { x: 400, y: 560, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(backBtn)) {
    currentScreen = "game";
  }
}

function seaglassKeyPressed() {
  if (keyCode === "r" || "R") {
    currentScreen = "game";
  }
}

function drawSeaglassButton({ x, y, w, h, label }) {
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
