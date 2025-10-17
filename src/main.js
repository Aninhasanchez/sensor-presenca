import "./style.css";

const tabela = document.getElementById("tabela-presenca");
const statusDiv = document.getElementById("status");
const btn = document.getElementById("btn-simular");

function registrarPresenca(nome) {
  const horario = new Date().toLocaleTimeString();
  const linha = document.createElement("tr");
  linha.className = "hover:bg-purple-50 transition";
  linha.innerHTML = `
    <td class="p-4 font-medium">${nome}</td>
    <td class="p-4 text-green-600 font-semibold">Presente</td>
    <td class="p-4 text-gray-600">${horario}</td>
  `;
  tabela.appendChild(linha);
}

function simularPresenca() {
  const nomes = ["Ana", "João", "Maria"];
  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  registrarPresenca(nomeAleatorio);
}

btn.addEventListener("click", simularPresenca);
statusDiv.textContent = "Conectado (modo simulação)";
