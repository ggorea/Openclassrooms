/* 
Activité : jeu de devinette
*/
console.log("Bienvenue dans ce jeu de devinette!")
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
var i = 0 //  compteur de la boucle 
var nombre = ""; // nombre saisi par le joueur
while (i < 6) {
	// instructions executees tant que la condition est verifie
	i++; // ++rajoute 1 au nombre d'essais deja executes
	var nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
	if (nombre === solution) {
		console.log(":) Bravo! La solution était " + solution + " Vous avez trouvé en " + i + " essai. ");// instructions executees quand la solution est devinee
	} 
        else if (nombre > solution) {
		console.log(nombre + " est trop grand. Il vous restent: " + (6-i) + " essais."); // instructions executees quand le nombre saisie est trop grand
	}
	    else if (nombre < solution) {
		console.log(nombre + " est trop petit. Il vous restent: " + (6-i) + " essais.");//instructions executees quand le nombre saisie est trop petit
	}
}
