let namePlayer = "Davis";
let xp = 4000;
let nivelHeroi = '';

if (xp <= 1000) {
    nivelHeroi = "ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivelHeroi = "bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivelHeroi = "prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivelHeroi = "ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivelHeroi = "platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivelHeroi = "ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivelHeroi = "imortal";
} else {
    nivelHeroi = "radiante";
}

console.log("O Herói " + namePlayer + " está no nível " + nivelHeroi);
