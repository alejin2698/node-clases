const {cursos} = require ('./pruebas1'); //Estan los cursos
const readline = require('readline'); //Lo uso para el ingreso de datos en la consola
const fs = require ('fs');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
	});

var respuestas = ""; //declaro variables globales
var nombre = "";
var cedula = "";
var idCurso = 0;
var texto = "";

console.log('***BIENVENIDO A LOS CURSOS VIRTUALES***');
console.log('*A Continuación se listara los cursos disponibles*');

for (let i = 0; i < cursos.length ; i++) {
	setTimeout(function(){
		console.log('Nombre del curso ' + cursos[i].nombre);
		console.log('Id del curso ' + cursos[i].id);
		console.log('Duración del curso ' + cursos[i].duracion);
		console.log('Valor del curso ' + cursos[i].valor);
		console.log('----------');
	}, 2000*(i+1));
}

setTimeout(function(){
	console.log('*** Registro ***');
	read();
},2000*cursos.length);

function read(){
	var total = '';
	//Comienzo a pedir datos al usuario
	var mensaje1 = '*Si esta interesado en alguno de nuestros cursos ingresa la palabra “inscribir” para continuar con los siguientes pasos. Si no, puede escribir cualquier valor y se cancelara*'+'\n';
	rl.question(mensaje1, (answer) => {
		total = answer;
		if (total == 'inscribir') {
			console.log('Escribe los siguientes datos personales');
			rl.question('1) Nombre completo: ', (name) => {
				nombre = name;
			    rl.question('2) Cédula:', (address) => {
			        cedula = address;
			        rl.question('3) Id del curso:', (cursoid) => {
			        	idCurso = cursoid;
			        	rl.close();
			        });
			    });
			});
		}else{
			rl.close();
		}
	});
	rl.on('close' , function(){
		if (nombre !== '' && cedula !== '' ) {
			let resul = cursos.filter( curso => curso.id === parseInt(idCurso));
			if (resul.length > 0) {
				texto = '***Datos completos***'+'\n'+'Nombre completo: ' + nombre +'\n' +
				'Cédula: ' + cedula + '\n' + 'Id de curso seleccionado: ' + idCurso + '\n\n'+'Nombre del curso: '+ resul[0].nombre+'\n'+
				'Duración del curso: '+ resul[0].duracion +'\n'+'Valor del curso: '+ resul[0].valor ;
				fs.writeFile('datos-curso.txt' , texto , (error) => {
					if (error) throw (error);
					console.log('***Se ha inscrito correctamente y se ha generado el archivo con los datos***')
				});
			}else{
				console.log('**No Existe el Id del curso , vuelva a intentarlo**');
			}
		}else{
			console.log('**Inscripción cancelada, puede intentarlo cuando desee**')
		}
	});
}


//Codigo de clases anteriores no poner cuidado
// const datosIngresa = {
// 	idCurso:{
// 		default: 1,
// 		alias: 'id'
// 	},
// 	nombreUser:{
// 		default: '',
// 		alias: 'nombre'
// 	},
// 	cedulaUser:{
// 		default : 0,
// 		alias: 'cedula'
// 	}
// };
// const argv = require('yargs')
// 			.command('datos' ,'Datos personales' , datosIngresa)
// 			.argv

// console.log(argv.matematicas);
// console.log('El promedio es ' + (argv.m + argv.i + argv.p)/3);