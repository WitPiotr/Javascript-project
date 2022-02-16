const archimeses = document.querySelector("#archimedes");
const koch = document.querySelector("#koch");
const platek = document.querySelector("#smok");
const projekt = document.querySelector("#projekt");
const formsy = document.querySelector("#forms");
const about = document.querySelector("#about");
let title = document.querySelector("#title");
let can = document.querySelector("#can");
let ctx = can.getContext('2d')
let rysuj = document.querySelector("#submitM")



const wymiary = {
    w: 620, 
    h: 620
};

projekt.addEventListener('click', function(e){
    title.innerHTML = "About project";
    [...document.getElementsByClassName("tmp")].map(n => n && n.remove());
    [...document.getElementsByName("br")].map(n => n && n.remove());
    document.getElementById("myButton").style.display = "none";
    document.getElementById("can").style.display = "none";
    about.style.display = "";
    myCalculatorHTML.style.display = "none";
});

archimeses.addEventListener('click', function(e){
    ctx.clearRect(0, 0, can.width, can.height);
    
    title.innerHTML = "Archimedean spiral";
    [...document.getElementsByClassName("tmp")].map(n => n && n.remove());
    [...document.getElementsByName("br")].map(n => n && n.remove());

    //var1
    var lab1 = document.createElement("Label");
    var var1 = document.createElement("INPUT");
    var mybr1 = document.createElement('BR');
    var mybr2 = document.createElement('BR');



    lab1.setAttribute("for", var1);
    lab1.innerHTML = "Length: ";
    lab1.classList.add("tmp");


    var1.setAttribute("type", "range");
    var1.setAttribute('id','var1')
    var1.setAttribute('min', 1)
    var1.setAttribute('max', 30)
    var1.classList.add("tmp");
    var1.classList.add("slider");

    mybr1.classList.add("tmp");
    mybr2.classList.add("tmp");




    formsy.appendChild(lab1);
    formsy.appendChild(mybr1);
    formsy.appendChild(var1);
    formsy.appendChild(mybr2);

    //var2
    var lab2 = document.createElement("Label");
    var var2 = document.createElement("INPUT");
    var mybr1 = document.createElement('br');
    var mybr2 = document.createElement('br');

    lab2.setAttribute("for", var2);
    lab2.innerHTML = "Tightness: ";
    lab2.classList.add("tmp");


    var2.setAttribute("type", "range");
    var2.setAttribute('id','var2')
    var2.setAttribute('min', 1)
    var2.setAttribute('max', 30)
    var2.classList.add("tmp");
    var2.classList.add("slider");

    mybr1.classList.add("tmp");
    mybr2.classList.add("tmp");

    formsy.appendChild(lab2);
    formsy.appendChild(mybr1);
    formsy.appendChild(var2);
    formsy.appendChild(mybr2);

    //var3
    var lab3 = document.createElement("Label");
    var var3 = document.createElement("INPUT");
    var mybr1 = document.createElement('br');
    var mybr2 = document.createElement('br');

    lab3.setAttribute("for", var3);
    lab3.innerHTML = "Points: ";
    lab3.classList.add("tmp");


    var3.setAttribute("type", "range");
    var3.setAttribute('id','var3')
    var3.setAttribute('min', 1)
    var3.setAttribute('max', 6000)
    var3.classList.add("tmp");
    var3.classList.add("slider");

    mybr1.classList.add("tmp");
    mybr2.classList.add("tmp");

    formsy.appendChild(lab3);
    formsy.appendChild(mybr1);
    formsy.appendChild(var3);
    formsy.appendChild(mybr2);

    document.getElementById("myButton").style.display = "";
    document.getElementById("can").style.display = "";
    about.style.display = "none";
    myCalculatorHTML.style.display = "none";
    document.getElementById("forms").style.display = "";
});

koch.addEventListener('click', function(e){
    ctx.clearRect(0, 0, can.width, can.height);
    title.innerHTML = "Koch curve";
    [...document.getElementsByClassName("tmp")].map(n => n && n.remove());
    [...document.getElementsByName("br")].map(n => n && n.remove());

    //var1
    var lab1 = document.createElement("Label");
    var var1 = document.createElement("INPUT");
    var mybr1 = document.createElement('BR');
    var mybr2 = document.createElement('BR');
    lab1.setAttribute("for", var1);
    lab1.innerHTML = "Steps: ";
    lab1.classList.add("tmp");


    var1.setAttribute("type", "range");
    var1.setAttribute('id','var1')
    var1.setAttribute('min', 1)
    var1.setAttribute('max', 7)
    var1.classList.add("tmp");
    var1.classList.add("slider");

    mybr1.classList.add("tmp");
    mybr2.classList.add("tmp");

    formsy.appendChild(lab1);
    formsy.appendChild(mybr1);
    formsy.appendChild(var1);
    formsy.appendChild(mybr2);
    document.getElementById("myButton").style.display = "";
    document.getElementById("can").style.display = "";
    about.style.display = "none";
    myCalculatorHTML.style.display = "none";
    document.getElementById("forms").style.display = "";
});

platek.addEventListener('click', function(e){
    ctx.clearRect(0, 0, can.width, can.height);
    title.innerHTML = "Heighway dragon";
    [...document.getElementsByClassName("tmp")].map(n => n && n.remove());
    [...document.getElementsByName("br")].map(n => n && n.remove());

    //var1
    var lab1 = document.createElement("Label");
    var var1 = document.createElement("INPUT");
    var mybr1 = document.createElement('BR');
    var mybr2 = document.createElement('BR');
    lab1.setAttribute("for", var1);
    lab1.innerHTML = "Steps: ";
    lab1.classList.add("tmp");


    var1.setAttribute("type", "range");
    var1.setAttribute('id','var1')
    var1.setAttribute('min', 1)
    var1.setAttribute('max', 18)
    var1.classList.add("tmp");
    var1.classList.add("slider");

    mybr1.classList.add("tmp");
    mybr2.classList.add("tmp");

    formsy.appendChild(lab1);
    formsy.appendChild(mybr1);
    formsy.appendChild(var1);
    formsy.appendChild(mybr2);
    document.getElementById("myButton").style.display = "";
    document.getElementById("can").style.display = "";
    about.style.display = "none";
    myCalculatorHTML.style.display = "none";
    document.getElementById("forms").style.display = "";
});

rysuj.addEventListener('click', function(e){
    e.preventDefault();
    var varTitle = document.getElementById('title').innerHTML;
    let color = document.getElementById("picker").value;
    if(varTitle == "Archimedean spiral"){
        let dlugoscGet = document.getElementById("var1").value; 
        let ciasnoscGet = document.getElementById("var2").value; 
        let pointsGet = document.getElementById("var3").value; 
        ctx.clearRect(0, 0, can.width, can.height);
        drawSpiral(dlugoscGet, ciasnoscGet, pointsGet, color)
    }if (varTitle == "Koch curve") {
        let stepsGet = document.getElementById("var1").value; 

        ctx.clearRect(0, 0, can.width, can.height);
        console.log(color)
        drawKochCurve(stepsGet, color)
    } if (varTitle == "Heighway dragon") {
        let stepsGet = document.getElementById("var1").value; 
        ctx.clearRect(0, 0, can.width, can.height);
        var width = can.width;
        var start = new Vector2f(3 * width / 8, 3 * width / 8);
        var end = new Vector2f(6 * width / 8, 3 * width / 8);
        drawDragon(start, end, stepsGet, color)
    }

 
})


window.addEventListener('load', function(e){
    document.getElementById("myButton").style.display = "none";
    document.getElementById("can").style.display = "none";
    myCalculatorHTML.style.display = "none";
    title.innerHTML = "About project";

    [...document.getElementsByClassName("tmp")].map(n => n && n.remove());
    [...document.getElementsByName("br")].map(n => n && n.remove());
    var aboutProject = document.createElement("P");
    aboutProject.innerHTML = "The aim of this project is to show mostly my Javascript skills. I created this simple page to present you an interactive website with one DNS. Furthermore I focused on using basic Javascript tools like loops, conditional statements, functions and others. I tried to minimalise HTML and CSS codes. I hope you will appreciate it.";
    about.appendChild(aboutProject);
});


function drawSpiral(dlugosc, ciasnosc, points, color){
    let x1 = 0;
    let y1 = 0;
    let x2;
    let y2;
    can.width = wymiary.w;
    can.height = wymiary.h;
    // can.style.border = "1px solid orange";

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.translate(can.width / 2, can.height / 2);

    for(let i =0; i < points; i++){
        let t = i * dlugosc * Math.PI / points;
        x2 = ciasnosc * t * Math.cos(t);
        y2 = ciasnosc * t * Math.sin(t);
        ctx.moveTo(Math.floor(x1), Math.floor(y1));
        ctx.lineTo(Math.floor(x2), Math.floor(y2));
        x1 = x2;
        y1 = y2;
    }
    ctx.stroke();
    ctx.restore();
};

const rotacja = function(){
    let kat = Number(can.getAttribute('kat'));

    if(kat < 360){
        kat += 10;
        can.setAttribute('kat', kat)
        can.style.transform = 'rotate(' + kat +'deg)';

    }else{
        kat = 0
        can.setAttribute('kat', kat)
    }


};

can.addEventListener("click", function(){
    for (let i = 0; i < 37; i++) {
        setTimeout(function timer() {
            rotacja();
        }, i * 25);
      }      
});

var drawKochCurve = function (steps, color) {
    can.width = wymiary.w;
    can.height = wymiary.h;
    ctx.beginPath();
    ctx.strokeStyle = color;
    var x = 5;// punkt startu
    var y = can.height / 2;// punkt startu
    var wt = can.width - 2 * x;// szerokosc rysunku
    ctx.save();

    ctx.translate(x, y);
    ctx.moveTo(0, 0);
    subflake(--steps, wt);
    ctx.restore();
    ctx.stroke();
};

var subflake = function (steps, wt) {
    ctx.save();
    if (steps === 0) {
        ctx.lineTo(wt, 0);
    } else {
        ctx.scale(1 / 3, 1 / 3);
        subflake(steps - 1, wt);
        ctx.rotate(-1 / 3 * Math.PI);
        subflake(steps - 1, wt);
        ctx.rotate(2 / 3 * Math.PI);
        subflake(steps - 1, wt);
        ctx.rotate(-1 / 3 * Math.PI);
        subflake(steps - 1, wt);
    }
    ctx.restore();
    ctx.stroke();
    ctx.translate(wt, 0);
};

var drawDragon = function (start, end, steps, strokeStyle) {

    ctx.save();
    if (steps === 0) {
        ctx.beginPath();
        ctx.strokeStyle = strokeStyle;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

    } else {
        var v1 = new Vector2f((start.x + end.x) / 2, (start.y + end.y) / 2);
        var v2 = new Vector2f(v1.x + end.y - v1.y, v1.y + start.x - v1.x);
        ctx.strokeStyle = strokeStyle;
        drawDragon(end, v2, steps - 1);
        drawDragon(start, v2, steps - 1);

    }
    ctx.stroke();
    ctx.restore();
};

var Vector2f = function (x, y) {
    switch (arguments.length) {
        case 0:
            this.x = 0.0;
            this.y = 0.0;
            break;
        case 2:
            this.x = arguments[0];
            this.y = arguments[1];
            break;
    }
};