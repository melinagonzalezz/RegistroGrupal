function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

function validarDatos(){
    
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var password1 = document.getElementById("password1").value.trim();
    var password2 = document.getElementById("password2").value.trim();
    var terminos = document.getElementById("terminos").checked;

    //Campos vacios

    if(!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError();
        return;
    }
    
    // Largo de contraseña
    
    if (password1.length < 6) {
        showAlertError();
        return;
    }
    
    //Terminos

    if(!terminos){
    showAlertError();
    return;
    }
    

    //Contraseña igual
    if (password1 !== password2) {
       showAlertError();    
       return;        
    }

    //Si todo es correcto
    showAlertSuccess();

}
    
    document.getElementById("regBtn").addEventListener("click", validarDatos); 

