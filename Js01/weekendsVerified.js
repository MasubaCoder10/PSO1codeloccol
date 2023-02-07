/* Exercice 02 :
Ecrivez un programme qui prend entréé une chaine de caractères 
représentant un jour de la semaine, utilisez une condition if-else pour
vérifiez si le jour est samedi ou dimanche et affiche "weekend" si le jour
est samedi ou dimanche, et "weekday" sinon.

*/
const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Veuillez entrez la chaine de caracteres:");
if ((name == "samedi") || (name == "dimanche")) console.log("weekend");
else console.log("weekday");