const prompt = require('prompt-sync')({sigint: true});

class hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      let attackType;
  
      switch (this.type) {
        case "mago":
          attackType = "magia";
          break;
        case "guerreiro":
          attackType = "espada";
          break;
        case "monge":
          attackType = "artes marciais";
          break;
        default:
          attackType = "shuriken";
      }
  
      console.log(`O ${this.type} atacou usando ${attackType}.`);
    }
  }

let firstHero
let secondHero

for(let i = 1; i <= 2; i ++){
    let heroName = (prompt(`Escreva o nome do ${i}º herói: `))
    let heroAge = Number(prompt(`Escreva a idade do ${i}º herói: `))
    let heroType
    do{
        console.log("Classes disponíveis: Mago, Guerreiro, Monge e Ninja.")
        heroType = (prompt(`Escreva a classe da qual o ${i}º herói pertence: `)).toLowerCase()
    } while(heroType != "mago" && heroType != "guerreiro" && heroType != "monge" && heroType != "ninja")

    if(i == 1){
        firstHero = new hero(heroName, heroAge, heroType)
    }
    else{
        secondHero = new hero(heroName, heroAge, heroType)
    }
}

firstHero.attack()
secondHero.attack()