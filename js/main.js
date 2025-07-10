// WhatsApp config
const whatsappNumber = '+5493564225100';
const whatsappMessage = encodeURIComponent('Hola, quiero registrarme en LunaBet y aprovechar el bono del 30%');

function openWhatsApp() {
  window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
}

// Contador de usuarios (simulado)
function actualizarContador() {
  const contador = document.getElementById('contadorUsuarios');
  if (!contador) return;
  contador.textContent = 'Usuarios activos: 128'; // se conectará a BD en el futuro
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarContador();
  setInterval(actualizarContador, 30000);
});
