// Exercice 01 : Afficher  la somme des nombres de 1 à 10 en utilisant une boucle.
let somme = 0;
for (let i = 0; i <= 10; i++) {
    somme += i; //A chaque itération de i on addition la valeur de i à somme
}
console.log("Sum of numbers 1 to 10:", somme);