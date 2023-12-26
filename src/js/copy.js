export default function (ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");

    //Passando para a área de trasnferência
    navigator.clipboard.writeText(document.getElementById("result").value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
}
