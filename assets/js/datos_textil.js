export const productosB = [
  { id: 3, nombre: "Camiseta", precio: 20, stock: 50, categoria: "ropa" },
  { id: 4, nombre: "Pantalon", precio: 35, stock: 30, categoria: "ropa" }
];

// descuento
function aplicarDescuento(porcentaje) {
  return productosB.map(p => {
    p.precio = p.precio - (p.precio * porcentaje / 100);
    return p;
  });
}

// código seguridad
function codigo(nombre) {
  return nombre.split("").reverse().join("");
}