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

var timer_text = document.getElementById("text");
var nr = document.getElementById("mess");
var  texts = ["20 new booking have been made in the last 10 minutes!", "Don't think too much and book your visit", "You won't regret seeing casa Batllo", "There are just 15 visits left to book this week", "It's always crowdede here, remember to book a visit in advance"];
var h1 = document.getElementById("c");


let count = 0;
let intervalId;
var x = 5;

h1.addEventListener("click", function(){
intervalId = setInterval(function(){

    count+=1;
    let x = 0;
    for(; x<=count; x++)
    {timer_text.textContent =  texts[x%texts.length];
        nr.textContent = "(message number " + x + ")";
        //console.log(x);
    }
    

},3000);

});


timer_text.addEventListener("click", function()
{
    clearInterval(intervalId);
    nr.textContent = "(ati oprit cele  " + x + " mesaje)";
});



document.getElementById("pscr").style.opacity = 0;

/*if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
     var  xmlDoc = this.responseXML;
     var tours = xmlDoc.getElementsByTagName("tour");

     for(var i = 0; i < tours.length; i++)
    {
    var text = tours[i].getAttribute("val");
    var x = "<ul>";
    var rez = text.split("/");
    for(var j = 0; j<rez.length; j++)
      x+="<li>" + rez[j] + "</li>";

    
    x += "</ul>";
    document.getElementById("pscr").innerHTML += x;


  }
}
}


xmlhttp.open("GET", "Tours_info.xml", false);
xmlhttp.send();
*/
  

  
// var parser = new DOMParser();
// var doc = parser.parseFromString(xmlhttp.responseText, "text/xml");
// var tours = doc.getElementsByTagName("tour");

// for(var i = 0; i < tours.length; i++)
// {
//     var val = tours[i].childNodes;
//     var x = "<ul>";
//     for(var j = 0; j < val.length; j++)
//     {
//         //document.getElementById("pscr").innerHTML += val[j].nodeValue;
//         x += "<li>" +val[j].nodeValue + "</li>";

//     }
//     x += "</ul>";
//     document.getElementById("pscr").innerHTML += x;

// }

// xmlhttp.open("GET", "Tours_info.xml", false);
// xmlhttp.send();

var bookButton = document.getElementById("Save");
var viewButton = document.getElementById("Info");

bookButton.onclick = event => {
  
    event.preventDefault();
}

viewButton.onclick = event =>
{
    event.preventDefault();
    document.getElementById("pscr").style.opacity = 1;
}
//   xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         myFunction(this);
//     }
//  };


 //function myFunction(xml) {
//      var xmlDoc = xml.responseXML;
//      var x = xmlDoc.getElementsByTagName("tour")[0];
//      var y = x.childNodes[0];
//      document.getElementById("pscr").innerHTML = y.nodeValue;
// // }





var Calendar = function(divId) {
			
    this.divId = divId;
    
    this.DaysOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    var d = new Date();
    
    this.CurrentMonth = d.getMonth();
    this.CurrentYear = d.getFullYear();
    
};

// Goes to next month
Calendar.prototype.nextMonth = function() {
    if ( this.CurrentMonth == 11 ) {
        this.CurrentMonth = 0;
        this.CurrentYear = this.CurrentYear + 1;
    }
    else {
        this.CurrentMonth = this.CurrentMonth + 1;
    }
    this.showCurrent();
};

// Goes to previous month
Calendar.prototype.previousMonth = function() {
    if ( this.CurrentMonth == 0 ) {
        this.CurrentMonth = 11;
        this.CurrentYear = this.CurrentYear - 1;
    }
    else {
        this.CurrentMonth = this.CurrentMonth - 1;
    }
    this.showCurrent();
};

// Show current month
Calendar.prototype.showCurrent = function() {
    this.showMonth(this.CurrentYear, this.CurrentMonth);
};

// Show month (year, month)
Calendar.prototype.showMonth = function(y, m) {
    
    var d = new Date()
        // First day of the week in the selected month
        , firstDayOfMonth = new Date(y, m, 1).getDay()
        // Last day of the selected month
        , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
        // Last day of the previous month
        , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
        
    
    var html = '<table>';
    
    // Write selected month and year
    html += '<tr><td colspan="7">' + this.Months[m] + ' - ' + y + '</td></tr>';
    
    // Write the header of the days of the week
    html += '<tr>';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
        html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';
    
    // Write the days
    var i=1;
    do {
        
        var dow = new Date(y, m, i).getDay();
        
        // If Sunday, start new row
        if ( dow == 0 ) {
            html += '<tr>';
        }
        // If not Sunday but first day of the month
        // it will write the last days from the previous month
        else if ( i == 1 ) {
            html += '<tr>';
            var k = lastDayOfLastMonth - firstDayOfMonth+1;
            for(var j=0; j < firstDayOfMonth; j++) {
                html += '<td class="not-current">' + k + '</td>';
                k++;
            }
        }
        
        // Write the current day in the loop
        html += '<td>' + i + '</td>';
        
        // If Saturday, closes the row
        if ( dow == 6 ) {
            html += '</tr>';
        }
        // If not Saturday, but last day of the selected month
        // it will write the next few days from the next month
        else if ( i == lastDateOfMonth ) {
            var k=1;
            for(dow; dow < 6; dow++) {
                html += '<td class="not-current">' + k + '</td>';
                k++;
            }
        }
        
        i++;
    }while(i <= lastDateOfMonth);
    
    // Closes table
    html += '</table>';
    
    // Write HTML to the div
    document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function() {
    
    // Start calendar
    var c = new Calendar("divCalendar");			
    c.showCurrent();
    
    // Bind next and previous button clicks
    getId('btnNext').onclick = function() {
        c.nextMonth();
    };
    getId('btnPrev').onclick = function() {
        c.previousMonth();
    };
    
   

}

// Get element by id
function getId(id) {
    return document.getElementById(id);
}

///document.getElementsByTagName("td")[0].onclick= function(){alert(aaa);}

///var matrice = math.zeros(12, 7);
var matrice = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]

getId('Save').onclick = function(){

    var fname = document.forms["f3"]["fname"];
    var lname = document.forms["f3"]["lname"];
    var date = document.forms["f3"]["the-date"];
    var time = document.forms["f3"]["the-time"];
    ///alert(fname);
    var zi = date.substr(0,2);
    var luna = date.substr(2,2);
    if(zi.charAt(0) == '0')
    zi = zi.substr(1);
    if(luna.charAt(0) == '0')
    luna = luna.substr(1);
    if(matrice[luna][zi] + 1 > 20)
    alert("There are no more visitis to book, please select a new date");
    else
    matrice[luna][zi] += 1;


}