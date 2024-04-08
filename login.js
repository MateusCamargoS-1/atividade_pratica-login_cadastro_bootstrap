const formLogin = document.getElementById('formLogin');
const alert = document.getElementById('alert');


formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;

    app.post('/login', {
        email,
        password,
    })
    .then(function (res) {
        appendAlert(res.data.msg, 'success')
        sessionStorage.setItem('logged', email)
        window.location.href = './index.html'
    })
    .catch(function (err) {
        console.log(err)
        // appendAlert(err.response.data.msg, 'danger')
    })

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

const checkUserLogged = () => {
    const user = sessionStorage.getItem('logged');
    if(user) {
        window.location.href = './index.html'
    }
}

checkUserLogged();