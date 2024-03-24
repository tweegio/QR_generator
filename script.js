function generarQR() {
  
 
  var texto = document.getElementById("texto").value;
  if (texto === "") {
    alert("Por favor, introduce un texto o una URL para generar el código QR.");
    
    return;
  } else {
    alert("felicidades, presiona Aceptar para ver tu QR!!!");
    eliminaQR();

   
  }


  var codigoQR = new QRCode(document.getElementById("codigoQR"), {
    text: texto,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    //biblioteca de Js. para generar QR
    correctLevel: QRCode.CorrectLevel.H,
    
  
  
  });
}

function eliminaQR(){
// Eliminar el código QR anterior si existe
var codigoQRContenedor = document.getElementById("codigoQR");
codigoQRContenedor.innerHTML = ''; 
}
   

//Funcionalidad para borrar texto
document.getElementById('botonReiniciar').addEventListener('click', function() {
    
  // Obtener el textarea por su ID
    var textarea = document.getElementById('texto');



    // Reiniciar el contenido del textarea
    textarea.value = '';
 
    eliminaQR();
});