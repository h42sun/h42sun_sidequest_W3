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
      "That’s ok! hope you'll go out more, instead of shutting yourself in all the time.\n" +
      "Go for some fresh air once in a while, alright?";
    //draw text.
    text(lines, 400, 160);
  } else if (collect > 0 && collect < 4) {
    // ---- Screen title ----
    fill(0);
    textAlign(CENTER, TOP);
    textSize(36);
    text("End of Day: Explored...", 400, 80);

    const lines =
      "Today was a good day. \n" +
      "You went to the beach, smelled the salty sea air, saw the blue waves crash against the soft, white sand...\n" +
      "I wonder what tomorrow has in store for us.";

    //draw text.
    text(lines, 400, 160);
  } else if (collect >= 4) {
    // ---- Screen title ----
    fill(0);
    textAlign(CENTER, TOP);
    textSize(36);
    text("End of Day: Collectionist", 400, 80);

    const lines =
      "Today was a good day. \n" +
      "You went to the beach, smelled the salty sea air, saw the blue waves crash against the soft, white sand...\n" +
      "You saw all the beach has to offer, and picked up a pretty piece of seaglass as well.\n" +
      "I wonder what tomorrow has in store for us.";
    //draw text.
    text(lines, 400, 160);
  }
}
