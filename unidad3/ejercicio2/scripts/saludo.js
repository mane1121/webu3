window.addEventListener('DOMContentLoaded',
    function(){
        //Acceder al botón
        var btn=document.getElementById("btnSaludar");
        //Asignar el click con una función con nombre
        //btn.onclick=saludar;
        /*
        btn.addEventListener('click', function(){
            let nombre=document.getElementById("txtNombre").value;
            document.getElementById("txtSaludo").value="Buenos días " + nombre;
            document.getElementById("divSaludo").innerText="Buenos días <b>" + nombre + "</b>";
        });*/
        btn.onclick=function(){
            let nombre=document.getElementById("txtNombre").value;
            document.getElementById("txtSaludo").value="Buenos días " + nombre;
            document.getElementById("divSaludo").innerText="Buenos días <b>" + nombre + "</b>";
        };

        document.getElementById("btnCalcular").addEventListener('click',function(){
            //Obtener los valores
            let num1= parseInt(document.getElementById("txtNum1").value);
            let num2=parseInt(document.getElementById("txtNum2").value);
            //Identificar la operación
            let operacion=document.getElementById("cboOperacion").value;
            let resultado;
            if(operacion == 'Suma'){
                resultado=suma(num1,num2);
            }else if(operacion == 'Resta'){
                resultado=resta(num1,num2);
            }else if(operacion == 'Multiplicación'){
                resultado=multiplicacion(num1,num2);
            }else{
                resultado=division(num1,num2);
            }
            //Indicar el resultado
            document.getElementById("spnResultado").innerText=resultado;
        });

    }
);

function suma(n1,n2){
    return n1+n2;
}

function resta(n1,n2){
    return n1-n2;
}

function multiplicacion(n1,n2){
    return n1*n2;
}

function division(n1,n2){
    return n1/n2;
}




//Añadir el click del botón saludar (primero con atributo onclick
// y después añadirlo al control )
//Leer lo que se ingresó en la caja de texto
//Enviar el saludo (alert,poner el saludo en un span)
function saludar(){
    //Leer nombre que se haya ingresado en la caja de texto
    //DOM -> Document Object Model
    //console.log(document.getElementById("txtNombre"));
    
    let txtNombre=document.getElementById("txtNombre");
    let nombre=txtNombre.value;
    
    //let nombre=document.getElementById("txtNombre").value;
    //alert("Buenos días " + nombre)
    document.getElementById("txtSaludo").value="Buenos días " + nombre;
    document.getElementById("divSaludo").innerText="Buenos días <b>" + nombre + "</b>";
}