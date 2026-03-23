let productosA = [[0,"Tablet", 100, 5,"tecnologia"],[0,"Movil", 200, 50,"tecnologia"],[0,"PC", 300, 1,"tecnologia"]];

function limpiarStockBajo(limite) {
  let filtrados = [];
  productosA.forEach(element => {
    if(element[3] > limite){
      filtrados.push(element);
    }
  });
}

limpiarStockBajo(3);