function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', function() {
    const regBtn = document.getElementById('regBtn');
    const alertSuccess = document.getElementById('alert-success');
    const alertDanger = document.getElementById('alert-danger');

    regBtn.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;
        const terminos = document.getElementById('terminos').checked;

        if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '' || !terminos) {
            alertDanger.classList.add('show');
            return;
        }

        if (password1.length < 6 || password1 !== password2) {
            alertDanger.classList.add('show');
            return;
        }

        alertSuccess.classList.add('show');
    });
});