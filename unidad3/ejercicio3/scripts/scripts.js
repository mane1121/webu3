var listaProductos=[];
window.onload=function(){

    listaProductos=JSON.parse(localStorage.getItem("listaProductos"));
    
    //dibujar el contenido de la tabla
    listaProductos.forEach(function(elementoActual, indiceElementoActual,arreglo) {
        agregarFila(elementoActual,indiceElementoActual);
    });

    document.querySelector("#btnReporte").addEventListener(
        'click',generarReporte
    );

    document.querySelector("#btnAgregar").addEventListener(
        'click',function(){
            //Obtenga todos los datos de las cajas de texto
            var producto={};//{'nombre':valor,'nombre2':'valor'};
            producto.nombre=document.querySelector("#txtProducto").value;
            producto.precio=document.querySelector("#txtPrecio").value;
            producto.existencia=parseInt(document.querySelector("#txtExistencia").value);
            listaProductos.push(producto);
            //localStorage.setItem("listaProductos",listaProductos);
            
            localStorage.setItem("listaProductos",JSON.stringify(listaProductos));
            console.log(localStorage.getItem("listaProductos"));
            
            agregarFila(producto,listaProductos.length-1);
        }
    );

    /*document.querySelector("#btnAgregar").addEventListener(
        'click',function(){
            //Obtenga todos los datos de las cajas de texto
            var producto={};//{'nombre':valor,'nombre2':'valor'};
            producto.nombre=document.querySelector("#txtProducto").value;
            producto.precio=document.querySelector("#txtPrecio").value;
            producto.existencia=parseInt(document.querySelector("#txtExistencia").value);
            //console.log(producto);
            //alert(producto['nombre']);

            listaProductos.push(producto);
            //listaProductos[0]=producto;
            //listaProductos[2]=producto;
            console.log(listaProductos);

            //Armar una fila con esos datos
            var fila="<tr><td>"+producto.nombre+"</td><td> $ "+
            producto.precio+"</td><td>"+producto.existencia+"</td></tr>";
            //Añadir la fila al html
            var tbody=document.querySelector("#tblProductos tbody");
            var filas=tbody.innerHTML;
            tbody.innerHTML=filas + fila;
        }
    );*/
    /*document.querySelector(".agregar");
    document.querySelector("div");*/

    

}

function agregarFila(producto,indice){
    let tr = document.createElement("tr");
    let tdNombre = document.createElement("td");
    let tdPrecio = document.createElement("td");
    let tdExistencia = document.createElement("td");
    let tdOperaciones = document.createElement("td");
    let btnEliminar = document.createElement("button");
    let btnEditar = document.createElement("button");
    tdNombre.append(producto.nombre);
    tdPrecio.append(producto.precio);
    tdExistencia.innerText=producto.existencia;
    tr.append(tdNombre);
    tr.append(tdPrecio);
    tr.append(tdExistencia);

    btnEditar.innerText="Editar";
    btnEditar.setAttribute("onclick",`editar(${indice})`);
    /*<button onclick="editar(indice)">Editar<button>

    */
    btnEliminar.innerText="Eliminar";
    btnEliminar.onclick=function(){
        alert(indice);
    };
    tdOperaciones.append(btnEditar);
    tdOperaciones.append(btnEliminar);

    tr.append(tdOperaciones);

    //Añadir la fila al html
    var tbody=document.querySelector("#tblProductos tbody");
    
    tbody.append(tr);

}

function editar(indice){
    alert(indice);

}


function generarReporte(){
    //Armar la tabla
    var estructura="<table><thead><tr><th>Producto</>"+
    "<th>Valor de inventario</></tr></thead><tbody>";
    var fila='';
    /*debugger;
    for (const producto in listaProductos) {
        fila=`<tr><td>${producto.nombre}</td><td>
        ${producto.precio*producto.existencia}
        </td></tr>`;
        estructura+=fila;
    }*/
    for(var i=0;i<listaProductos.length;i++){
        fila=`<tr><td>${listaProductos[i].nombre}</td><td>
        ${listaProductos[i].precio*listaProductos[i].existencia}
        </td></tr>`;
        estructura+=fila;
    }     
    estructura+="</tbody></table>";
    
    var div=document.querySelector("#reporte");
    div.innerHTML=estructura;

}
function validarForm(producto){
    if(document.fProducto.producto.value.length<3 && document.fProducto.producto.value.length>20){
        alert("SOLO SE ACEPTAN NOMBRES ENTRE 3 Y 20 CARACTERES");
        document.fProducto.producto.focus();
        return 0;
    }
}