const balls = document.getElementsByClassName('ball');
const eyeBalls = document.getElementsByClassName('eye-ball');
var eyeCount = 0;
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  for (let i = 0; i< balls.length; i++){
  balls[i].style.left = eyeBalls[i].style.left = x;
  balls[i].style.top = eyeBalls[i].style.top = y;
  balls[i].transform = eyeBalls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
setRandom = (number)=>{
      return Math.floor(Math.random()* number);
}
document.body.onclick = (event)=>{
  eyeCount++;
  let eye = document.createElement('div');
  let ball = document.createElement('div');
  let eyeBall = document.createElement('div');
  eye.classList = 'eye';
  eye.id = `eye${eyeCount}`;
  ball.id = `ball${eyeCount}`;
  ball.classList = 'ball';
  eyeBall.classList = 'eye-ball';
  ball.style.backgroundColor = `rgb(${setRandom(255)},${setRandom(255)},${setRandom(255)})`;
  let left = event.clientX;
  let top = event.clientY;
  let width = setRandom(240);
  let height = width/2;
  let ballWidth = Math.floor(width/3);
  eye.style.width = width; 
  eye.style.height = height;
  ball.style.width = ball.style.height = ballWidth;
  eyeBall.style.width = eyeBall.style.height = ballWidth/2.5;
  eye.style.left = left - width;
  eye.style.top = top - height;
  eye.style.zIndex = eyeCount;
  ball.style.zIndex = eyeCount;
  eyeBall.style.zIndex = eyeCount;
  document.getElementById('eyes').appendChild(eye);
  document.getElementById(`eye${eyeCount}`).appendChild(ball);
  document.getElementById(`ball${eyeCount}`).appendChild(eyeBall);
}
