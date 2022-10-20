Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 jversion' ,ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/49SYIFHZw/model.json',modelLoaded);

function modelLoaded() 
{
    console.log('model loaded');
}


prediction1 = "";
prediction2 = "";

function speak()
{
    var synth = window.speechSynthesis;
speak_data1 = "The first prediction is "+prediction1;
speak_data1 = "Aad the second prediction is "+prediction2;
var utterhis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
synth.speak(utterhis);
}