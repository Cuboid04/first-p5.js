function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

 
}
 tint_color = "";
function draw() {
  image(video, 200, 100, 250, 250);
  tint(tint_color);
  fill("green");
  rect(40, 50, 20, 380);
  rect(580, 50, 20, 380);
  rect(50, 420, 550, 20);
  rect(50, 40, 550, 20);
  fill("red");
  circle(50, 50, 40);
  circle(590, 430, 40);
  circle(590, 50, 40);
  circle(50, 430, 40);

}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("colour_name").value;
}

