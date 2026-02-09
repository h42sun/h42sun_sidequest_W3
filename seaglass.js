const seaglassBackBtn = {
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
  //smiley face
  fill(232, 220, 179);
  ellipse(402, 700, 10);
  ellipse(428, 700, 10);
  strokeWeight(10);
  stroke(232, 220, 179);
  line(398, 715, 415, 725);
  line(415, 725, 432, 715);
  //seaglass
  noStroke();
  fill(45, 110, 45, 210);
  ellipse(460, 700, 10, 13);

  // ---- Screen title ----
  fill(0);
  textAlign(CENTER, TOP);
  textSize(32);
  text("Shore", 400, 80);

  // ---- Instruction text ----
  textSize(18);

  const lines =
    "You used your finger to write your name and draw a smiley face on it. Nice.\n" +
    "\n" +
    "Oh…? there seems to be something buried under the sand.\n" +
    "\n" +
    "…! It’s a pretty piece of green seaglass. Neat!";

  text(lines, 400, 145);

  // Draw the back button
  drawSeaglassButton(seaglassBackBtn);

  // Change cursor when hovering over the button
  cursor(isHover(seaglassBackBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function seaglassMousePressed() {
  // Button data must match the draw position
  // const seaglassBackBtn = { x: 400, y: 560, w: 220, h: 70 };

  // If the button is clicked, return to the start screen
  if (isHover(seaglassBackBtn)) {
    currentScreen = "game";
  }
}

function seaglassKeyPressed() {
  if (key === "r" || key === "R" || keyCode === DOWN_ARROW) {
    currentScreen = "game";
  }
}

function drawSeaglassButton({ x, y, w, h, label }) {
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
