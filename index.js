function getRequest() {
    let requestUrl = 'https://www.episodate.com/api/most-popular?page=1'; //Link da API 
    let request = new XMLHttpRequest(); //Função para requisiçaõ 

    request.open('GET', requestUrl); //Iniciando requisição da URL
    request.responseType = 'json'; //Definindo tipo de resposta
    request.send(); //Enviando a requisição
    request.onload = function () {

        let series = request.response;
        console.log(series.tv_shows)
        cards(series.tv_shows)

    }

}

function cards(serie) {     //função para montar o CARD
    serie.forEach(element => { // Percorrendo todo o json para selecionar um elemento
        let card = `
            <div>
                <img src="${element.image_thumbnail_path}"></img>
                <h2>${element.name}</h2>
                <button onclick= "exibirDetalhes(${element.id})">CLIQUE AQUI</button>
                
            </div>
        `
        let teste2 = new DOMParser().parseFromString(card, 'text/html') //Manipulando o DOM, criando elementos dentro da pagina com JS.
        teste2 = teste2.body.childNodes[0] //Rodando os elementos do meu array de objetos començando em 0. 
        document.getElementById('series').appendChild(teste2); // construindo no HTML os card para receber o nome. 
    });

}

function exibirDetalhes(id) {
    let requestUrl = `https://www.episodate.com/api/show-details?q=${id}`//Link da API 
    let request = new XMLHttpRequest(); //Função para requisiçaõ 

    request.open('GET', requestUrl); //Iniciando requisição da URL
    request.responseType = 'json'; //Definindo tipo de resposta
    request.send(); //Enviando a requisição
    request.onload = function () {

        let id = request.response;
        console.log(id)


    }

}
