//Ocultar mensagem de erro
function ocultarErro(){
    
    //Alterando as características CSS do H1
    var exibirErro = document.getElementsByTagName("h1")[0].style.display="none";
    
}

//Validar
function validar(){
    
    //Obter os objetos
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cargo = document.getElementById("cargo");
    var mensagem = document.getElementById("mensagem");
    var exibirErro = document.getElementsByTagName("h1")[0];
    
    //Validação
    if(nome.value == ""){
        exibirErro.innerHTML = "O campo nome não pode estar vazio.";
        exibirErro.style.display = "block";
        nome.focus;
        return false;
        
    }else if(nome.value.length < 3){
        exibirErro.innerHTML = "O campo nome deve ter pelo menos três letras.";
        exibirErro.style.display = "block";
        nome.focus;
        return false;
        
    }else if(email.value == ""){
        exibirErro.innerHTML = "O campo e-mail não pode estar vazio.";
        exibirErro.style.display = "block";
        nome.focus;
        return false;
        
    }else if(email.value.indexOf("@") == -1){
        exibirErro.innerHTML = "O campo e-mail deve ter @.";
        exibirErro.style.display = "block";
        email.focus;
        return false;
        
    }else if(email.value.indexOf(".") == -1){
        exibirErro.innerHTML = "O campo e-mail deve ter ponto.";
        exibirErro.style.display = "block";
        email.focus;
        return false;
        
    }else if(cargo.value == "Cargo"){
        exibirErro.innerHTML = "Informe um cargo";
        exibirErro.style.display = "block";
        cargo.focus;
        return false;
        
    }else if(mensagem.value == ""){
        exibirErro.innerHTML = "O campo mensagem não pode estar vazio.";
        exibirErro.style.display = "block";
        mensagem.focus;
        return false;
        
    }else if(mensagem.value.length < 10){
        exibirErro.innerHTML = "O campo mensagem deve ter pelo menos 10 caracteres.";
        exibirErro.style.display = "block";
        mensagem.focus;
        return false;
    }
    
}