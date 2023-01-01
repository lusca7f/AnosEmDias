function idadeDias() {
    var idade = parseFloat(document.getElementById("idadeInput").value);
    var result = document.getElementById("demo");
  
    if (idade <= 0) {
      result.textContent = `Digite uma idade maior que 0`;
    } else {
      result.textContent = `Você tem ${idade} anos, isso equivale a ${idade * 365} dias`;
    }
}
  
  function resetar() {
    document.location.reload();
}



