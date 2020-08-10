function validar(){
var error=false;
var mensajeError="";
var contador=0;

if(document.getElementById("nombreYapellido").value==""){
    error=true;
    mensajeError+="<p>El campo nombre y apellido no puede quedar vacio</p>";
}
if(document.getElementById("dni").value==""){
    error=true;
    mensajeError+="<p>El campo DNI no puede quedar vacio</p>";
}
if(document.getElementById("telefono").value==""){
    error=true;
    mensajeError+="<p>El campo telefono no puede quedar vacio</p>";
}
if(!validarRadioButton("sexo")){
    error=true;
    mensajeError+="<p>El campo sexo tiene que estar elegido</p>";
}
if(document.getElementById("ciudad").value==0){
    error=true;
    mensajeError+= "<p>El campo provincia tiene que estar seleccionado</p>";
}
if(!validarRadioButton("viajo")){
    error=true;
    mensajeError+="<p>El campo viajo tiene que estar seleccionado</p>"
}
if(!validarRadioButton("fiebre")){
    error=true;
    mensajeError+="<p>El campo fiebre tiene que estar seleccionado</p>";
    contador++;
}
if(!validarRadioButton("dolorCabeza")){
    error=true;
    mensajeError+="<p>El campo dolor tiene que estar seleccionado</p>";
    contador++;
}
if(!validarRadioButton("dolorGarganta")){
    error=true;
    mensajeError+="<p>El campo dolor garganta tiene que estar seleccionado</p>";
    contador++;
}
if(!validarRadioButton("dificultadRespiratoria")){
    error=true;
    mensajeError+="<p>El campo de dificultad respiratoria tiene que estar seleccionado</p>";
    contador++;
}




if(error){
    document.getElementById("mensajeError").innerHTML=mensajeError;
    return false
}
else{
    document.getElementById("mensajeError").innerHTML="<p>Formulario Completado Con Exito!</p>"
    return true;
}
console.log("Usted tiene "+contador+" sintomas");
}

function validarRadioButton(nombreRadio){
    var opciones= document.getElementsByName(nombreRadio);
    var seleccionado=false;
    for(i in opciones){
        if(opciones[i].checked){
            seleccionado=true;
        }
    }
    return seleccionado;
}

function cambiar(){
    var opciones= document.getElementsByName("viajo");
    for(i in opciones){
        if(opciones[i].value=="si" &&opciones[i].checked){
            document.getElementById("paises").style.display="inline-block";
        }
        if(opciones[i].value=="no" &&opciones[i].checked){
            document.getElementById("paises").style.display="none";
        }
    }
}

function cambiar2() {
    var opciones= document.getElementsByName("dificultadRespiratoria");
    for(i in opciones){
        if(opciones[i].value=="si" &&opciones[i].checked){
            document.getElementById("direccion").style.display="inline-block";
        }
        if(opciones[i].value=="no" &&opciones[i].checked){
            document.getElementById("direccion").style.display="none";
        }
    }

}
