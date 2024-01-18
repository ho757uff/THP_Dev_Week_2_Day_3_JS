// Logique : 2 boucles qui permettent de parcourir les éléments du tableau et de les comparer à k.
// Reflexion : on considère la valeur de l'élément à l'index i et on lui additione chaque nombre suivant.

// Définir une fonction isPairEqualToGivenConst qui prend un tableau (arr) et un nombre (k) en entrée
function isPairEqualToGivenConst(arr, k) {
  // Boucle externe parcourant les éléments du tableau
  for (var i = 0; i < arr.length; i++) {
    // Boucle interne parcourant les éléments du tableau à partir de l'élément suivant après i
    for (var j = i + 1; j < arr.length; j++) {
      // Vérifier si la somme des éléments à l'indice i et j est égale à k
      if (arr[i] + arr[j] === k) {
        return true; // Si une paire est trouvée, retourner "true"
      }
    }
  }
  // Si aucune paire n'est trouvée après avoir parcouru tout le tableau, retourner "false"
  return false;
}

// Tableau de nombres
const numbers = [10, 15, 3, 7, 9, 11, 12, 17, 18, 19, 20, 21];
// Valeur de k
const k = 35;

// Appeler la fonction isPairEqualToGivenConst avec le tableau numbers et la valeur k
console.log(isPairEqualToGivenConst(numbers, k)); // Devrait afficher true si une paire d'éléments ayant une somme égale à k est trouvée, sinon false
