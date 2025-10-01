$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid(false);


    // TODO 2 - Create Platforms
    createPlatform(250, 630, 100, 1, "brown");
    createPlatform(625, 580, 200, 1)
    createPlatform(750, 450, 125, 1)
    createPlatform(600, 320, 85, 1)
    createPlatform(850, 250, 100, 1)
    createPlatform(1235, 200, 5,5)
    // TODO 3 - Create Collectables
    createCollectable("diamond", 1230, 0);
    createCollectable("steve", 610, 0);
    createCollectable("max", 900, 200)
    
    // TODO 4 - Create Cannons
    createCannon("top", 720, 1000)
    createCannon("right", 400, 1000)
    createCannon("left", 500, 1000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
