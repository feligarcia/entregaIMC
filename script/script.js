
//Calculo del IMC y se muestra en caja
function calIMC(){
    let peso = document.getElementById("Peso").value;
    let alto = document.getElementById("Altura").value;
    if(peso <= 0 || isNaN(peso) || alto<= 0 || isNaN(alto)){
        document.querySelector('#resultadoIMC').textContent = "Ingrese un valor invalido";
    }else{


    let altura = alto / 100
    let IMCt = peso / (altura * altura)
    IMC = IMCt.toFixed(2);
    mostrarResultado(IMC);
        let potition = (IMC / 40) * 100
        let selector = document.querySelector("#medidor");
        if(IMC <= 40){
        selector.style.marginLeft = potition+"%";
        }else{
            selector.style.marginLeft = "100%";
        }
}}
function mostrarResultado(valorResultado) {
    document.querySelector('#resultadoIMC').textContent = valorResultado;
    capturarDatos();
}

//localstorage
document.addEventListener('DOMContentLoaded',function(){
    obtenerLocalStorage();
})
var personas = 1;
function capturarDatos(){
    let Edad = document.getElementById("Edad").value;
    let Peso = document.getElementById("Peso").value;
    let Altura = document.getElementById("Altura").value;
    let resultadoIMC = document.getElementById("resultadoIMC").textContent;
    let sexo = document.querySelector('input[name="sexoEscoger"]:checked').value;
    

    let objeto ={
        Edad: Edad,
        Peso: Peso,
        alto: Altura,
        IMC: resultadoIMC,
        sex: sexo,
        
    }
    localStorage.setItem('Persona'+personas,JSON.stringify(objeto)); 
    personas = personas + 1;
    if(personas > 15){
        let i = personas - 15;
        localStorage.removeItem('Persona'+i);
    }
}

function obtenerLocalStorage(){

    let objeto = localStorage.getItem('Persona');
    console.log(objeto);
}