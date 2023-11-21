
// Creamos una lista de estudiantes 

const listaEstudiantes = [
    {nombre: "Juan",edad:21,especialidad: "desarrollador web"},
    {nombre: "Diego",edad: 22,especialidad: "analista de sistemas"},
    {nombre: "Pablo",edad:23,especialidad:"Desarrollador aplicaciones mov"}
];
// Aplicamos Rest Operator, donde mostraremos el primer estudiante
// y despues los demas
const [primerEstudiante,...restoEstudiantes] = listaEstudiantes;

console.log(primerEstudiante);
console.log(restoEstudiantes);


const estudiante = {asignatura:"IoT", numeroMaterias:23}

const nuevoEstudiante = {...estudiante,nombreCompleto:"Diego Cordova"}

console.log(nuevoEstudiante);