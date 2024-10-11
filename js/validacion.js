document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registroForm');
    const nombre = document.getElementById('validationNombre');
    const apellido = document.getElementById('validationApellido');
    const email = document.getElementById('validationEmail');
    const password1 = document.getElementById('validationPassword1');
    const password2 = document.getElementById('password2');
    const checkTerms = document.getElementById('checkTerms');
    const alertSuccess = document.getElementById('alert-success');
    const alertDanger = document.getElementById('alert-danger');

    form.addEventListener('submit', function(event) {
        //Evita el envío por defecto del formulario
        event.preventDefault();
        let isValid = true;

        resetValidity();

        //Definir las validaciones
        if (!nombre.value) {
            setInvalid(nombre, "Debes completar este campo.");
            isValid = false;
        }
        if (!apellido.value) {
            setInvalid(apellido, "Debes completar este campo.");
            isValid = false;
        }
        if (!validateEmail(email.value)) {
            setInvalid(email, "El email debe tener un formato válido.");
            isValid = false;
        }
        if (password1.value.length < 6) {
            setInvalid(password1, "La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }
        if (password1.value !== password2.value) {
            setInvalid(password2, "Las contraseñas no coinciden.");
            isValid = false;
        }
        if (!checkTerms.checked) {
            setInvalid(checkTerms, "Debes aceptar los términos y condiciones.");
            isValid = false;
        }

        if (isValid) {
            console.log("Formulario válido. Enviando...");
            showSuccess();
        } else {
            console.log("Formulario inválido. Revisa los campos.");
            showError();
        }
    });

    // Resetear los mensajes de error
    function resetValidity() {
        [...form.elements].forEach(input => {  // (... - spread operator) se utiliza para convertir el objeto form.elements (HTMLCollection) en un array
            input.setCustomValidity('');
            input.classList.remove('is-invalid');
            input.classList.remove('is-valid');
        });
    }
    //Validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Define los caracteres validos para el email
        return re.test(email); //Confirma que el email contenga caracteres validos
    }
    //Establecer un campo como inválido
    function setInvalid(input, message) {
        input.setCustomValidity(message);
        input.classList.add('is-invalid');
        console.log(`${input.id} inválido: ${message}`);
    }

    function showSuccess() {
        alertSuccess.classList.add('show');
        alertDanger.classList.remove('show');
    }

    function showError() {
        alertDanger.classList.add('show');
        alertSuccess.classList.remove('show');
    }

    form.addEventListener('input', function(event) {
        const input = event.target;
        if (input.checkValidity()) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        }
        
        // Para activar el estado de validación de Bootstrap
        form.classList.add('was-validated'); 
    });

    //
    document.querySelectorAll('.btn-close').forEach(button => {
        button.addEventListener('click', () => {
            alertSuccess.classList.remove('show');
            alertDanger.classList.remove('show');
        });
    });
});
