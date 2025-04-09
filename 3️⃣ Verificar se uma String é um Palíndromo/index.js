function isPalindromo(texto) {
    let formatado = texto.replace(/\s+/g, '');
    formatado = formatado.toLowerCase();
    formatado = formatado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
    const invertido = formatado.split('').reverse().join('');
    return formatado === invertido;
  }
  
  console.log(isPalindromo("arara")); // true
  console.log(isPalindromo("Socorram me subi no ônibus em marrocos")); // true
  console.log(isPalindromo("Hello, World!")); // false
  