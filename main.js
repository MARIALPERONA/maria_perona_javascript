/*calculadora de cuotas para productos*/
/* todos los productos que superen el monto de $100.000 podrán abonarse en 12 cuotas sin interes*/

console.log("Bienvenido a la calculadora de cuotas");

let Producto = prompt("Ingrese el nombre de su producto");
let ValorProducto = parseInt(prompt("Ingrese el valor en pesos de su producto"));
let resultado = ValorProducto / 12;
if (ValorProducto >= 100000) {
    alert("Su producto entra en el plan de 12 cuotas.");
} else {
    alert("Su producto no alcanza el monto necesario para entrar en el plan de 12 cuotas sin interés.");
}

while (ValorProducto >= 100000) {
    resultado = ValorProducto / 12;
    alert(`Su ${Producto} se puede abonar en 12 cuotas de ${resultado}`);
    break; 
}

function avisodescuento(ValorProducto) {
    let voucher = (ValorProducto / 100) * 10;
    console.log(`Gracias por utilizar el servicio, se ha ganado un voucher de ${voucher} de descuento en su próxima compra.`);
    return;
  }

avisodescuento(valorProducto);






