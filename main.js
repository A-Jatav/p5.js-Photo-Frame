function preload(){
};

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
};

function draw(){
    image(video, 40, 40, 420, 420);
    fill("green");
    stroke("red");
    circle(20, 20, 40);
    rect(40, 10, 420, 20);
    circle(480, 20, 40);
    rect(470, 40, 20, 430);
    circle(480, 480, 40);
    rect(40, 470, 420, 20);
    circle(20, 478, 40);
    rect(10, 39, 20, 420);
};

function take_snapshot(){
    save("Image.png")
};