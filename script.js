const perguntas = [
    {
        texto: "Qual dessas ações ajuda a preservar o solo?",
        opcoes: ["Queimadas controladas", "Plantio direto sobre a palhada", "Retirada de toda a vegetação", "Uso excessivo de tratores"],
        correta: 1
    },
    {
        texto: "O que é agricultura familiar?",
        opcoes: ["Produção para exportação", "Cultivo feito por robôs", "Gestão feita pela própria família", "Plantação em apartamentos"],
        correta: 2
    },
    {
        texto: "Como o campo e a cidade se conectam?",
        opcoes: ["Não se conectam", "Apenas por estradas", "O campo fornece alimentos e a cidade tecnologia", "A cidade não precisa do campo"],
        correta: 2
    },
    {
        texto: "O que significa 'sustentabilidade'?",
        opcoes: ["Gastar tudo agora", "Produzir sem pensar", "Equilíbrio entre ambiente e progresso", "Apenas plantar árvores"],
        correta: 2
    },
    {
        texto: "Qual a função das abelhas na agricultura?",
        opcoes: ["Nenhuma", "Polinização das plantas", "Atrapalhar a colheita", "Comer as folhas"],
        correta: 1
    },
    {
        texto: "O que é 'Agricultura de Precisão'?",
        opcoes: ["Plantar sem sementes", "Uso de drones e GPS para melhorar a produção", "Cortar árvores com precisão", "Lavar os alimentos com mangueira"],
        correta: 1
    },
    {
        texto: "Qual a melhor forma de economizar água na irrigação?",
        opcoes: ["Irrigação por gotejamento", "Deixar a torneira aberta", "Regar apenas ao meio-dia", "Não molhar as plantas"],
        correta: 0
    },
    {
        texto: "O que deve ser feito com as embalagens de defensivos agrícolas?",
        opcoes: ["Jogar no rio", "Queimar no quintal", "Devolução para reciclagem específica", "Enterrar no solo"],
        correta: 2
    }
];

let indiceAtual = 0;
let pontuacao = 0;

function atualizarQuiz() {
    const perguntaAtual = perguntas[indiceAtual];
    document.getElementById("info-progresso").innerText = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    document.getElementById("pergunta").innerText = perguntaAtual.texto;
    
    const divAlternativas = document.getElementById("alternativas");
    divAlternativas.innerHTML = "";

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.classList.add("btn-opcao");
        botao.onclick = () => checarResposta(index);
        divAlternativas.appendChild(botao);
    });
}

function checarResposta(selecionada) {
    if (selecionada === perguntas[indiceAtual].correta) {
        pontuacao++;
    }
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        atualizarQuiz();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("tela-quiz").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
    document.getElementById("score").innerText = `Você acertou ${pontuacao} de ${perguntas.length}!`;
    
    let msg = "";
    if(pontuacao >= 7) msg = "Excelente! Você é um mestre do campo! 👨‍🌾";
    else if(pontuacao >= 4) msg = "Muito bom! Você conhece bem a nossa terra! 🌱";
    else msg = "Continue estudando com o Agrinho para aprender mais! 📚";
    
    document.getElementById("mensagem-final").innerText = msg;
}

function reiniciar() {
    indiceAtual = 0;
    pontuacao = 0;
    document.getElementById("tela-quiz").classList.remove("hidden");
    document.getElementById("resultado").classList.add("hidden");
    atualizarQuiz();
}

// Inicializa o quiz quando a página carregar
window.onload = atualizarQuiz;