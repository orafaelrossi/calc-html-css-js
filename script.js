function verificar(){
    var esta_na_tela = document.getElementById("tela_resultado").innerHTML;
    if(esta_na_tela.length < "15"){
        return true;
    }
    else{
        alert("ATINGIU O LIMITE DE DADOS!");
        return false;
    }
}

function inserir(botao_escolhido){
    if(verificar() == true){
        var esta_na_tela = document.getElementById("tela_resultado").innerHTML;
        document.getElementById("tela_resultado").innerHTML = esta_na_tela + botao_escolhido;
    }
    else{
        return;
    }
}

function limpa(){
    document.getElementById("tela_resultado").innerHTML = "";
}

function deleta(){
    var esta_na_tela = document.getElementById('tela_resultado').innerHTML;
    document.getElementById('tela_resultado').innerHTML = esta_na_tela.substring(0, esta_na_tela.length-1);
}

function resultado(){
    var esta_na_tela = document.getElementById('tela_resultado').innerHTML;
    if(esta_na_tela){
        document.getElementById('tela_resultado').innerHTML = eval(esta_na_tela);
    }
    else{
        document.getElementById('tela_resultado').innerHTML = "SEM DADOS!"
        alert("VOCÊ PRECISAR DIGITAR ALGUMA COISA!");
    }
}