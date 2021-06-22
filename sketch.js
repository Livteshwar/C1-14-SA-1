var ball={
x:60,
y:40,
radius:20,
color:["blue","pink","green","red"],
x_speed:0,
y_speed:0
}

function setup() 
{
  createCanvas(400, 400);
 
}

function draw() 
{
  background(220);
  
  circle(ball.x,ball.y,ball.radius);
  fill(ball.color[2])
  ball.x_speed =1
  ball.x=ball.x + ball.x_speed
  
}

