const SHORT_HAND =  //shorthand so i don't clog up stuff with big blockos of textos
{
    "01auth_note" : 
    "So... we're getting further and further away from the sun. \
     The nerds in R&D are still trying to figure out how to put us back or how to make an artificial sun. \
     Even with all the funding in the world, we're still f[REDACTED]ed.  To make things worse, \
     The World Machine keeps breaking, and I can't figure out why.  I think the only course of action is to implement \
     an auxilary machine to get to the root of this business. \
     I'll tweak my old antivirus to search for errors during world implementation \
     and throw it in there. \
     <br> <br> <br> \
     Anyways, I'm going to take \"the kids\" out for ice cream. <br>  The things you can do with biomimicry, huh? huh????????????????"
}

const FLAG_KEYS =
{
    "PR_OS_AIST": "/flag01/main.html"
}

function submFlag()
{
    let flag = document.getElementById("flagform");

    console.log(flag.value, FLAG_KEYS[flag.value]);

    if(FLAG_KEYS[flag.value])
    {
        console.log("hello!");
        window.location.href = FLAG_KEYS[flag.value];
    }
}


function reDirect(link)
{
    window.location.href = 'https://'.concat(link);
}



function displayPasswordPrompt(password, followFunction)
{
    function passwordFunction()
    {
        console.log(pwordInput.value); /* why does this work? */

       if(pwordInput.value == password)
       {
            console.log("2")
            
            let stringSplit = followFunction.split("|");

            console.log(stringSplit, " - hello!")
            
            if(stringSplit[0] == "dispText")
            {
                //gotta say the whole "being able to call functions from the future" thing is pretty sweet
                displayText(stringSplit[1]); 
            }                
       }
       bkDiv.remove();
    }


    const screen = document.getElementById("mainscreen");

    const bkDiv      = document.createElement("div");
    const pwordDiv   = document.createElement("div");
    const pword_h1   = document.createElement("h1");
    const pwordForm  = document.createElement("form");
    const pwordInput = document.createElement("input");

    bkDiv.className      = "bkCoverDiv";
    pwordDiv.className   = "passwordDiv";

    pwordForm.className  = "formParent flag01";
    
    pwordForm.onsubmit =   
    function()
    {
        passwordFunction();return false;
    }

    pwordInput.className = "flagForm";
    pwordInput.type = "text";

    pwordForm.appendChild(pwordInput);

    pwordDiv.appendChild(pword_h1);
    pwordDiv.appendChild(pwordForm);

    pword_h1.innerHTML = "This file is password-protected,<br> please enter your password to continue:";

    bkDiv.appendChild(pwordDiv);

    screen.appendChild(bkDiv);
}

function displayText(text)
{
    removeTabs();

    const screen = document.getElementById("mainscreen");

    const bkDiv   = document.createElement("div");

    const textDiv = document.createElement("div");
    const texth1 = document.createElement("h1");

    const tabDiv = document.createElement("div");
    const tabh1 = document.createElement("h1");

    bkDiv.className = "bkCoverDiv";

    textDiv.className = "textHolding textArea"
    texth1.className  = "textHolding maintext"

    tabDiv.className = "textHolding tab"

    tabh1.className = "tabtext";
    tabh1.innerHTML = "x";
    tabh1.onclick = 
    function()
    {
        removeTabs();
    }

    if(SHORT_HAND[text] != undefined)
    {
        texth1.innerHTML = SHORT_HAND[text];
    }
    else
    {
        texth1.innerHTML = text;
    }

    bkDiv.appendChild(textDiv);

    textDiv.appendChild(tabDiv);
    textDiv.appendChild(texth1);

    tabDiv.appendChild(tabh1);

    screen.appendChild(bkDiv);
}

function displayImage(imageName)
{
    removeTabs();

    const screen = document.getElementById("mainscreen");

    const bkDiv   = document.createElement("div");

    const exith1 = document.createElement("h1");
    const mainImage  = document.createElement("img");

    bkDiv.className = "bkCoverDiv";

    exith1.className = "tabtext image";
    exith1.innerHTML = "x";
    exith1.onclick = 
    function()
    {
        removeTabs();
    }

    mainImage.src = "/assets/images/".concat(imageName);

    bkDiv.appendChild(exith1);
    bkDiv.appendChild(mainImage);

    screen.appendChild(bkDiv);
}

function removeTabs()
{
    let tabs = document.getElementsByClassName("bkCoverDiv");

    for(let i = 0; i < tabs.length; i++)
    {
        tabs[i].remove();
    }
}

/* very small and stupid functions */
function vsasf(num)
{
switch(num)
{
    case 1: 
        displayImage("clipboard.png");
        navigator.clipboard.writeText("APOAPSIS");
        break;
}
}

document.addEventListener('DOMContentLoaded', function()
{
    
})