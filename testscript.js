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
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
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