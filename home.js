const restartBtn = {
  x: 400, // x position (centre of the button)
  y: 560, // y position (centre of the button)
  w: 220, // width
  h: 70, // height
  label: "The ocean calls...", // text shown on the button
};

function drawHome() {
  background(180, 225, 220); //same as starting screen
  if (collect === 0) {
    // ---- Screen title ----
    fill(0);
    textAlign(CENTER, TOP);
    textSize(36);
    text("End of Day: Homebody", 400, 80);

    textSize(18);
    const lines =
      "Wow, guess you didn’t really feel like it...?\n" +
      "\n" +
      "That’s ok! hope you'll go out more, instead of shutting yourself in all the time.\n" +
      "\n" +
      "Go for some fresh air once in a while, alright?";
    //draw text.
    text(lines, 400, 160);
  } else if (collect > 0 && collect < 4) {
    // ---- Screen title ----
    fill(0);
    textAlign(CENTER, TOP);
    textSize(36);
    text("End of Day: Explored...", 400, 80);

    textSize(18);
    const lines =
      "Today was a good day. \n" +
      "\n" +
      "You went to the beach, smelled the salty sea air,\n" +
      "saw the blue waves crash against the soft, white sand...\n" +
      "\n" +
      "Although, it seems the beach has more to offer.\n" +
      "\n" +
      "I wonder what tomorrow has in store for us?";

    //draw text.
    text(lines, 400, 160);
  } else if (collect >= 4) {
    // ---- Screen title ----
    fill(0);
    textAlign(CENTER, TOP);
    textSize(36);
    text("End of Day: Collectionist", 400, 80);

    textSize(18);
    const lines =
      "Today was a good day. \n" +
      "\n" +
      "You went to the beach, smelled the salty sea air,\n" +
      "\n" +
      "saw the blue waves crash against the soft, white sand...\n" +
      "\n" +
      "You saw all the beach has to offer, and picked up a pretty piece of seaglass as well.\n" +
      "\n" +
      "\n" +
      "I wonder what tomorrow has in store for us.";
    //draw text.
    text(lines, 400, 160);
  }
  // Draw the back button
  drawHomeButton(restartBtn);

  // Change cursor when hovering over the button
  cursor(isHover(restartBtn) ? HAND : ARROW);
}

// ------------------------------
// Mouse input for instructions screen
// ------------------------------
// Called from main.js only when currentScreen === "instr"
function homeMousePressed() {
  // If the button is clicked, return to the start screen
  if (isHover(restartBtn)) {
    currentScreen = "start";
  }
}

function homeKeyPressed() {
  if (key === "r" || key === "R" || keyCode === ENTER) {
    currentScreen = "start";
  }
}

function drawHomeButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 200, 150, 220); // warm coral on hover

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210); // soft cream base

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // Important: reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;

  // Draw the label text on top of the button
  fill(40, 60, 70);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
