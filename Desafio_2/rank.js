
const prompt = require('prompt-sync')();

let saldo_vitorias=prompt("Digite o saldo de vitórias:");

function classificarNivel(saldo_vitorias) {
    let nivel

    if (saldo_vitorias <= 10) {
        nivel = "Ferro";
    } else if (saldo_vitorias <= 20) {
        nivel = "Bronze";
    } else if (saldo_vitorias <= 50) {
        nivel = "Prata";
    } else if (saldo_vitorias <= 80) {
        nivel = "Ouro";
    } else if (saldo_vitorias <= 90) {
        nivel = "Diamante";
    } else if (saldo_vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldo_vitorias} está no nível de ${nivel}`
}

console.log(classificarNivel(saldo_vitorias))
