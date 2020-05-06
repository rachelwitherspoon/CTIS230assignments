myitem = document.getElementById("firsttest");
//Identify item

myitem.addEventListener("click", onClick);
//add the action that will result in the text turning green
myitem.addEventListener("mouseout", onMouseOut);
//when the cursor is moved

function onClick() {
    myitem.style.color = "mistyrose";
    myitem.style.backgroundColor = "midnightblue";
}
//clarify that function is that the text should turn pink and background should turn blue when clicked on

function onMouseOut() {
    myitem.style.color = "";
    myitem.style.backgroundColor = "";
}
//When the cursor is moved the text returns to it's original format
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onAnotherButtonClick);
function onAnotherButtonClick() {
    otheritem.style.color = "mistyrose";
    otheritem.style.backgroundColor = "midnightblue";
}

anotherbutton = document.getElementById("anotherbutton");
anotheritem = document.getElementById("anotherbuttontest");
anotherbutton.addEventListener("click", onButtonClick);
function onButtonClick() {
    anotheritem.style.color = "mistyrose";
    anotheritem.style.backgroundColor = "midnightblue";
}

header = document.getElementById("header");
header.addEventListener("mouseover", onMouseOver);
function onMouseOver() {
    header.style.color = "white";
}
header = document.getElementById("header");
header.addEventListener("mouseout", onMouseOut);
function onMouseOut() {
    header.style.color = "";
}

textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);
function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}

theImgDiv = document.getElementById("logo");
theImage = document.getElementById("logoimage");
theBigImage = document.getElementById("largeview");
cardShown = false;

theImgDiv.addEventListener("click", makeBigImage);
//theBigImage.addEventListener("click", hideBigImage);
theBigImage.innerHTML = "";

function makeBigImage() {
    if (theBigImage.innerHTML == "") {
        bigimage = document.createElement("img");
        bigimage.src = "Images/logo.jpg";
        theBigImage.appendChild(bigimage);
        theBigImage.classList.remove("dontshow");

        if (theImgDiv.style.position == "") {
            theImgDiv.style.position = "absolute";
            theImgDiv.style.top = "300";
            theImgDiv.style.left = "300";
            theImage.style.width = "40%";
            theImage.src = "Images/ecg.jpg";
        }
        else {
            theImgDiv.style.position = "";
            theImage.style.width = "100";
        }
    }
}