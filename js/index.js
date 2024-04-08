const checkUserLogged = () => {
    const user = sessionStorage.getItem('logged');
    if(!user) {
        window.location.href = '../login.html'
    }
}

checkUserLogged();