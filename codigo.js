function encontrarNumeroMasGrande() {
    const numerosInput = document.getElementById("numeros");
    const resultadoNumeroMasGrande = document.getElementById("resultadoNumeroMasGrande");

    const numeros = numerosInput.value.split(",").map(Number);

    if (numeros.length === 0 || !numeros.every(Number.isFinite)) {
        resultadoNumeroMasGrande.textContent = "Ingrese números válidos separados por comas.";
        return;
    }

    const max = Math.max(...numeros);
    resultadoNumeroMasGrande.textContent = "El número más grande es: " + max;
}

function convertirAMayusculasYReemplazarEspacios() {
    const textoInput = document.getElementById("texto");
    const resultadoConvertido = document.getElementById("resultadoConvertido");

    const texto = textoInput.value;

    const textoConvertido = texto.toUpperCase().replace(/\s/g, "_");
    resultadoConvertido.textContent = "Texto convertido: " + textoConvertido;
}

function encontrarNumerosPrimos() {
    const limiteInput = document.getElementById("limite");
    const resultadoNumerosPrimos = document.getElementById("resultadoNumerosPrimos");

    const limite = parseInt(limiteInput.value);

    if (isNaN(limite) || limite < 2) {
        resultadoNumerosPrimos.textContent = "Ingrese un número válido mayor o igual a 2.";
        return;
    }

    const primos = [];
    for (let i = 2; i <= limite; i++) {
        let esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(i);
        }
    }

    resultadoNumerosPrimos.textContent = "Números primos menores o iguales: " + primos.join(", ");
}

function calcularLongitudDeStrings() {
    const palabrasInput = document.getElementById("palabras");
    const resultadoLongitudStrings = document.getElementById("resultadoLongitudStrings");

    const palabras = palabrasInput.value.split(",");

    const longitudes = palabras.map(palabra => palabra.trim().length);
    resultadoLongitudStrings.textContent = "Longitudes de strings: " + longitudes.join(", ");
}

function obtenerNombresDePropiedades() {
    const objetoInput = document.getElementById("objeto");
    const resultadoNombresPropiedades = document.getElementById("resultadoNombresPropiedades");

    const objetoTexto = objetoInput.value.trim();

    try {
        const objeto = JSON.parse(objetoTexto);
        const propiedades = Object.keys(objeto);
        resultadoNombresPropiedades.textContent = "Nombres de propiedades: " + propiedades.join(", ");
    } catch (error) {
        resultadoNombresPropiedades.textContent = "Ingrese un objeto JSON válido.";
    }
}
