idade = prompt("Qual a sua idade?")

if (idade < 18) {
  alert("Você é menor de idade!")
}

if (idade >= 18) {
    escolhaOpcaoJogador = prompt("1-Pedra, 2-Papel ou 3-Tesoura)")
    escolhaOpcaoComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaOpcaoJogador == escolhaOpcaoComputador) {
        alert("Empatou!")
    }

    if (escolhaOpcaoJogador == 1) {
        if (escolhaOpcaoComputador == 2) {
            alert("Computador venceu, escolheu papel");
        }
        if (escolhaOpcaoJogador == 3) {
            alert("Jogador venceu, computador tesoura")
        }
    }

    if (escolhaOpcaoJogador == 2) {
        if (escolhaOpcaoComputador == 1) {
            alert("Jogador venceu, computador pedra")
        }
        if (escolhaOpcaoComputador == 3) {
            alert("Computador venceu, escolheu tesoura")
        }
    }

    if (escolhaOpcaoJogador == 3) {
        if (escolhaOpcaoComputador == 1) {
            alert("Computador venceu, escolheu pedra")
        }
        if (escolhaOpcaoComputador == 2) {
            alert("Jogador venceu, computador papel")
        }     
    }
}