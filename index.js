// minhas variáveis
let meuHeroi = "Chapolin"
let pontosXP = 9500

let nivelDoheroi ;

// estrutura de decisão
if(pontosXP < 1000){
    nivelDoheroi = "Ferro"
}else if(pontosXP >= 1001 && pontosXP <= 2000){
    nivelDoheroi = "Bronze"
}else if(pontosXP >= 2001 && pontosXP <= 5000){
    nivelDoheroi = "Prata"
}else if(pontosXP >= 6001 && pontosXP <= 7000){
    nivelDoheroi = "Ouro"
}else if(pontosXP >= 7001 && pontosXP <= 8000){
    nivelDoheroi = "Platina"
}else if(pontosXP >= 8001 && pontosXP <= 9000){
    nivelDoheroi = "Ascendente"
}else if(pontosXP >= 9001 && pontosXP <= 10000){
    nivelDoheroi = "Imortal"
}else if(pontosXP >= 10001){
    nivelDoheroi = "Radiante"
}

// Saída
console.log(`O heroi de nome ${meuHeroi} esta no nivel ${nivelDoheroi}!`)