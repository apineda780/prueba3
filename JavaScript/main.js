
 
 const respuesta = document.querySelector(".data-respuesta");
 //const respuesta = document.getElementById("respuesta");

 const campo = document.getElementById("campo");
 const botonBuscar = document.getElementById("botonBuscar");

 botonBuscar.addEventListener("click", () => {
    const campo = document.getElementById("campo").value;
    buscarID(campo);
 });

 function buscarID(campo) {
    fetch("https://jsonplaceholder.typicode.com/posts/") + campo)
        .then ((response) => response.json())
        .then ((data) => {
        console.log(data)

        linea += `<tr><td> ${element.id}</td> <td> <span style="background:yellow;"> <strong>${element.title}</strong></span> <td> ${element.body}</td> <td>${element.userId}</td></tr>`
       


