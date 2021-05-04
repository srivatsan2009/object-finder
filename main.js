status1="";

function preload() {
}


function setup() {
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO,300,300);
video.hide();
}

function start() {
objectdetector=ml5.objectDetector("cocossd",modeloaded);
document.getElementById("status").innerHTML="status:detectin' objects";
text=document.getElementById("text_input").value;
}

function modeloaded () {
console.log("model loaded!")
status=true;
}

function draw () {
image(video,0,0,300,300);
}