const usuarios = [
  { nombre: "Jaume", esVIP: true, carrito: [100] },
  { nombre: "Jesus", esVIP: false, carrito: [200] },
  { nombre: "Fernando", esVIP: false, carrito: [500] }
  
];

function calcularTotal(nombre) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre === nombre) {
      let total = 0;

      for (let j = 0; j < usuarios[i].carrito.length; j++) {
        total += usuarios[i].carrito[j];
      }

      if (usuarios[i].esVIP) {
        total = total * 0.85;
      }

      console.log("Usuario " + nombre + " debe pagar: $" + total);
    }
  }
}

function contarVIPs() {
  let contador = 0;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].esVIP) {
      contador++;
    }
  }

  console.log("VIPs: " + contador);
}

// Pruebas
calcularTotal("Jesus");
calcularTotal("Jaume");
calcularTotal("Fernando")
contarVIPs();