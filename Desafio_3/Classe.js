//criando a classe principal
class Heroi{
    constructor(nome , idade ,tipo){
        this.nome=nome[0].toUpperCase() + nome.slice(1)
        this.idade=idade,
        this.tipo=tipo.toLowerCase() 
    }

    atacar(){
        let ataque=""
        switch (this.tipo){
            case "guerreiro":
                ataque="Machado"
                break;
            case "mago":
                ataque="Magia"
                break;
            case "ninja":
                ataque="Ninjutso"
                break;
            case "monge":
                ataque=" os punhos"
                break
            default:
                throw new Error("Tipo de personagem inválido!");
        }

        return `O ${this.tipo} atacou usando ${ataque} , ${this.nome} é implacável`
    }
}

//instanciando objetos e testando funções
let h1=new Heroi("Pedro", 24 , "guerreiro")
let h2=new Heroi("João", 23 , "mago")
let h3=new Heroi("Joana", 21 , "bruxa")


console.log(h1.atacar())

console.log(h2.atacar())

console.log(h3.atacar())