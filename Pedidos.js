const cantidad1 = document.querySelector('#cantidad');
const subtotal1 = document.querySelector('#subtotal');
const cantidad2 = document.querySelector('#cantidad2');
const subtotal2 = document.querySelector('#subtotal2');
const total = document.querySelector('#total');

cantidad1.addEventListener('input', actualizarSubtotal);
cantidad2.addEventListener('input', actualizarSubtotal);

function actualizarSubtotal() 
  const precio1 = 10;
  const precio2 = 15;
  const cantidadProducto1 = cantidad1.value;
  const cantidadProducto2 = cantidad2.value;
  const subtotalProducto1 = precio1 * cantidadProducto1;
  const subtotalProducto2 = precio2 * cantidadProducto2;
  subtotal1.textContent = `$${subtotalProducto1.toFixed(2)}`;
  subtotal2.textContent = `$${subtotalProducto2.toFixed(2)}`;