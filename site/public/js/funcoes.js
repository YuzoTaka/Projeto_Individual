// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;
    var fk = sessionStorage.FK_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null && id != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_id.innerHTML = id;

        // finalizarAguardar();
    } 
    if (fk != 'null') {
        id_cargo.innerHTML = `Dependente`
    } else {
        id_cargo.innerHTML = `Admin`
    }

    
    // else {
    //     window.location = "../login.html";
    // }
}

function dependente() {
    var fk = sessionStorage.FK_USUARIO;
    if (fk != 'null') {
        alert(`Você não tem permissão para adicionar dependente`)
    } else {
        window.location = "dependente.html"
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_dados");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_dados");
    divModal.style.display = "none";
}

