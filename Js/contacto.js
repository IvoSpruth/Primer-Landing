function validar(){
    var error= false;
    var mensaje="";

    if(document.getElementById("nombre").value == ""){
        error= true;
        mensaje+= "<p>*El campo nombre no puede estar vacio</p>";
    }
    if(document.getElementById("apellido").value == ""){
        error= true;
        mensaje+="<p>*El campo apellido no puede estar vacio</p>";
    }
    if((document.getElementById("consulta").value).length > 1000){
        error= true;
        mensaje+="<p>No se pueden superar los 1000 caracteres</p>";
    }
    if(document.getElementById("provincia").value==0){
        error=true;
        mensaje+="<p>*El campo provincia tiene que estar ocupado</p>";
    }
    if(validarTelefono()){
        error=true;
        mensaje+="<p>El Campo telefono es incorrecto";
    }
    if(validarEmail()){
        error=true;
        mensaje+="<p>El campo de mail es incorrecto";
    }
    

    if(error){
        document.getElementById("mensaje").innerHTML=mensaje;
        return false;
    }
    else{
        return true;
    }
}

var regexTelefono= /^[0-9]{4}[-]{1}[0-9]{4}$/
var regexEmail= /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
function validarTelefono(){
    var error=false;
    if(!regexTelefono.test(document.getElementById("telefono").value)){
        error=true;
    }
    return error;
}

function validarEmail(){
    var error= false;
    if(!regexEmail.test(document.getElementById("correo").value)){
        error=true;
    }
    return error;
}

function conteo(obj){
    var maxLength = 1000;
    var actualLength = obj.value.length;
    var charRestantes = (maxLength - actualLength);
    
    if(charRestantes < 0){
        document.getElementById("conteo").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    }else{
        document.getElementById("mensajeConteo").innerHTML = charRestantes+'/1000';
    }
}

