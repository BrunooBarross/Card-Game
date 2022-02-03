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

let codigoHTML = '';
cartas.forEach(img =>{
    codigoHTML += `    
        <div class="memory-card">
            <img class="frente-carta" src="img/${img}">
            <img class="fundo-carta" src="img/front.png">
        </div>        
    `;
});

cards.innerHTML = codigoHTML;

const pegarcartas = document.querySelectorAll(".memory-card");

function virar(){
    this.classList.add("virar")
}
pegarcartas.forEach(c => c.addEventListener('click',virar));