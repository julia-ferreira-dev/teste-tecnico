function inverterString(string) {
    return string.split("").reverse().join("");
  }
  
  const stringOriginal = "Exemplo de string";
  const stringInvertida = inverterString(stringOriginal);
  
  console.log("String Original:", stringOriginal);
  console.log("String Invertida:", stringInvertida);