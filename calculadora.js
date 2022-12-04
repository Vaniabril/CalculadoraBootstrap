window.addEventListener("load" , ()=> {  /*escuchamos cuando se carga el documento*/
/*creamos dos constantes y los guardamos */
const display = document.querySelector(" .calculadora-display");
const keypadButtons = document.getElementsByClassName("keypad-button")
/*cree otra constante para convertir el htmlcollection en array*/
const keypadButtonsArray = Array.from(keypadButtons);

keypadButtonsArray.forEach( (button) => {
    /*a cada boton le agregue un listenr*/
button.addEventListener ("click" , ()=>{
    calculadora(button, display)
       })
   })


});

function calculadora (button, display){
    switch(button.innerHTML){
        case "C":
        borrar(display)
            break;
        case "=":    
        calcular(display);
        break;
    

    default:
        actualizar(display, button);
        break;        
    }
}
   
function calcular(display){
   display.innerHTML=eval (display.innerHTML)     
}
function actualizar(display, button){
    if(display.innerHTML ==0) {
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;

}
 function borrar(display) {

    display.innerHTML = 0;
 }