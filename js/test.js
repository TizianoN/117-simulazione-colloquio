// Quando sarai pronto per testare la tua funzione switcha il valore della variabile "testReady" su "true";
const testReady = true;

// Scrivi di seguito lo svolgimento della traccia
function findIndexes(target, numbersList) {
  // dichiaro la mappa
  const map = [];

  // per ogni numero della lista
  for (let i = 0; i < numbersList.length; i++) {
    // recupero il numero corrente dalla lista
    const examinedNumber = numbersList[i];

    // recupero il complemento necessario al numero esaminato per raggiungere il numero target
    const complement = target - examinedNumber;

    // se il complemento è stato incontrato in precedenza (è presente come indice nell'array map)
    if (map[complement] !== undefined)
      // ritorno i due indici:
      // 1. map[complement] ha come valore l'indice del complemento
      // 2. i è l'indice corrente
      return [map[complement], i];

    // altrimenti traccio il numero esaminato dentro la mappa:
    // NB: la mappa funziona perché l'indice viene usato come valore e viceversa
    map[examinedNumber] = i;
  }

  // In base alla nota nella traccia c'è sempre un return possibile e non si arriva mai qui.
}
