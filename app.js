// 1.0 - Criar array list para salvar nome das pessoas
// 2.0 - Criar funçao que adicionar nomes na lista
// 2.1 - Primeiro preciso criar uma variavel que sera sobrescrita. 
// 2.2 - Crio logica com DOM para ao clicar no botao aribuir o valor do input a essa variavel.
// 2.3 - Vinculo o metodo de adicionar do array list a esse botao.
// 2.4 - Limpo o conteudo detro do input via DOM.
// 3.0 - Crio uma lista oi html via DOM que ira mostrar o estado atual da lista.
// 4.0 - Criar fução que gera aleatoriedade para sortear, com base no número total do meu array list, e a vinculo ao botão.
// 5.0 - Esponho na tela através do DOM a pessoa sorteada.

let lista = [];

function adicionarAmigo() {
    let campo = document.getElementById("amigo").value;
    if(campo == "") {
        alert("Preencha o campo Corretamente!");
        return;
    } else if(lista.includes(campo)){
        alert("Ja existe esse nome na lista")
        return;
    } 
    lista.push(campo);
    document.getElementById('amigo').value = "";
    listarAmigos();
} 

function listarAmigos() {
    let nomeLista = '';
    for(let contador = 0; contador < lista.length; contador++) {
        nomeLista += `<li>${lista[contador]}</li>`
    }

    listaFormatada = document.getElementById("listaAmigos");
    listaFormatada.innerHTML = nomeLista;
}

function sortearAmigo() {
    if(lista.length == 0) {
        alert("Adicione nomes a lista antes de sortear!")
    } else {
        let limite = lista.length - 1;
        const min = 0;
        let numSorteado = Math.floor(Math.random() * (limite - min + 1) + min);

        let nomeSorteado = `<li>${lista[numSorteado]}</li>`;

        let nomeFormatado = document.getElementById("resultado");
        nomeFormatado.innerHTML = nomeSorteado; 
    }
}