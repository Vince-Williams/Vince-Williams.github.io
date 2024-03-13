var lightMode=lightMode;

function changeSheet(){
//make lightMode equal NOT lightMode
    lightMode = !lightMode;

    var lightSheet = document.getElementById("lightSheet")
    var darkSheet = document.getElementById("darkSheet")

    // if lightMode turned off, display dark stylesheet
    var colorSwitch = document.getElementById("colorSwitch")

    colorSwitch.innerText= ""

    if(lightMode == false){
        console.log("Turning dark mode on...");
        colorSwitch.innerText= "Light Mode"
        darkSheet.media = ""
        lightSheet.media = "none"
    }
    else {
        {
        console.log("Turning light mode on...");
        colorSwitch.innerText= "Dark Mode"
        darkSheet.media = "none"
        lightSheet.media = ""
    }
    }



}

