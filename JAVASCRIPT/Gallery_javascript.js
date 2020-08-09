//task "Ascunde/afiseaza imagini"
var btn = document.getElementById("Sterge_poze");
var all_images =  document.getElementsByTagName('img'); 
function Efect_click()
{

    if(btn.innerText == "Hide Images")
    {
        for(var i = 0; i < all_images.length; i++)
        {
            all_images[i].style.visibility= "hidden";
        }
        btn.innerText = "Show Images";
        

    }
    else 
    {
        for(var i = 0; i < all_images.length; i++)
        {
            all_images[i].style.visibility= "visible";
        }
    
    btn.innerText = "Hide Images";
    }
}

btn.addEventListener("click", Efect_click);

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

   calculeaza_timp();





var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");
var label = document.getElementsByTagName("label");

button1.onclick = function(){
    button3.style.opacity = 1;
    label[0].style.opacity = 1;

};

var addafter = document.getElementsByClassName("page");
var insphoto = document.getElementsByClassName("picture")
var figures = document.getElementsByTagName("figure");

button3.onclick = function(){//adaugare nod ->figure
    if(document.getElementsByName("fileField")[0].value != ""){
        var string = document.getElementsByName("fileField")[0].value;
        string = string.slice(12);
        alert(string);
        var fig = document.createElement("FIGURE");
         fig.setAttribute("id", "YourFigure");
         insphoto[0].appendChild(fig);

        var photo = document.createElement("IMG");
        //photo.src = document.getElementsByName("fileField")[0].value;
         photo.setAttribute("src", string);
         photo.setAttribute("alt", "Your Photo");
         fig.appendChild(photo);

        var x = document.createElement("FIGCAPTION");
        var t = document.createTextNode("Your photo at casa Batllo");
        x.appendChild(t);
        fig.appendChild(x);
        figures = document.getElementsByTagName("figure");



         
        
    }
};

button2.onclick = function(){///adaugare nod
    var pdel = document.createElement("p");
    var node = document.createTextNode("Select which photo you want to dell");
    pdel.appendChild(node);
    var child = document.getElementsByTagName("label");
    //addafter[0].appendChild(pdel);
    addafter[0].insertBefore(pdel, child[0]);


};

for(i = 0 ; i< figures.length; i++)///stergere nod
{
    figures[i].onclick = function(){
        alert("stergeti " + this.children[0] +  "?")
        this.parentNode.removeChild(this);
                                                         
};
}



var d = new Date();
d.setFullYear(2020);
d.setMilliseconds(05);
document.getElementsByTagName("footer")[0].append(d);

