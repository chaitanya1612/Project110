Webcam.attach('#camera');
// additionl code 
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log("ml5 Version :",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded()
{
    console.log("Model Loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}
