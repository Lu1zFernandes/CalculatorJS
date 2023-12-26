export default function () {
  const resultInput = document.getElementById("result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  //Usando recursos do próprio Javascript para resolver os problemas
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}
