function comprar(){
    // desta forma pegamos o valor que esta no html e usamos o botao comprar() que esta no html 
    // assim podemos recuperar o que esta no tipo ingresso e claro a quantidade 
    let tipo=document.getElementById('tipo-ingresso');
    // nesta parte temos que converter o texto digitado para um numero inteiro
    let qtd=parseInt(document.getElementById('qtd').value);

    if (tipo.value=="pista"){
        // chama-se a funcao para comprar e deve ser igual a pista e claro segue de qtd
        comprarPista(qtd);
        // aqui onde colocar as condicao de comprar de outros ingressos
    }else if (tipo.value=="superior"){  
        comprarSuperior(qtd);
    }else{
        comprarInferior(qtd);
    }
}
// funcao onde a pessoa comprar  quantidade 
function comprarPista(qtd){
    // para pode comparar o texto com numero deve-se pegar o valor que esta no formulario e ele vem agora como numero inteiro
    // e compara com outro numero assim como esta convertido
    let qtdPista=parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd>qtdPista){
        alert('Quantidade indisponivel para tipo pista');
    }else{
        qtdPista=qtdPista-qtd;
        // foi recuperado o elemento para receber a quantidade notamos que o valor recuperado foi o que esta convertido em numero inteiro
        document.getElementById('qtd-pista').textContent=qtdPista
        alert('Compra realizada com sucesso');
    }
}
function comprarSuperior(qtd){
    let qtdSuperior=parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd>qtdSuperior){
        alert('Quantidade indisponivel para tipo superior');
    }else{
        qtdSuperior=qtdSuperior-qtd;
        document.getElementById('qtd-superior').textContent=qtdSuperior
        alert('Compra realizada com sucesso');
    }
}
function comprarInferior(qtd){
    let qtdInferior=parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd>qtdInferior){
        alert('Quantidade indisponivel para tipo inferior');
    }else{
        qtdInferior=qtdInferior-qtd;
        document.getElementById('qtd-inferior').textContent=qtdInferior
        alert('Compra realizada com sucesso');
    }
}