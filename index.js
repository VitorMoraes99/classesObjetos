class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    atacar () {
        let ataque

        if (this.type === "mago"){
            ataque = "usou magia"
        } else if (this.type === "guerreiro") {
            ataque = "usou espada"
        } else if (this.type === "monge") {
            ataque = "usou artes marciais"
        } else if (this.type === "ninja") {
            ataque = "usou shuriken"
        } else {
            console.log ("ataque desconhecido")
        }

        console.log (`O ${this.type} atacou ${ataque}`)
    }
  
}

const hero1 = new Hero ("Vitor", 25, "monge");
hero1.atacar();

const hero2 = new Hero ("Vitor", 25, "mago");
hero2.atacar();

const hero3 = new Hero ("Vitor", 25, "guerreiro");
hero3.atacar();

const hero4 = new Hero ("Vitor", 25, "ninja");
hero4.atacar();