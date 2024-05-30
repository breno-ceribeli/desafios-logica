//Necessária a inserção do comando npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});

let hero = ["Nome", 0];
let nivel

hero[0] = prompt("Digite o nome do herói: ");
do{
    hero[1] = Number(prompt("Digite a quantidade de XP do herói: "));
} while(hero[1] < 0)

if(hero[1] < 1000){
    nivel = "Ferro"
}
else if(hero[1] <= 2000){
    nivel = "Bronze"
}
else if(hero[1] <= 5000){
    nivel = "Prata"
}
else if(hero[1] <= 7000){
    nivel = "Ouro"
}
else if(hero[1] <= 8000){
    nivel = "Platina"
}
else if(hero[1] <= 9000){
    nivel = "Ascendente"
}
else if(hero[1] <= 10000){
    nivel = "Imortal"
}
else{
    nivel = "Radiante"
}

console.log("O herói de nome " + hero[0] + " está no nível de " + nivel)
