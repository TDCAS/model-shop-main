
//Dados
let listproduct = `[
    {
        "id":0,
        "img":"./img/jogo1.jpg",
        "name":"Survival",
        "desconto":["not-visible",300],
        "condicao":"semi",
        "marca":"evga",
        "promocao":"",
        "categoria":"jogo",
        "fretegratis":"",
        "preco":200,
        "entrega":"not-visible",
        "decricao":"descriscao"
    },
    {
        "id":1,
        "img":"./img/Redragon.png",
        "name":"Teclado Reddragon",
        "desconto":["visible",300],
        "condicao":"semi",
        "marca":"redgragon",
        "fretegratis":"fretegratis",
        "promocao":"promocao",
        "quantidade":"1",
        "categoria":"teclado",
        "preco":200,
        "entrega":"visible",
        "descricao":"descriscao"
    },
    {
        "id":2,
        "img":"./img/fone.PNG",
        "name":"Fone",
        "desconto":["not-visible",300],
        "condicao":"new",
        "marca":"evga",
        "categoria":"headset",
        "promocao":"",
        "quantidade":"1",
        "fretegratis":"fretegratis",
        "preco":200,
        "entrega":"visible",
        "descricao":"descriscao"
    },
    {
        "id":3,
        "img":"./img/placadevideo1.jpg",
        "name":"Radeon",
        "desconto":["visible",300],
        "fretegratis":"",
        "promocao":"promocao",
        "condicao":"semi",
        "marca":"hyper fury",
        "categoria":"placa de video",
        "quantidade":"1",
        "preco":200,
        "entrega":"not-visible",
        "descricao":"descriscao"
    },
    {
        "id":6,
        "img":"./img/jogo2.jpg",
        "name":"Outwaro",
        "desconto":["visible",300],
        "fretegratis":"",
        "promocao":"promocao",
        "condicao":"semi",
        "marca":"evga",
        "categoria":"jogo",
        "quantidade":"1",
        "preco":300,
        "entrega":"not-visible",
        "descricao":"descriscao"
    },
    {
        "id":7,
        "img":"./img/jogo.jpg",
        "name":"Super Mario",
        "desconto":["not-visible",300],
        "fretegratis":"fretegratis",
        "promocao":"",
        "condicao":"semi",
        "marca":"evga",
        "categoria":"jogo",
        "quantidade":"1",
        "preco":500.00,
        "entrega":"visible",
        "descricao":"l"
    },
    {
        "id":8,
        "img":"./img/placadevideo2.jpg",
        "name":"GTX",
        "desconto":["not-visible",300],
        "condicao":"semi",
        "fretegratis":"",
        "promocao":"",
        "marca":"evga",
        "quantidade":"1",
        "categoria":"placa de video",
        "preco":200,
        "entrega":"not-visible",
        "descricao":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat velit alias facere ex obcaecati?"
    }
  ]` 

//Crianção de variaveis para lista de produtos
let containerHtml = document.getElementById("list-product-all")
//lista de todas as checkbox
const myJson = JSON.parse(listproduct)
let cont = 0
let countListCart = 0
let jsonPresentList = myJson


// verificação se esta checado
function verify(){
    let itens = 0;
    let values = []
    let checkboxlist = document.querySelectorAll(`input[type=checkbox]:checked`)

    checkboxlist.forEach(element => {
        if(element.checked == true){
            values[itens] = element.className
            itens +=1   
        }
    })
    if(itens > 0 ){
        query(values,itens)
    } else if(itens == 0){
        productRender(jsonPresentList)
        addcionaritem(jsonPresentList)
        addEventListener('load',eventLitesner)
    }

}
// verificar se algum item do array esta duplicado
function hasDuplicates(array) {
    const arraya = [... new Set(array)]
    return arraya;
}


function query(values,itens) {
    cont = 0
    let list = []
    for(let one = 0;one < itens;one++){
        myJson.filter(element => {
            console.log(element.marca == values[one])
            if(element.marca == values[one] ){
                list[cont] = element
                cont+=1
            }
            if(element.condicao == values[one]){
                list[cont] = element
                cont+=1
            }
            if(element.categoria == values[one]){
                list[cont] = element
                cont+=1
            }
            if(element.fretegratis == values[one]){
                list[cont] = element
                cont+=1
            }
            if(element.promocao == values[one]){
                list[cont] = element
                cont+=1
            }
            
        })
    }
    productRender(hasDuplicates(list))
    addcionaritem(hasDuplicates(list))
    addEventListener('load',eventLitesner)

}
//gera o lista de produtos html
function productRender(listproduct){
    containerHtml.innerHTML = ``
    let html = ``;
    listproduct.forEach(element => {     
        html += `
        <div class="block" id="${element.id}" >
            <div class="center">
                <img class="product-image" src="${element.img}"  alt="">
            </div>
                <h1 class="name" >${element.name}</h1>
                <s class="pdesconto" id="${element.desconto[0]}" >R$${element.desconto[1]} </s>
                <p class="ppreco">R$${element.preco}</p>
                <p class="pentrega" id="${element.entrega}" >Entrega gratis   <img class="truck"  src="./img/icons/caminhao.png"></p>
                <button class="button-desing"  >Adicionar ao carrinho</button>
                <div id="idpdescricao" class="pdescricao">
                <p  >${element.descricao}</p> 
            </div>
        </div>
        `
    });
    containerHtml.innerHTML = html
    
}
// carrinho de compras
//Variaveis

let modal = document.getElementById("myModal");
let bodyd = document.getElementById("stl");
let block = document.querySelectorAll(`div[class="block"]`)
let contentmodal = document.getElementById("modal-content-id")
let divclas;
let newlist = [];


// visibilidade do container do carrinho onde guarda os produtos que estao no carrinho

//Valida se algum produto foi clicado caso sim direciona para adicionar o mesmo no carrinho

//ADICIONAR ITEM NO CARRINHO DE COMPRA
//Reficionando pelo block, valida qual valor foi clicado, cria um um bloco html e guarda o mesmo dentro de uma variavel chamada item
// Apos sso chama o add(item) com o parametro da variavel.
function addcionaritem(myJson){
    let block = document.querySelectorAll(`div[class="block"]`)
    block.forEach(elementclicked => {
        elementclicked.addEventListener("click",()=>{
            myJson.forEach(element =>{
                if(element.id == elementclicked.id ){
                    item = 
                            `<div class="itens-list-cart">
                                <div>
                                <img src="${element.img}">
                                </div>
                                <div>
                                    <span class="font-name-cart" >${element.name}</span>
                                    <p>2x  R$${element.preco}</p>
                                </div>
                                <button class="cli" id="${element.id}" >X</button>
                            </div> `
                    add(item)
                }
            })
        })
    })
}
//Add recebe o parametro que no mesmo contem um bloco html, apois isso adiciona essa variavel a uma lista, chamando o refilItens(newlist)
//que recebe como parametro a lista de item, retornando o mesmo 
function add(item){
    newlist.forEach(element => {
        if(element == item){
            element
        }
    })
    newlist.push(item)
    refilItens(newlist) 
    return newlist
}

//LISTA DO CARRINHO DE COMPRA
//refilItens(newlist)  Recebe como parametro uma lista de variaveis onde em cada variavel contem um bloco html
function refilItens(newlist){
/*apois isso adiciona essa lista a interface utilizando  contentmodal.innerHTML,
adiconando a lista dentro da class "modal-content-id"*/
    contentmodal.innerHTML = newlist.join("")
//chama o validar onde o mesmo recebe o parametro da lista de variaveis onde cada possui um html
    validateButtonRemove(newlist)
}

//REMOÇÂO DO ITEM DO CARRINHO DE COMPRAS
/*valida(newlist) Recebe como parametro uma lista de variaveis onde em cada variavel contem um bloco html*/
//fução dele é validar se o botão vermelho que contem um x foi clicado se sim ele direcio para a função removeItem
function validateButtonRemove(){
    //atualiza a variavel onde contem a lista de button com a class cli 
    divclas = document.querySelectorAll(`button[class="cli"]`)
  //Valida cada elemento dentro da lista, se em especifico um deles foi clicado caso sim redireciona para removeItem
    divclas.forEach(element=>{
        element.addEventListener("click",()=>{
            //removeItem(element,newlist) recebe 2 parametros um seria o elemento que foi clicado e outro foi alista de item
            removeItem(element)
        })
    })
}

    
//removeItem(divid)
function removeItem(divid){
        newlist.forEach(item =>{
            if(item.search(`id="${divid.id}"`) != -1){
                newlist = newlist.filter(element => {return element != item})
                refilItens(newlist)

           }
        })
    }
addEventListener('load',eventLitesner)

function revilseach(searchbar){{    
        
            let box = document.getElementById("pai")
            console.log(searchbar.value)
            let lista = myJson.filter(element => {return (!element.name.search(searchbar.value))})
            productRender(lista)
            addcionaritem(lista)
            addEventListener('load',eventLitesner)

            console.log(lista)
   
    }
}


function priceRegulator(idPrecoMenor,idPrecoMaior){
 
        let listNumber = myJson.filter(element => {return element.preco >= idPrecoMenor.value && element.preco <= idPrecoMaior.value })
        
        productRender(listNumber)
        addcionaritem(listNumber)
        addEventListener('load',eventLitesner)

        console.log(listNumber)
}

function eventLitesner(){

    let headerButtonIcon = document.getElementById("header-button-icon")
    let headerImageIcon = document.getElementById("header-image-icon")
    let idFiltersList = document.getElementById("idFiltersList")
    let containerHtml = document.getElementById("list-product-all")
    let idStrutureListProduct = document.getElementById("idStrutureListProduct")
    let searchbar = document.getElementById("idSearchInput")
    let idPrecoMenor = document.getElementById("idPrecoMenor")
    let idPrecoMaior = document.getElementById("idPrecoMaior")

    idPrecoMenor.addEventListener("keypress",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })
    idPrecoMenor.addEventListener("keydown",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })
    idPrecoMenor.addEventListener("keyup",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })
    idPrecoMenor.addEventListener("click",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })
    idPrecoMaior.addEventListener("keypress",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })
    idPrecoMaior.addEventListener("keydown",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })
    idPrecoMaior.addEventListener("keyup",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })
    idPrecoMaior.addEventListener("click",function(){
        priceRegulator(idPrecoMenor,idPrecoMaior)
    })


    searchbar.addEventListener("select",function(){revilseach(searchbar)})
    searchbar.addEventListener("keypress",function(){revilseach(searchbar)})
    searchbar.addEventListener("keydown",function(){revilseach(searchbar)})
    searchbar.addEventListener("keyup",function(){revilseach(searchbar)})

    

    
    idFiltersList.addEventListener("click",verify)
    containerHtml.addEventListener('click',addcionaritem(myJson))

    idStrutureListProduct.addEventListener("click",()=>{
        modal.style.visibility = "hidden";
        headerButtonIcon.style.visibility  ="visible";
    })

    headerButtonIcon.onclick = function() {
        modal.style.visibility = "visible";
        headerButtonIcon.style.visibility  ="hidden";
    }

    //valida se mouse  esta em cima do headerButtonIcon(seria o botão do carrinho) ele altera a imagem
    headerButtonIcon.addEventListener("mouseover",() =>{
        headerImageIcon.src= `./img/icons/001-carrinho-de-compras.png`;
    })
    //valida se mouse esta fora do headerButtonIcon(seria o botão do carrinho) ele altera a imagem
    headerButtonIcon.addEventListener("mouseout",()=>{
        headerImageIcon.src= `./img/icons/001-shopping-cart.png`;
    })

}




addEventListener('load',productRender(myJson))



