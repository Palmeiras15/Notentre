const botoesEmocoes = document.querySelectorAll("[data-emocao]");
const botaoBuscar = document.querySelector("#buscar");

let emocoesSelecionadas = [];

const aviso = document.querySelector("#aviso");

botoesEmocoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const emocao = botao.dataset.emocao;

        if (emocoesSelecionadas.includes(emocao)) {

            emocoesSelecionadas = emocoesSelecionadas.filter(function(item) {
                return item !== emocao;
            });

            botao.classList.remove("selecionado");

        } else {

            if (emocoesSelecionadas.length >= 3) {
    		 aviso.textContent = "Você pode selecionar no máximo 3 emoções.";
    		 return;
	   }
            emocoesSelecionadas.push(emocao);

            botao.classList.add("selecionado");

        }

        console.log("Emoções selecionadas:", emocoesSelecionadas);

    });

});

botaoBuscar.addEventListener("click", function() {

    if (emocoesSelecionadas.length === 0) {
        console.log("Escolha pelo menos uma emoção.");
        return;
    }

	console.log(emocoesSelecionadas);

    const ranking = musicas.map(function(musica) {

    let pontos = 0;

    emocoesSelecionadas.forEach(function(emocao) {

        if (musica.emocoes.includes(emocao)) {
            pontos++;
        }

    });

    return {
        ...musica,
        pontos: pontos
    };

});
    ranking.sort(function(a, b) {
    return b.pontos - a.pontos;
});

const top10 = ranking
    .filter(function(musica) {
        return musica.pontos > 0;
    })
    .slice(0, 10);

resultado.innerHTML = "";

top10.forEach(function(musica, posicao) {

    resultado.innerHTML += `
        <p>
            <span class="posicao">${posicao + 1}º</span>
            <strong>${musica.nome}</strong>
            (${musica.artista}) - ${musica.pontos} ponto(s)
        </p>
    `;
});
const botaoReiniciar = document.querySelector("#reiniciar");

botaoReiniciar.addEventListener("click", function() {

    emocoesSelecionadas = [];

    botoesEmocoes.forEach(function(botao) {
        botao.classList.remove("selecionado");
    });

    resultado.innerHTML = "";

});

});