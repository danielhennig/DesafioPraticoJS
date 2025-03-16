function isPalindromo(texto) {
    // Remove espaços
    let formatado = texto.replace(/\s+/g, '');
    // Converte para letras minúsculas
    formatado = formatado.toLowerCase();
    // Remove acentos usando normalização Unicode
    formatado = formatado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
    // Verifica se é palíndromo comparando com a string invertida
    const invertido = formatado.split('').reverse().join('');
    return formatado === invertido;
  }
  
  // Exemplos de uso
  console.log(isPalindromo("arara")); // true
  console.log(isPalindromo("Socorram me subi no ônibus em marrocos")); // true
  console.log(isPalindromo("Hello, World!")); // false
  