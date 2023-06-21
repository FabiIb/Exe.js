/* Scrivete una funzione chiamata repeatHello che prende come parametro un callback. 
La funzione callback stamperà semplicemente "Hello". 
La funzione repeatHello dovrà eseguire la funzione callback con un intervallo di 1 secondo. 
La funzione di callback deve essere una funzione freccia, potete spiegare perché? */

function repeatHello(callback) {
  setInterval(callback, 1000);
}

const newHello = () => {
  console.log("Hello");
}
// Si utilizza l'arrow function perchè il codice risulta più conciso, e risulta molto più utile per le funzioni di callback

repeatHello(newHello);

  