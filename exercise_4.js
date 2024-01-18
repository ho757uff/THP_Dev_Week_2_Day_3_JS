// Logique : parcourir les bâtiments de droite à gauche, et compter le nombre de bâtiments avec vue ensoleillée.
// Réflexion 1: dernier bâtiment a forcément une vue ensoleillée. => count = 1
// Réflexion 2: en partant de l'Ouest pour aller à l'Est, les bâtiments auront une vue ensoleillée si et seulement si la hauteur du bâtiment est plus grande que la hauteur maximale enregistrée. => heights[i] > maxHeight = count ++ & maxHeight = heights[i]



// Définir une fonction countBuildingsWithThatSweetSunnyView qui prend un tableau (heights) en entrée
function countBuildingsWithThatSweetSunnyView(heights) {
  var count = 0; // Initialiser le compteur à zéro

  // Parcourir les hauteurs des bâtiments
  for (var i = 0; i < heights.length; i++) {
    var hasSunsetView = true; // Supposons que le bâtiment à l'index [i] a une vue sur le soleil couchant

    // Comparer le bâtiment i avec tous les bâtiments à sa droite
    for (var j = i + 1; j < heights.length; j++) {
      if (heights[j] >= heights[i]) {
        // Si un bâtiment à droite est plus grand ou de même hauteur, celui à gauche lui bloque la vue sur le soleil couchant
        hasSunsetView = false;
        break;
      }
    }

    if (hasSunsetView === true) {
      count++; // Si le bâtiment à l'index [i] a une vue sur le soleil couchant => count ++
    }
  }

  return count; // Retourner le nombre total de bâtiments avec vue ensoleillée
}

// Définir un tableau de hauteurs de bâtiments
const buildingHeights = [3, 7, 8, 3, 6, 1];

// Appeler la fonction countBuildingsWithThatSweetSunnyView avec le tableau de hauteurs
console.log(countBuildingsWithThatSweetSunnyView(buildingHeights)); // Devrait afficher 3
