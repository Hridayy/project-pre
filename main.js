
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    })
    camera=document.getElementById("camera")
    Webcam.attach('#camera')
    
    function take_snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML='<img id="capt"src="' +data_uri+ '"/>'
    })}
    
    console.log("ml5version:",ml5.version)
    classifier=ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/wL79LgJ3W/",modelLoaded)
    
    function modelLoaded()
    console.log(modelLoaded)
    
    var prediction
    
    function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The First Prediction is"+ prediction; 
    utterThis=new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterThis)}