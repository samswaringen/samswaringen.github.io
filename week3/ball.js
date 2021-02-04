function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
    ball = document.createElement("div");
    ball.style.backgroundColor = color;
    ball.className = "ball";
    size = getRandom(20);
    ball.style.height = ball.style.width = size;
    ball.style.top = ycoord;
    ball.style.left = xcoord;
    document.body.appendChild(ball);
    if (!fixed) {
      // only free balls will be updated
      balls.push(ball);
      x.push(xcoord);
      y.push(ycoord);
      velocity_x.push(velx);
      velocity_y.push(vely);
    }
  }
  function makeBox(xcoord, ycoord, color){
    box = document.createElement('div')
    box.style.backgroundColor = `${color}`;
    box.className = `box`;
    box.style.height = size
    box.style.width = size;
    box.style.top = ycoord;
    box.style.left = xcoord;
    document.getElementById('gameArea').appendChild(box);
  }