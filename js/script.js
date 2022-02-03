let qtd_cartas = 0;

while( qtd_cartas < 4 || qtd_cartas > 14 || qtd_cartas%2 != 0 ) {
    qtd_cartas = prompt("Digite um número par de cartas entre 4 e 14");
    qtd_cartas = parseInt(qtd_cartas);
}

