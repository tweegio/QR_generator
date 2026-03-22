function generarQR() {
    var texto = document.getElementById("texto").value;

    if (texto === "") {
        // Shake the textarea instead of alert
        var ta = document.getElementById("texto");
        ta.style.borderColor = "#f87171";
        ta.style.boxShadow = "0 0 0 3px rgba(248,113,113,0.15)";
        ta.placeholder = "⚠️  Ingresá un texto primero…";
        setTimeout(() => {
            ta.style.borderColor = "";
            ta.style.boxShadow = "";
            ta.placeholder = "Ingresá una frase, enlace o cualquier texto…";
        }, 2000);
        return;
    }

    eliminaQR();

    // Hide placeholder
    var placeholder = document.getElementById("qr-placeholder");
    if (placeholder) placeholder.style.display = "none";

    var frame = document.getElementById("qr-frame");
    frame.classList.add("has-qr");

    var container = document.getElementById("codigoQR");
    container.classList.add("qr-animate");

    new QRCode(container, {
        text: texto,
        width: 220,
        height: 220,
        colorDark: "#0a0a0f",
        colorLight: "#f0f0f8",
        correctLevel: QRCode.CorrectLevel.H,
    });

    // Caption
    var caption = document.getElementById("qr-caption");
    var short = texto.length > 30 ? texto.slice(0, 30) + "…" : texto;
    caption.textContent = "✓ QR generado para: " + short;
    caption.style.color = "#4ade80";
}

function eliminaQR() {
    var container = document.getElementById("codigoQR");
    container.innerHTML = "";
    container.classList.remove("qr-animate");

    var frame = document.getElementById("qr-frame");
    frame.classList.remove("has-qr");

    var placeholder = document.getElementById("qr-placeholder");
    if (placeholder) placeholder.style.display = "flex";

    var caption = document.getElementById("qr-caption");
    caption.textContent = "";
    caption.style.color = "";
}

// Borrar texto
document.getElementById("botonReiniciar").addEventListener("click", function () {
    document.getElementById("texto").value = "";
    eliminaQR();
});
