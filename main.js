function preload(){
    pic=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

nosex =""
nosey=""

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300,)
    video.hide()

    poseModel = ml5.poseNet(video, modelloaded)
    poseModel.on('pose', gotResults)
}
function gotResults(r){

    if (r.length>0){
    //console.log(r);
    nosex = r[0].pose.nose.x;
    nosey = r[0].pose.nose.y;
    console.log(nosex, nosey)
    }
}


function modelloaded(){
    console.log("model loaded successfully");
}


function draw() {
    image(video, 0, 0, 300, 300)
    // fill("red")
    // stroke("white")
    // circle(nosex, nosey, 20)
    image(pic, nosex-20, nosey, 40, 40)
}

function take_snapshot(){
    save('myFilterImage.png');
}

