//task "Salut Utilizator!";
var your_name = prompt("What's your name?", "Paula Iuga");
//alert(your_name);
var old_title = document.getElementsByTagName("title")[0].innerHTML;
document.getElementsByTagName("title")[0].innerHTML = "Hello, " + your_name + "!";

setTimeout(function(){
    document.getElementsByTagName("title")[0].innerHTML = old_title;
}, 2000 );


//task "Numar cuvinte"
var text = document.body.innerText;
//text = text.replace(/\(.+?\)/g, ' ');
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
    var secunde = timp % 60;
    var minute = Math.floor(timp_petrecut / 60);
    document.getElementsByTagName("footer")[0].lastElementChild.innerHTML = "Time spent on this page: " + minute.toString().padStart(2, '0') + ":" + secunde.toString().padStart(2, '0');
    },1000);
    }

 
window.addEventListener('focus', calculeaza_timp);
window.addEventListener('blur', stopTimer);
function stopTimer() {
    window.clearInterval(calcul);
   }
/*function calculeaza_timp(){
timer = Date.now();
calcul = setInterval(function()
{
timp_petrecut = timp_petrecut_pe_pagina() + (Date.now() - timer);
localStorage.setItem(path, timp_petrecut_pe_pagina);
timer = parseInt(Date.now());
//timp_petrecut = new Date(timp_petrecut.getTime());
var timp = parseInt(timp_petrecut)/1000;
var secunde = timp_petrecut.getSeconds();
var minute = timp_petrecut.getMinutes();
//var sec;
//var min;
document.getElementsByTagName("footer")[0].lastElementChild.innerHTML = "Time spent on this page: " + minute + ":" +secunde;
},1000);
}
*/





function Hide_elem(id) {

    document.getElementById(id).style.visibility = "hidden";
    if (id == "add")
        alert("Looks like you've hidden the add, for tickets please visit: https://www.casabatllo.es/en/online-tickets/");

}

function changeText(elem) {

    elem.style.fontWeight = "bold";
}

function back_to_normal_style(elem) {
   
    elem.style.fontWeight = "normal";
}

document.getElementById("add").onclick = function () { Hide_elem("add") };

var t = document.getElementById("table");

for (var i = 0; i < t.rows.length; i++) {
    if (i % 2 ) {
        t.rows[i].onclick = function () {
            this.style.backgroundColor = "grey";
            this.onclick = function () {this.style.backgroundColor = "#f2f2f2";}

        }
    }

}

var l1 = document.getElementsByTagName("p");
for (i = 0; i < l1.length; i++) {
    l1[i].onmouseover = function () {changeText(this); }
    l1[i].onmouseout = function () { back_to_normal_style(this); }
}

var lista_linkuri = ['https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window','https://www.casabatllo.es/en/online-tickets/visit-casa-batllo/','https://www.casabatllo.es/en/online-tickets/visit-be-the-first/', 'https://www.casabatllo.es/en/online-tickets/theatrical-visit-casa-batllo/', 'https://www.casabatllo.es/en/online-tickets/visit-casa-batllo/','https://www.casabatllo.es/en/online-tickets/visit-be-the-first/', 'https://www.casabatllo.es/en/online-tickets/theatrical-visit-casa-batllo/'];
lista_linkuri.push("https://www.casabatllo.es/en/virtual-tour/");
var t1 = document.getElementById("table");
for (var i = 1; i < t1.rows.length; i++){
    t.rows[i].onclick = function () { //window.location = lista_linkuri[i];
                                    var win = window.open(lista_linkuri[i-1]);
                                    win.focus();
                                    }


}




var d = new Date();
d.setFullYear(2020);
d.setMilliseconds(05);
document.getElementsByTagName("footer")[0].append(d);

