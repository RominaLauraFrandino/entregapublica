
let Alumnos= [];
let AlumnosApellidos = [];
let AlumnosEmail = [];
let contador=0;
const valor =document.querySelector('#valor')
const respuesta=document.querySelector('#respuesta')

let button = document.querySelector("#btnSend");

Alumnos.push("Maria","Jose","Luciano");
AlumnosApellidos.push("Mores","Pepes","Castro");
AlumnosEmail.push("aaa","bbb","bbb");
//  Hasta aquí practiqué guardar en un vector
//  La siguiente función toma los datos de los txt y los guarda en los vectores se muestra por consola
function enviar() {
    let txtName = document.getElementById("nombreUsuario").value;
    let txtSurname = document.getElementById("ApellidoUsuario").value;
    let txtemail = document.getElementById("Email").value;
    Alumnos.push(txtName);
    AlumnosApellidos.push(txtSurname);
    AlumnosEmail.push(txtemail);
    console.log(Alumnos);
//  desde aquí se genera un contador para contar la cantidad de clic, así saber la cantidad de preinscriptos y validar si hay cupo o no
    respuesta.textContent="";
    contador++;
    valor.textContent=contador;
    if (contador == 30) {
        respuesta.textContent="¡Sos el preinscripto n 30!";
        
     } else
     if (contador > 30) {
        respuesta.textContent="No hay más cupo"
        valor.textContent="X";
        button.disabled = true;
        
     } 
    

   
   
}

