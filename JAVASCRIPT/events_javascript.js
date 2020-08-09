//task "Ravase"
var fortune = ["Your road to glory will be rocky, but fulfilling.", "Courage is not simply one of the virtues, but the form of every virtue at the testing point.", "Be on the alert to recognize your prime at whatever time of your life it may occur.", 
"Patience is your alley at the moment. Don’t worry!", "Nothing is impossible to a willing heart.", "Don’t worry about money. The best things in life are free.", "Don’t pursue happiness – create it.", "Courage is not the absence of fear; it is the conquest of it.", "Nothing is so much to be feared as fear.", "All things are difficult before they are easy.", "A ship in harbor is safe, but that’s not why ships are built.", "The real kindness comes from within you.", "If you want the rainbow, you have to tolerate the rain.", "Fear is interest paid on a debt you may not owe."]
var randomElement;
//document.getElementById("sectiune_speciala").style.display = "none";

window.onload = function(){

    //randomElement  = fortune[random(fortune.length-1)];
    randomElement = fortune[Math.floor((Math.random()*fortune.length))];
    document.getElementById("sectiune_speciala").innerHTML = randomElement;
    //document.getElementById("sectiune_speciala").style.display = "block";
    
}

//task "Numar cuvinte"
var text = document.body.innerText;
text = text.replace(/\(.+?\)/g, ' ');
text = text.replace(/[^a-z0-9+]+/gi, ' ');
var res = text.split(' ');
//alert(res.length);
var node = document.createElement("p");   
var textnode = document.createTextNode("There are "+ res.length + " words in this page");
node.appendChild(textnode);
document.getElementsByTagName("footer")[0].appendChild(node);
//alert(text);


//task  "Timp petrecut pe pagina"
var timp_petrecut = 0;
var timer;
var calcul;
/*var path = window.location.pathname; //ia numele paginii
var page = path.split("/").pop();*/
var path = document.title;

function timp_petrecut_pe_pagina(){
    timp_petrecut = parseInt(localStorage.getItem(path));
    if(isNaN(timp_petrecut))
    {
        timp_petrecut = 0;
    }

    return timp_petrecut;
}


var node = document.createElement("p");   
var textnode = document.createTextNode("Time spent on this page:  ");
node.appendChild(textnode);
document.getElementsByTagName("footer")[0].appendChild(node);

function calculeaza_timp(){

    calcul = setInterval(function()
    {
    timp_petrecut = timp_petrecut_pe_pagina() + 1;
    localStorage.setItem(path, timp_petrecut);
    var timp = parseInt(timp_petrecut);
    var secunde = timp % 60;;
    var minute = Math.floor(timp_petrecut / 60);
    document.getElementsByTagName("footer")[0].lastElementChild.innerHTML = "Time spent on this page: " + minute.toString().padStart(2, '0') + ":" + secunde.toString().padStart(2, '0');
    },1000);
    }

 
window.addEventListener('focus', calculeaza_timp);
window.addEventListener('blur', stopTimer);
function stopTimer() {
    window.clearInterval(calcul);
   }

calculeaza_timp();