// let promedio = (nota1 , nota2 , nota3 , callback)=>{
// 	setTimeout(function(){
// 		let resultado = (nota1 + nota2 + nota3) / 3;
// 		callback (resultado);
// 	} , 0);
// }

// promedio(5,5,6, function(resultados){
// 	console.log(resultados);
// })

let estudiante = {
	nombre: 'Juan',
	edad: 24,
	notas : {
		matematicas: 3,
		ingles: 4,
		programacion : 5
	}
};

let obtenerPromedio = (nota1 , nota2 , nota3) => (nota1 + nota2 + nota3)/3;

// console.log(obtenerPromedio(estudiante.notas.matematicas , estudiante.notas.ingles , estudiante.notas.programacion));

module.exports = {
	estudiante,
	obtenerPromedio
};