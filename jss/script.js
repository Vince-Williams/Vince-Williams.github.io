var lightMode = getCookie('lightMode');

var lightSheet = document.getElementById("lightSheet")
var darkSheet = document.getElementById("darkSheet")

// if lightMode turned off, display dark stylesheet
var colorSwitch = document.getElementById("colorSwitch")
colorSwitch.innerText = ""

if (lightMode == 'false') {
    console.log("Turning dark mode on...");
    colorSwitch.innerText = "Light Mode"
    darkSheet.media = ""

}
else {
    {
        console.log("Turning light mode on...");
        colorSwitch.innerText = "Dark Mode"
        darkSheet.media = "none"


    }
}

function changeSheet() {
    //make lightMode equal NOT lightMode
    lightMode = !lightMode;
    setCookie("lightMode", lightMode, 1)


    colorSwitch.innerText = ""

    if (lightMode == 'false') {
        console.log("Turning dark mode on...");
        colorSwitch.innerText = "Light Mode"
        darkSheet.media = ""

    }
    else {
        {
            console.log("Turning light mode on...");
            colorSwitch.innerText = "Dark Mode"
            darkSheet.media = "none"

        }
    }



}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

