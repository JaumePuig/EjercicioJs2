import { productosA } from "./datos_electronica.js";
import { productosB } from "./datos_textil.js";
const catalogo = document.getElementById("catalogo-total");
const stats = document.getElementById("stats");
let granInventario = [];
productosA.forEach((element) => {
  granInventario.push(element);
});
productosB.forEach((element) => {
  granInventario.push(element);
});
console.log(granInventario);

granInventario.forEach((element) => {
  let newItem = document.createElement("p");
  newItem.textContent =
    "id:" +
    element.id +
    ", nombre:" +
    element.nombre.toUpperCase() +
    ", precio:" +
    element.precio +
    ", stock:" + element.stock;
  catalogo.appendChild(newItem);
});

const initialValue = 0;
const sumWithInitial = granInventario.reduce(
  (accumulator, currentValue) => accumulator + (currentValue.stock * currentValue.precio),
  initialValue,
);
console.log(sumWithInitial);

let techProducts = 0;
let clotheProducts = 0;

granInventario.forEach(element => {
    if (element.categoria == "ropa") {
        clotheProducts = clotheProducts + 1;
    }else if (element.categoria == "tecnologia") {
        techProducts = techProducts + 1;
    }
});

let contadorTech = document.createElement("p");
let contadorClothes = document.createElement("p");

contadorTech.textContent = "Stock tecnologia: " + techProducts;
contadorClothes.textContent = "Stock ropa: " + clotheProducts;

stats.appendChild(contadorTech);
stats.appendChild(contadorClothes);