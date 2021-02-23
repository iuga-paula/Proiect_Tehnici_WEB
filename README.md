# CASA BATLLO - site de prezentare
Proiect individual pentru tehnici web: Un site adresat turistilor care pot sa vadă informații despre Casa Battlo din Barcelona, evenimetele ce au loc aici, pot lasa un feedback sau o înbrebare prin intermediul formularelor sau pot face o rezervare pentru a vizita muzeul.


## Tehnologii utilizate:
Proiectul a fost creat in Visual Studio Code folosind:
* HTML
* CSS
* JavaScript
* NODE.js
* XML
* JSON

## Realizarea unui captcha 
Pe lângă alte taskuri, proiectul implementează un captcha:
In cadrul formularului de review  există și un câmp pentru captcha și deasupra lui un div în care se genereaza aleator caractere. Caracterele vor fi la pozitii diferite dar fară a se intersecta pe orizontală (adică nu apare un caracter sub un alt caracter ci doar in lateral, chiar dacă la coordonate y diferite). Caracterele pot fi cifre, litere mici și litere mari. Pe caracterele respective se aplică aleator atât transformari de tip rotate, cât și skew, se aplică culori diferite aleatoare, caracterele sunt de dimensiuni aleatoare, și din font-family-uri aleatoare. Există un buton cu "creeaza alt captcha" care generează alte litere stilizate in alt mod aleator. Utilizatorul trebuie sa completeze campul de sub captcha cu exact caracterele generate in div. In cazul in care se da submit fară captcha corect comepletat, utilizatorul primeste o alertă cu mesajul "Captcha gresit!" și automat se genereaza alt captcha.

![Captcha](https://github.com/iuga-paula/Proiect_Tehnici_WEB/blob/Screenshots-%26%26-Demos/Captcha.JPG)
