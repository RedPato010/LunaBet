// Inicializa el saldo si no existe
if (!localStorage.getItem('saldo')) {
  localStorage.setItem('saldo', '0');
}

// Obtener el saldo actual (como número)
function obtenerSaldo() {
  return parseFloat(localStorage.getItem('saldo')) || 0;
}

// Actualizar el saldo mostrado en pantalla
function mostrarSaldo(idElemento) {
  const saldo = obtenerSaldo();
  const el = document.getElementById(idElemento);
  if (el) el.textContent = `$${saldo.toFixed(2)}`;
}

// Sumar saldo (ej: desde cargar.html)
function cargarSaldo(monto) {
  const actual = obtenerSaldo();
  const nuevo = actual + monto;
  localStorage.setItem('saldo', nuevo.toFixed(2));
}

// Restar saldo (ej: desde retiro.html o juego)
function descontarSaldo(monto) {
  const actual = obtenerSaldo();
  if (monto > actual) return false; // Saldo insuficiente
  const nuevo = actual - monto;
  localStorage.setItem('saldo', nuevo.toFixed(2));
  return true;
}
