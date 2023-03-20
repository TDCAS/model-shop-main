let listproduct = `[
    {
        "id":0,
        "img":"./img/Redragon.png",
        "name":"Reddrsagon",
        "desconto":["not-visible",300],
        "condicao":"semi",
        "marca":"evga",
        "categoria":"placa de video",
        "preco":"200.00",
        "Entrega":"not-visible",
        "decricao":"descriscao"
    },
    {
        "id":1,
        "img":"./img/Cadeira.PNG",
        "name":"Reddrsagon",
        "desconto":["visible",300],
        "preco":"200.00",
        "entrega":"visible",
        "descricao":"descriscao"
    },
    {
        "id":2,
        "img":"./img/Cadeira.PNG",
        "name":"Reddrsagon",
        "desconto":["not-visible",300],
        "preco":"200.00",
        "entrega":"visible",
        "descricao":"descriscao"
    },
    {
        "id":3,
        "img":"./img/Cadeira.PNG",
        "name":"Reddrsagon",
        "desconto":["visible",300],
        "preco":"200.00",
        "entrega":"not-visible",
        "descricao":"descriscao"
    },
    {
        "id":6,
        "img":"./img/Cadeira.PNG",
        "name":"Reddrsagon",
        "desconto":["visible",300],
        "preco":"300.00",
        "entrega":"not-visible",
        "descricao":"descriscao"
    },
    {
        "id":7,
        "img":"./img/Cadeira.PNG",
        "name":"Reddrsagon",
        "desconto":["not-visible",300],
        "preco":"500.00",
        "entrega":"visible",
        "descricao":"l"
    },
    {
        "id":8,
        "img":"./img/Cadeira.PNG",
        "name":"Roi",
        "desconto":["not-visible",300],
        "preco":"200.00",
        "entrega":"not-visible",
        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat velit alias facere ex obcaecati?"
    }
  ]`  
  
let containerHtml = document.getElementById("list-product-all")
let searchInput = document.getElementById("search-input")
const myJson = JSON.parse(listproduct)
let html = ``;
let cont = 0;



function gerar(listproduct){
    if(myJson.lenght < 0){

    }else {
        myJson.forEach(element => {
            
            html += `
            <div class="block" >
            <div class="center">
                <img src="${myJson[cont].img}" alt="">
            </div>

                <h1 class="name" >${myJson[cont].name}</h1>
             
                <s class="pdesconto" id="${myJson[cont].desconto[0]}" >R$${myJson[cont].desconto[1]} </s>
                <p class="ppreco">R$${myJson[cont].preco}</p>
                
                <p class="pentrega" id="${myJson[cont].entrega}" >Entrega gratis   <img class="truck"  src="./img/icons/caminhao.png"></p>
                <button class="button-desing" >Adicionar ao carrinho</button>
                
                <div id="idpdescricao" class="pdescricao">
                <p  >${myJson[cont].descricao}</p>
                </div>

            </div>
            `
            cont += 1;

        });
        containerHtml.innerHTML = html
    }
}

gerar(myJson);


