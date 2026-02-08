const backBtn = {
  x: width / 2, // x position (centre of the button)
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

  // Light neutral background
  background(240);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(36);
  text("Left Side", width / 2, 80);

  // ---- Instruction text ----
  textSize(18);

  const lines =
    "The sand is warm from the sunshine.\n" + "It glitters a little, too.";

  text(lines, width / 2, 160);

  // ---- Back button ----
  // This button lets the player return to the start screen
  //   const backBtn = {
  //     x: width / 2, // centred horizontally
  //     y: 560,
  //     w: 220,
  //     h: 70,
  //     label: "Return",
  //   };

  // Draw the back button
  drawLeftButton(backBtn);

  // Change cursor when hovering over the button
  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function leftMousePressed() {
  // Button data must match the draw position
  const backBtn = { x: width / 2, y: 560, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(backBtn)) {
    currentScreen = "game";
  }
}

function drawLeftButton({ x, y, w, h, label }) {
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
