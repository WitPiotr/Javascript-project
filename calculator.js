const myCalculatorHTML = document.querySelector("#calculator");
const myCalculatorButton = document.querySelector("#calculatorButton");
const result = document.getElementById("result");
const buttonsCal = Array.from(document.getElementsByClassName('buttonCal'));


myCalculatorButton.addEventListener('click', function(e){
    ctx.clearRect(0, 0, can.width, can.height);
    title.innerHTML = "Calculator";
    document.getElementById("myButton").style.display = "none";
    document.getElementById("can").style.display = "none";
    document.getElementById("forms").style.display = "none";
    myCalculatorHTML.style.display = "";
    about.style.display = "none";
});

buttonsCal.map(button => {
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){

            case 'C':
                result.innerText ='';
                break;
            case 'mod':
                result.innerText +='%';
                break;
            case '√':
                try{
                    result.innerText = eval(result.innerText);
                    result.innerText = Math.sqrt(result.innerText);
                }catch{
                    result.innerText = "Error" 
                }
                break;

            case 'x²':
                try{
                    result.innerText = eval(result.innerText);
                    result.innerText = Math.pow(result.innerText, 2);
                }catch{
                    result.innerText = "Error" 
                }
                break;
            case 'n!':
                try{
                    result.innerText = eval(result.innerText);
                    result.innerText = factorial(result.innerText);
                }catch{
                    result.innerText = "Error" 
                }
                break;
            case '=':
                try{
                    result.innerText = eval(result.innerText);
                }catch{
                    result.innerText = "Error"
                }
                break;
            case '←':
                if (result.innerText){
                    result.innerText = result.innerText.slice(0, -1);
                }
                break;

            default:
                if(result.innerText == "Error" || result.innerText == "Infinity" || result.innerText == "undefined"){
                    result.innerText = e.target.innerText;
                }else{result.innerText += e.target.innerText;}

        }
   

    });
}); 


window.addEventListener('keydown', (e)=>{
    switch(e.key){

        case "Delete":
            result.innerText ='';
            break;

        case '=':
            try{
                result.innerText = eval(result.innerText);
            }catch{
                result.innerText = "Error"
            }
            break;
        case 'Enter':
            try{
                result.innerText = eval(result.innerText);
            }catch{
                result.innerText = "Error"
            }
            break;
        case 'Backspace':
            if (result.innerText){
                result.innerText = result.innerText.slice(0, -1);
            }
            break;
        case "0":
            result.innerText +='0';
            break;
        case "1":
            result.innerText +='1';
            break;
        case "2":
            result.innerText +='2';
            break;
        case "3":
            result.innerText +='3';
            break;
        case "4":
            result.innerText +='4';
            break;
        case "5":
            result.innerText +='5';
            break;
        case "6":
            result.innerText +='6';
            break;
        case "7":
            result.innerText +='7';
            break;
        case "8":
            result.innerText +='8';
            break;
        case "9":
            result.innerText +='9';
            break;
        case "+":
            result.innerText +='+';
            break;
        case "-":
            result.innerText +='-';
            break;
        case "/":
            result.innerText +='/';
            break;
        case "Delete":
            result.innerText +='';
            break;
        case "*":
            result.innerText +='*';
            break;
        case ",":
            result.innerText +='.';
            break;
 
    };
});



function factorial(n){
    if (n == 0 || n == 1){
        return 1;
    }else{
        return factorial(n-1)*n;
    }
        
}