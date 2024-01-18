// Logique : plus de "brute force" ici, il faut que l'on stocke les valeurs fournies dans un ensemble.
// Reflexion 1: on considère la valeur de l'élément à l'index i et on lui additione chaque nombre suivant.


// Définir une fonction isPairEqualToGivenConst qui prend un tableau (arr) et un nombre (k) en entrée
function isPairEqualToGivenConst(arr, k) {
  // Créer un ensemble (set) pour stocker les nombres déjà rencontrés
  const seenNumbers = new Set();

  // Parcourir les éléments du tableau
  for (var i = 0; i < arr.length; i++) {
    // Calculer la différence entre k et l'élément actuel
    const difference = k - arr[i];
    
    // Vérifier si la différence est présente dans l'ensemble seenNumbers
    if (seenNumbers.has(difference)) {
      return true; // Si la différence est trouvée, il y a une paire, donc retourner true
    }
    
    // Ajouter l'élément actuel à l'ensemble seenNumbers
    seenNumbers.add(arr[i]);
  }

  // Si aucune paire n'est trouvée après avoir parcouru tout le tableau, retourner false
  return false;
}

// Définir un tableau de nombres
const numbers = [10, 15, 3, 7, 9, 11, 12, 17, 18, 19, 20, 21];
// Définir la valeur de k
const k = 35;

// Appeler la fonction isPairEqualToGivenConst avec le tableau numbers et la valeur k
console.log(isPairEqualToGivenConst(numbers, k)); // Devrait afficher true si une paire d'éléments ayant une somme égale à k est trouvée, sinon false
