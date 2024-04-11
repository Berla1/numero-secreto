function verificaChute(chute){
    const numero =+ chute

    if(Number.isNaN(numero)){ // NaN = not a number // se NaN for verdadeiro, executa o if
        elementoChute.innerHTML += `<div class="aviso">Valor inválido</div>`

    }
    
    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div class="aviso">Valor tem que estar entre ${menorValor} e ${maiorValor}</div>`
    }
    

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Parabéns você acertou! O número secreto era ${numeroSecreto}</h1>
        `
    }

    if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`

    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
}
