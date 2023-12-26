//! Importando
import calculate from "./calculate.js";
import clear from "./clear.js";
import copy from "./copy.js";
import keys from "./keys.js";
import { addKey } from "./keys.js";
import theme from "./theme.js";

//! Função para realizar os cálculos
document.getElementById("equal").addEventListener("click", calculate);

//! Essa função limpará a tela de cálculo
document.getElementById("clear").addEventListener("click", clear);

//! Função para copiar o resultado
document.getElementById("copyToClipboard").addEventListener("click", copy);

//! Essa função é para que o teclado do computador possa ser usado
//! Desde que aperte apenas nas teclas permitidas
input.addEventListener("keydown", keys);

//! Pegaremos todas as chaves e iremos pegar os seus valores
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", addKey);
});

//! Alternação entre os temas claro e escuro
document.getElementById("themeSwitcher").addEventListener("click", theme);
