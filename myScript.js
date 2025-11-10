document.getElementById("btnConvertir").addEventListener("click", convertir);

class Convertidor {
    constructor() {
        this.tasas = {
            MXN: 1,
            USD: 0.055,
            EUR: 0.050,
            JPY: 8.15
        };
        this.simbolos = {
            MXN: "mx",
            USD: "us",
            EUR: "eu",
            JPY: "jp"
        };
    }

    convertir(cantidad, origen, destino) {
        const base = cantidad / this.tasas[origen];
        return base * this.tasas[destino];
    }
}

const conv = new Convertidor();

function convertir(e) {
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const div = document.getElementById("resultado");

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresa una cantidad valida");
        return;
    }

    const res = conv.convertir(cantidad, origen, destino);
    div.innerHTML = `
        <p>${conv.simbolos[origen]} ${cantidad.toFixed(2)} = ${conv.simbolos[destino]} ${res.toFixed(2)}</p>
    `;
}
