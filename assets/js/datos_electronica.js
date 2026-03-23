export let productosA = [{
  id: 0, nombre: "Tablet", precio: 20, stock: 50, categoria: "tecnologia"},
  {
  id: 1, nombre: "PC", precio: 200, stock: 2, categoria: "tecnologia"},
  {
  id: 2, nombre: "Movil", precio: 2000, stock: 77, categoria: "tecnologia"}];

function limpiarStockBajo(limite) {
  let filtrados = [];
  productosA.forEach(element => {
    if(element[3] > limite){
      filtrados.push(element);
    }
  });
}

limpiarStockBajo(3);