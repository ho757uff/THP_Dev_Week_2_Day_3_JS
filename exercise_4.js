// Définir une fonction countBuildingsWithSweetThatSunnyViewQuadratic qui prend un tableau (heights) en entrée
function countBuildingsWithSweetThatSunnyViewQuadratic(heights) {
  var count = 0; // Initialiser le compteur à zéro

  // Parcourir les hauteurs des bâtiments
  for (var i = 0; i < heights.length; i++) {
    var hasSunsetView = true; // Supposons que le bâtiment i a une vue sur le soleil couchant

    // Comparer le bâtiment i avec tous les bâtiments à sa droite
    for (var j = i + 1; j < heights.length; j++) {
      if (heights[j] >= heights[i]) {
        // Si un bâtiment à droite est plus grand ou de même hauteur, il bloque la vue sur le soleil couchant
        hasSunsetView = false;
        break;
      }
    }

    if (hasSunsetView === true) {
      count++; // Si le bâtiment i a une vue sur le soleil couchant, incrémenter le compteur
    }
  }

  return count; // Retourner le nombre total de bâtiments avec vue ensoleillée
}

// Définir un tableau de hauteurs de bâtiments
const buildingHeights = [3, 7, 8, 3, 6, 1];

// Appeler la fonction countBuildingsWithSweetThatSunnyViewQuadratic avec le tableau de hauteurs
console.log(countBuildingsWithSweetThatSunnyViewQuadratic(buildingHeights)); // Devrait afficher 3
