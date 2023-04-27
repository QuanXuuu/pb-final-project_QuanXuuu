console.clear();

class Pokemon {
    constructor(name, health, magic, skills = []) 
    {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = skills;
    }

    learnAttackSkill(attackObj){
        return `${this.name} launched skill '${attackObj.attackName}' successfully!`   
    }
    
    setSkills(attackObj) {
        this.skills.push(attackObj);
        return this.skills;
    }

    showStatus(){
        if(this.health <= 0) {
            console.log(`${this.name} is already dead!`)
        }
        else {
          console.log(`---- ${this.name} status ---- \nhealth: ${this.health} \nmagic: ${this.magic}`);  
        }
    }

    attack(i, target) {
        if(target.health <= 0) {
            console.log(`${target.name} is already dead!`)
            }
         else {
            if(this.magic < this.skills[i].magicRequired) {
            console.log('not enough magic, cannot launch attack!')
            }
            else {
                if(target.health <= 0)
                {console.log(`${this.name} is the winner! ${target.name} is killed!`)}
            
                else {
                    target.health -= this.skills[i].damageAmount;
                    this.magic -= this.skills[i].magicRequired;
           
                    console.log(`Successful attack! ${target.name} got ${this.skills[i].damageAmount} damage.`)   
                }      
            }
        }    
    }

    getMagic(num) {return this.magic += num;}
}

class AttackSkill {
    constructor(attackName, damageAmount, magicRequired)
    {
        this.attackName = attackName;
        this.damageAmount = damageAmount;
        this.magicRequired = magicRequired;
    }
}

let pikachu = new Pokemon('pikachu', 120, 40);
let bulbasaur = new Pokemon('bulbasaur', 95, 105);
let charmander = new Pokemon('charmander', 100, 25)
let mankey = new Pokemon('mankey', 150, 50);


let lightning = new AttackSkill('lightning', 40, 30);
let poisonSeed = new AttackSkill ('poison seed', 20, 20);
let fire = new AttackSkill('fire', 10, 10);
let water = new AttackSkill('water', 15, 15);

console.log(pikachu.setSkills(lightning));
console.log(bulbasaur.setSkills(poisonSeed));
console.log(pikachu);
console.log(bulbasaur);
console.log("=".repeat(20));

pikachu.showStatus();
bulbasaur.showStatus();
console.log("=".repeat(20));

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();

pikachu.attack(0, bulbasaur);
console.log("=".repeat(20));

pikachu.getMagic(50);
pikachu.showStatus();
console.log("=".repeat(20));

pikachu.attack(0, bulbasaur);
pikachu.showStatus();
bulbasaur.showStatus();
console.log("=".repeat(20));

pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);