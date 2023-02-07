/*
Exercice 04 :
Écrivez un programme qui utilise console.log pour imprimer tous les 
nombres de 1 à 20. Si le nombre est pair, la console affichera paire au 
lieu du nombre et si le nombre est impaire, elle affichera impaire au lieu 
du nombre

 */

let i = 1;
while (i < 20) {
    if (i % 2 == 0) console.log("paire");
    else if (i % 2 != 0) console.log("impaire");
    i++;
}