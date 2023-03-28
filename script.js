var jogadorPontos = computadorPontos = 0
var mensagem = document.querySelector('#mensagem')
//Remove a classe "selecionado"
const deselecionar = (player, escolha) => {
    document.querySelector(`#${player}-${escolha}`).classList.remove('selecionado')
}

//Adiciona a classe "selecionado"
const selecionar = (player, escolha) =>{
    document.querySelector(`#${player}-${escolha}`).classList.add('selecionado')
}

//Sorteia a escolha do pc
const sortear = () => {
    const computadorEscolha = Math.floor(Math.random() * 3) + 1
    selecionar('computador', computadorEscolha)
    return computadorEscolha
}

//compara o vencedor
const vencedor = (jogador, computador) => {
    switch (jogador){
        case 1:
            switch (computador){
                case 1:
                    mensagem.innerHTML = 'Empate'
                    break
                case 2:
                    computadorPontos++
                    document.querySelector("#computador-pontos").innerHTML = `Computador: ${computadorPontos}`
                    mensagem.innerHTML = 'Computador Venceu'
                    break
                case 3:
                    jogadorPontos++
                    document.querySelector("#jogador-pontos").innerHTML = `Jogador: ${jogadorPontos}`
                    mensagem.innerHTML = 'Jogador venceu'
                    break
            }
            break
        case 2:
            switch (computador){
                case 1:
                    jogadorPontos++
                    document.querySelector("#jogador-pontos").innerHTML = `Jogador: ${jogadorPontos}`
                    mensagem.innerHTML = 'Jogador venceu'
                    break
                case 2:
                    mensagem.innerHTML = 'Empate'
                    break
                case 3:
                    computadorPontos++
                    document.querySelector("#computador-pontos").innerHTML = `Computador: ${computadorPontos}`
                    mensagem.innerHTML = 'Computador Venceu'
                    break
            }
            break
        case 3:
            switch (computador){
                case 1:
                    computadorPontos++
                    document.querySelector("#computador-pontos").innerHTML = `Computador: ${computadorPontos}`
                    mensagem.innerHTML = 'Computador Venceu'
                    break
                case 2:
                    jogadorPontos++
                    document.querySelector("#jogador-pontos").innerHTML = `Jogador: ${jogadorPontos}`
                    mensagem.innerHTML = 'Jogador venceu'
                    break
                case 3:
                    mensagem.innerHTML = 'Empate'
                    break
            }
            break
    }

}

//parte principal
const jogar = (jogadorEscolha) => {
    const computadorE = sortear()

    vencedor(jogadorEscolha, computadorE)

    setTimeout(()=>{
        mensagem.innerHTML = 'Faça a sua jogada'
        deselecionar("jogador", jogadorEscolha)
        deselecionar("computador", computadorE)}
        ,2500)
}

document.querySelector('#jogador-1').addEventListener('click', () => {
    selecionar('jogador', 1)
    jogar(1)
})

document.querySelector('#jogador-2').addEventListener('click', () => {
    selecionar('jogador', 2)
    jogar(2)
})

document.querySelector('#jogador-3').addEventListener('click', () => {
    selecionar('jogador', 3)
    jogar(3)
})
