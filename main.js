// Agrega un evento al botón con id 'verificar' que se ejecuta al hacer clic
document.getElementById('verificar').addEventListener('click', function() {
    // Obtiene el valor del campo de texto con id 'frase' y elimina espacios en blanco
    let frase = document.getElementById('frase').value.trim();
    // Selecciona los elementos para mostrar el resultado y las advertencias
    let resultado = document.getElementById('resultado');
    let advertencia = document.getElementById('advertencia');

    // Oculta los elementos de resultado y advertencia al inicio
    resultado.classList.add('oculto');
    advertencia.classList.add('oculto');

    // Verifica si la frase está vacía
    if (!frase) {
        // Si está vacía, muestra un mensaje de advertencia
        advertencia.textContent = "Por favor, ingresa una frase.";
        advertencia.className = 'advertencia'; // Cambia la clase para aplicar estilos
        advertencia.classList.remove('oculto'); // Muestra la advertencia
        return; // Sale de la función
    }

    // Limpia la frase eliminando caracteres no alfanuméricos y convirtiéndola a minúsculas
    const fraseLimpia = limpiarFrase(frase);
    // Verifica si la frase limpia es un palíndromo
    const esPalindromo = verificarPalindromo(fraseLimpia);
    
    // Muestra el resultado en función de si es un palíndromo o no
    resultado.textContent = esPalindromo ? "La frase es un palíndromo." : "La frase no es un palíndromo.";
    resultado.className = esPalindromo ? 'palindromo' : 'no-palindromo'; // Cambia la clase para aplicar estilos
    resultado.classList.remove('oculto'); // Muestra el resultado
});

// Función para limpiar la frase: elimina caracteres no alfanuméricos y la convierte a minúsculas
const limpiarFrase = (frase) => {
    return frase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Función para verificar si una frase es un palíndromo
const verificarPalindromo = (frase) => {
    let izquierda = 0; // Índice del inicio de la frase
    let derecha = frase.length - 1; // Índice del final de la frase

    // Compara los caracteres desde ambos extremos hacia el centro
    while (izquierda < derecha) {
        if (frase[izquierda] !== frase[derecha]) return false; // Si no coinciden, no es un palíndromo
        izquierda++; // Mueve el índice izquierdo hacia la derecha
        derecha--; // Mueve el índice derecho hacia la izquierda
    }
    return true; // Si todos los caracteres coinciden, es un palíndromo
}
