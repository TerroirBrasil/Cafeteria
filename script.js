function saudacao() {
    alert(
        "Bem-vindo à Terroir Brasil! ☕\n\nDescubra os sabores únicos dos cafés especiais brasileiros."
    );
}

const botoes = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".card");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        botoes.forEach(btn => btn.classList.remove("active"));
        botao.classList.add("active");

        const categoria = botao.dataset.categoria;

        cards.forEach(card => {

            if(
                categoria === "todos" ||
                card.dataset.categoria === categoria
            ){
                card.classList.remove("oculto");
            } else {
                card.classList.add("oculto");
            }
const address = "Av. do Batel, 1550 - Batel, Curitiba - PR, 80420-090";
        });

    });

});
