var NameAlumno = " ";
var NotaAlumnno = 0;
var AsistenciaAlumno = 0;
var PorcetajeAsistencia = 0;

NameAlumno = prompt("Ingrese el nombre del alumno: ");
NotaAlumnno = prompt("Ingrese la nota del alumno (1.0 al 5.0): ");
AsistenciaAlumno = prompt("Ingrese los dias asistidos (15 de 15): ");

PorcetajeAsistencia = AsistenciaAlumno * 100 / 15;

if (PorcetajeAsistencia >= 80 ) {

    alert ("El alumno " +NameAlumno+ " con su nota " +NotaAlumnno+ ", es APROBADO. Ya que tuvo una asistencias mayor a " +PorcetajeAsistencia+ "%");
    
} if (PorcetajeAsistencia < 80 ) {
    
    alert ("El alumno " +NameAlumno+ " con su nota " +NotaAlumnno+ ", es REPROBADO. Ya que tuvo asitencia menor a " +PorcetajeAsistencia+ "%");

}
