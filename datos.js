const {estudiante , obtenerPromedio} = require ('./pruebas1'); //nosotros
const fs = require ('fs'); //globalizado

console.log('el nombre de estudiante es ' + estudiante.nombre);
console.log('premoedio p ' + obtenerPromedio(estudiante.notas.matematicas , estudiante.notas.ingles , estudiante.notas.programacion));

let {nombre , edad: anno , notas :{matematicas , ingles , programacion}} = estudiante;
console.log('el nombre de estudiante 1 es ' + nombre);
console.log('premoedio 1 es ' + obtenerPromedio(matematicas , ingles , programacion));
console.log('La edad es ' + anno);

let crearArchivo = (estudiante) => {
	texto = 'el nombre de estudiante 1 es' + nombre +'\n' +
			'ha obtenido un pemdio de ' + obtenerPromedio(matematicas , ingles , programacion);

	fs.writeFile('Pomedio.txt' , texto , (error) => {
		if (error) throw (error);
		console.log('se ha creado el archivo');
	});
}

crearArchivo(estudiante);