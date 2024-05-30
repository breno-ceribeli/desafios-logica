const prompt = require('prompt-sync')({sigint: true});

let wins
let defeats

do{
    wins = parseInt(prompt("Digite a quantidade de vitórias: "))
} while(wins < 0)

do{
    defeats = parseInt(prompt("Digite a quantidade de derrotas: "))
} while(defeats < 0)

let winningBalance = winningBalanceCalc(wins, defeats)
let rankLevel = rankLevelcalc(winningBalance)

console.log(`O Herói tem saldo de ${winningBalance} e está no nível de ${rankLevel}.`)

function winningBalanceCalc(wins, defeats){
    return wins - defeats
}

function rankLevelcalc(WB){
    if(WB <= 10){
        return "Ferro"
    }
    if(WB <= 20){
        return "Bronze"
    }
    if(WB <= 50){
        return "Prata"
    }
    if(WB <= 80){
        return "Ouro"
    }
    if(WB <= 90){
        return "Diamante"
    }
    if(WB <= 100){
        return "Lendário"
    }
    else{
        return "Imortal"
    }
}