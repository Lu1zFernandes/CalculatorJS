export default function () {
  const input = document.getElementById("input");
  const resultInput = document.getElementById("result");
  input.value = "";
  input.focus(); //Para focar na caixa de texto

  //Limpará a caixa de resultado e o copiar
  const button = document.getElementById("copyToClipboard");
  button.innerText = "Copy";
  button.classList.remove("success");

  resultInput.value = "";
  resultInput.classList.remove("error");
}
