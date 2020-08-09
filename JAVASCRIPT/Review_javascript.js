
var adds = document.getElementsByClassName("add");
var elem = document.getElementById("5");
var i = 0;
while (i<adds.length)
{
    adds[i].addEventListener("click", function(){this.style.visibility = "hidden";
    alert("Looks like you've hidden the add, for tickets please visit: https://www.casabatllo.es/en/online-tickets/");
    if(elem != null)
       { 
       elem.nextElementSibling.innerHTML = "Search for tickets online at " + "https://www.casabatllo.es/en/online-tickets/ ".link("https://www.casabatllo.es/en/online-tickets/");
       elem.nextElementSibling.className = "a";
       elem.nextElementSibling.classList.add("recl");
       }
    },true)
    i++;
}




var d = new Date();
d.setFullYear(2020);
d.setMilliseconds(05);
document.getElementsByTagName("footer")[0].append(d);

// var myclock = setInterval(Clock, 1000);
// function Clock() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementsByTagName("footer")[0].lastElementChild.innerHTML = t;
//   }

// document.getElementsByTagName("footer")[0].lastElementChild.onclick = function()
// {
//     clearInterval(myclock);
// }

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




//Task "Utilizatorul Indecis"
var q1 = 0;
var q2 = 0;
var q3 = 0;

document.getElementById("q1").addEventListener("focusout", function(){
                  if(document.getElementById("q1").value == "") q1 += 1; 
                  /*alert(q1)*/});


document.getElementById("q2").addEventListener("focusout", function(){
                    if(document.getElementById("q2").value == "") q2 += 1; 
                    /*alert(q2)*/});

document.getElementById("q3").addEventListener("focusout", function(){
                      if(document.getElementById("q3").value == "") q3 += 1; 
                      /*alert(q3)*/});

document.getElementById("undecided").onclick  = event => {
  
                      event.preventDefault(); 
                       var min = Math.max(q1,q2,q3);

                       if(min == q1)
                       document.getElementById("q1").style.backgroundColor = "red";
                       else if(min == q2)
                       document.getElementById("q2").style.backgroundColor = "red";
                       else if(min == q3)
                       document.getElementById("q3").style.backgroundColor = "red";
                      }



///Task "Captcha"
 var characters = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
 var fonts = ["Lucida Console, Monaco, monospace","Courier New, Courier, monospace","Comic Sans MS, cursive, sans-serif","Arial Black, Gadget, sans-serif","Impact, Charcoal, sans-serif","Georgia, serif", "Palatino Linotype, Book Antiqua, Palatino, serif", "Times New Roman, Times, serif", " Arial, Helvetica, sans-serif", "Tahoma, Geneva, sans-serif"]
 var font_size = [ "small" , "medium", "large", "x-large", "xx-large", "100%", "250%", "2cm", "50px", "60px"];
 var tr = ["skew(0)", "skew(15deg, 15deg)", "skew(-0.06turn, 18deg)", "skew(.312rad)","rotate(45deg)", "rotate(30deg)", "rotate(30deg)", "rotate(10deg)", "rotate(-30grad)", "rotate(-10grad)", "rotate(-20grad)"]
 var cuv_generat;
 //var x = 100;


 function Captcha(){
   cuv_generat = "";
  for(let p=0; p<6;p++)
  {
    var character;

    if((p*3)%2)
     character = characters[Math.floor(Math.random() * characters.length)];
    else 
      character = Math.floor(Math.random() * 10).toString();

    cuv_generat += character;

    var red = Math.floor(Math.random() * 256);//generez culoare
    var green = Math.floor(Math.random()  *256);
    var blue = Math.floor(Math.random() *256);
    var randomColour = ["rgb(",red,",",green,",",blue,")"].join("");

    
    var node = document.createElement("span");  
    var textnode = document.createTextNode(character);
    node.appendChild(textnode);
    node.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];//generez font-family
    node.style.color = randomColour;
    node.style.fontSize = font_size[Math.floor(Math.random() * font_size.length)];//generez marimea fontului
    node.style.marginLeft = "15px";
    /*node.style.position = "absolute";
    x+=32
    node.style.left = x +  "px"; 
    node.style.top = 1510 + "px";*/
    
    node.style.display = "inline-block";
    node.style.transform = tr[Math.floor(Math.random() * tr.length)];//generez efect
    document.getElementById("captcha").appendChild(node);

  }

}
Captcha();

document.getElementById("altcaptcha").onclick  = event => {
   y  = 100;
  event.preventDefault(); 
  var div = document.getElementById("captcha");//sterg captcha anterior
  for(let i = 0; i <div.childNodes.length;i++)
    div.removeChild(div.childNodes[i]);
  Captcha();
}

//alert(cuv_generat);


document.getElementById("send1").onclick = function(){
  if(document.getElementById("capt").value != cuv_generat)
  {
    ///alert(document.getElementById("capt"));
    alert("Wrong Captcha!");
  var div = document.getElementById("captcha");//sterg captcha anterior
  for(let i = 0; i <div.childNodes.length;i++)
    div.removeChild(div.childNodes[i]);
    //y = 100;
    Captcha();
  }

}



function validate(){
 
    var string_to_alert = ""
    var x = document.forms["form2"]["fname"].value;
    var bmpDigits = /[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0AE6\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]/;
    var hasNumber = RegExp.prototype.test.bind(bmpDigits);

    if (x == "") {
      string_to_alert = "First name must be filled out";
      alert(string_to_alert);
      return false;
    }
    var y = document.forms["form2"]["lname"].value;
    if(y == "" &&  x == ""){
        string_to_alert = "Last name must be fiiled out";
        alert(string_to_alert);
        return false;
    }
    else if(y == "")
    {
        string_to_alert = "First and last name must be filled out";
        alert(string_to_alert);
        return false;
    }
    if(hasNumber(x) ===true || hasNumber(y) === true)
    {
        if(string_to_alert != "")
        {
            string_to_alert += "and names contain nonalfabetic characters";
            alert(string_to_alert);
            return false;
        }
        else
        {
            string_to_alert = "Names contain nonalfabetic characters";
            alert(string_to_alert);
            return false;

        }
        
    }
    //var z = document.forms["form2"]["multilinetext"].value;
   var z = document.getElementById("text").value;
    if(z == "" || z == "Delete this line and leave your comment here")
    {
        if(string_to_alert != "")
        {
            string_to_alert += "and you didn't enter a comment";
            document.getElementById("text").focus();
            alert(string_to_alert);
            return false;
        }
        else
        {
            string_to_alert = "You didn't enter a comment";

            alert(string_to_alert);
            return false;

        }

    }

        

return true;


}

///const fs = require('fs');
var x = document.forms["form2"]["Send"];
var CSSprop = window.getComputedStyle(x, null).getPropertyValue("color");
document.querySelector("#save").style.color = CSSprop;


const formId = "comment";
const url = location.href;
const formIdentifier = `${url}${formId}`;
const saveButton = document.querySelector("#save");
let form = document.querySelector(`#${formId}`);
let formElements = form.elements;


const getFormData = () => { //ia elem din form si le returneaza sub forma unui obiect cu formIdentifier pe post de cheie
    let data = { [formIdentifier]: {} }; 
    for (const elem of formElements) {
      if (elem.name.length > 0) {
        data[formIdentifier][elem.name] = elem.value;
      }
    }
    return data;
  };

  saveButton.onclick = event => {
  
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    const message = "Form draft has been saved!";
    alert(message);

    var data_json = JSON.stringify(data, null, 2);
    // fs.writeFile("Comments.json",data_json, finished);
    // function finished(err)
    // {
    //   console.log("all form 2 set");
    // }


  }

  const populateForm = () => { //se reumple formularul cu ce a completat utilizatorul inainte
    if (localStorage.key(formIdentifier)) {
      const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
      for (const element of formElements) {
        if (element.name in savedData) {
          element.value = savedData[element.name];
        }
      }
      const message = "Form has been refilled with saved data!";
      alert(message);
    }
  };
  document.onload = populateForm(); 


//   function allStorage() {

//     var archive = {}, // Notice change here
//         keys = Object.keys(localStorage),
//         i = keys.length;

//     while ( i-- ) {
//         archive[ keys[i] ] = localStorage.getItem( keys[i] );
//         alert(archive[keys[i]]);
//     }
    
//     return archive;
// }
// document.onload = allStorage();

