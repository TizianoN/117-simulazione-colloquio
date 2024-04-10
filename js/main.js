function checkResult() {
  // Definisce alcuni scenari di test
  const tests = [
    { target: 9, numbersList: [2, 7, 11, 15], expected: [0, 1] },
    { target: 10, numbersList: [3, 2, 4, 8], expected: [1, 3] },
    { target: 6, numbersList: [3, 3], expected: [0, 1] },
    { target: 17, numbersList: [1, 10, 5, 8, 12, 3], expected: [2, 4] },
  ];

  // Esegue i test
  tests.forEach((test, index) => {
    const { target, numbersList, expected } = test;
    const result = findIndexes(target, numbersList);
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log(`Test ${index + 1}: Passato`);
    } else {
      console.error(
        `Test ${
          index + 1
        }: Fallito.\nTarget: ${target} \nInviato: [${numbersList}] \nAtteso: [${expected}] \nOttenuto: [${result}]`
      );
    }
  });
}

if (testReady) {
  checkResult();
} else {
  console.info('Quando sarai pronto per testare la tua funzione switcha la variabile "testReady" su "true"');
}
