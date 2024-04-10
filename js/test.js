// Quando sarai pronto per testare la tua funzione switcha il valore della variabile "testReady" su "true";
const testReady = true;

// Scrivi di seguito lo svolgimento della traccia
function findIndexes(target, numbersList) {
  const map = [];
  for (let i = 0; i < numbersList.length; i++) {
    const complement = target - numbersList[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[numbersList[i]] = i;
  }
  return []; // In teoria, non dovrebbe mai arrivare qui, basato sulla nota fornita
}
