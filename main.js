function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function take_snapshot(){
    save('myFilteredImage.png');
}
function modelLoaded(){
    console.log("Pose Net Loaded!!!!!");
}
function preLoad(){
    imagethingy = loadImage('https://i.postimg.cc/Hx9czqGm/clown-nose-png-removebg-preview.png');
};
noseX = 0;
noseY = 0;
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(imagethingy, noseX, noseY, 30, 30);
}
circle(noseX, noseY, 20); 
    fill(255, 0, 0,);
    stroke(255, 255, 255);