let searchbar = document.getElementById("search")
let box = document.getElementById("box")
let list = ['oloko','vem','sai','opa']

searchbar.addEventListener("focus",loopsearch)

function loopsearch(){
      let intervalo = setInterval(()=>{
            let oloko = list.filter(element =>{return (!element.search(searchbar.value))})
            console.log(oloko)

      },3000)

}


