/* 
Exercice 03 :
 Écrire un programme qui affiche tous les nombres impairs de 1 à 19 à 
l'aide d'une boucle while

*/
let i = 0;
while (i <= 19) {
    if (i % 2 != 0) console.log(i); // A chaque iteration de la boucle while on test avec la condition if si la valeur de i n'est pas divisible par 2
    i++;
}