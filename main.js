rightwristx=0;
leftwristx=0;
difference=0;

function preload(){
    

}

function setup(){
Video=createCapture(VIDEO);
Video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

poseNet=ml5.poseNet(Video,modelloaded);
poseNet.on('pose',gotPoses);
}

function draw(){
background('pink');
fill('purple');
textSize(difference);
text('Vidhushi',50,400)

}


function modelloaded(){
    console.log("poseNet is in initialized");
}

function gotPoses(results){
if(results.length>0){
console.log(results);

leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
difference=floor(leftwristx-rightwristx)
}
}