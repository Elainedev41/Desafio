const botao = document.querySelector('#botao');

const imagem1 = document.querySelector('#personagem1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

const imagem2 = document.querySelector('#personagem2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');

const imagem3 = document.querySelector('#personagem3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#status3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}
pegarPersonagem = (imagem, nomeDoPersonagem, especie, condicao) => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src= data.image;
        imagem.alt= data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });    
}

botao.onclick = () => {pegarPersonagem(imagem1, nomeDoPersonagem1, especie1, condicao1);
                       pegarPersonagem(imagem2, nomeDoPersonagem2, especie2, condicao2);
                       pegarPersonagem(imagem3, nomeDoPersonagem3, especie3, condicao3)};
