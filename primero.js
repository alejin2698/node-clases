function promedio(nota1 , nota2 , nota3) {
	let resultado = (nota1 + nota2 + nota3) / 3;
	console.log('promedio1 es igual a ' + resultado);
}

let promedio2 = (nota1 , nota2 , nota3) => {
	let resultado = (nota1 + nota2 + nota3) / 3;
	console.log('promedio2 es igual a ' + resultado);
}

let promedio3 = (nota1 , nota2 , nota3) => console.log('promedio3 es igual a ' + (nota1 + nota2 + nota3) / 3);

promedio(3,2,1);
promedio2(3,2,1);
promedio3(3,2,1);

console.log("Escribe un ping");
var stdin = process.openStdin();
console.log('escribiste ' + stdin);
// stdin.addListener("data", function(d) {
//     console.log("Tu nombre es: " +  d.toString().trim());
//   });

alert('hij');