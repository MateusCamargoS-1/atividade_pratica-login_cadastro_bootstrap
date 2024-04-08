const formCadastro = document.getElementById('formSignup');
const alert = document.getElementById('alert');


formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;

    if (password !== rePassword) {
        password.value = ''
        rePassword.value = ''
        return appendAlert('As senhas precisam ser iguais', 'danger');
    }


    app.post('/signup', {
        email,
        username,
        password,
        rePassword
    })
    .then(function (res) {
        appendAlert(res.data.msg, 'success')
        window.location.href = '../login.html';
        
    })
    .catch(function (err) {
        appendAlert(err.response.data.msg, 'danger')
    })

    email.value = ''
    username.value = ''
    password.value = ''
    rePassword.value = ''



})

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `<div>${message}</div>`,
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>',
        '</div>'
    ].join('');
    alert.append(wrapper)
}