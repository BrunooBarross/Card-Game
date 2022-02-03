let qtd_cartas = 0;
const cards = document.querySelector(".cards");

while( qtd_cartas < 4 || qtd_cartas > 14 || qtd_cartas%2 != 0 ) {
    qtd_cartas = prompt("Digite um número par de cartas entre 4 e 14");
    qtd_cartas = parseInt(qtd_cartas);
}

const imagens = [
    'img0.gif',
    'img1.gif',
    'img2.gif',
    'img3.gif',
    'img4.gif',
    'img5.gif',
    'img6.gif',
]

let cartas = [];
contador=0;
for (let i = 0 ; i < qtd_cartas ; i += 2) {
    cartas.push(imagens[contador]);
    cartas.push(imagens[contador]);
    contador ++;
}

cartas.sort( function () {
    return 0.5 - Math.random();
});

let codigoHTML = '';
cartas.forEach(img =>{
    codigoHTML += `    
        <div class="memory-card" onclick="virar(this)" data-carta="${img}">
            <img class="frente-carta" src="img/${img}">
            <img class="fundo-carta" src="img/front.png">
        </div>        
    `;
});

cards.innerHTML = codigoHTML;

let primeira;
let segunda;
let bloqueio = false;
let contacliques = 0;
function virar(elemento){
    if(bloqueio == true){
        return false;
    }
    elemento.classList.add("virar");
    if(primeira ==null){
        primeira = elemento;
        primeira.setAttribute("onClick","");
        contacliques += 1;
    }else{
        segunda = elemento;
        verificacao();
        contacliques += 1;
    }
}
function verificacao(){
    let verificar;
    if(primeira.dataset.carta == segunda.dataset.carta){
        verificar = true;
        bloqueio = true;
        reset();
    }else{
        verificar = false;
        bloqueio = true;
        remover();
    }    
    
}
function remover(){   
    setTimeout(()=>{        
        primeira.setAttribute("onClick","virar(this)");
        primeira.classList.remove("virar");
        segunda.classList.remove("virar");
        primeira = null;
        segunda = null;
        bloqueio = false;            
    },1000);
}
function reset(){
    bloqueio = false;
    primeira.setAttribute("onClick","");
    segunda.setAttribute("onClick","");
    primeira = null;
    segunda = null;
    
}