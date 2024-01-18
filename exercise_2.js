// Logique : parcourir les bâtiments de droite à gauche, et compter le nombre de bâtiments avec vue ensoleillée.
// Réflexion 1: dernier bâtiment a forcément une vue ensoleillée. => count = 1
// Réflexion 2: en partant de l'Est pour aller à l'Ouest, les bâtiments auront une vue ensoleillée si et seulement si la hauteur du bâtiment est plus grande que la hauteur maximale enregistrée. => heights[i] > maxHeight = count ++ & maxHeight = heights[i]

// Définir une fonction countBuildingsWithThatSweetSunnyView qui prend un tableau (heights) en entrée
function countBuildingsWithThatSweetSunnyView(heights) {
  var count = 1;        // Initialiser un compteur à zéro pour suivre le nombre de bâtiments avec vue ensoleillée
  var maxHeight = 0;    // Initialiser la hauteur maximale à zéro pour comparer avec les bâtiments suivants

  // Parcourir les bâtiments dans le tableau de droite à gauche
  for (var i = heights.length - 1; i > 0; i--) {
    // Vérifier si la hauteur du bâtiment actuel est plus grande que la hauteur maximale enregistrée
    if (heights[i] > maxHeight) {
      count++;          // Si c'est le cas => count ++ car ce bâtiment a une vue ensoleillée
      maxHeight = heights[i]; // Mettre à jour la hauteur maximale avec la nouvelle hauteur
    }
  }

  return count; // Retourner le nombre total de bâtiments avec vue ensoleillée
}

// Définir un tableau de hauteurs de bâtiments
const buildingHeights = [11, 10, 3, 7, 8, 3, 6, 1, 9, 4, 2, 5];

// Appeler la fonction countBuildingsWithThatSweetSunnyView avec le tableau de hauteurs
console.log(countBuildingsWithThatSweetSunnyView(buildingHeights)); // Doit afficher 4
