
let numero = function generaNumero() {
 numero = Math.floor(Math.random() * 76) + 1;
document.getElementById("numero").innerHTML = numero;
}

  document.getElementById("genera").addEventListener("click", numero);

  const tabella = document.createElement("table");

for (let i = 1; i <= 76; i++) {
  const riga = document.createElement("tr");
  const cella = document.createElement("td");
  cella.textContent = i;
  riga.appendChild(cella);
  tabella.appendChild(riga);
}

document.body.appendChild(tabella);

    











