
 
 const respuesta = document.querySelector(".data-respuesta");
 //const respuesta = document.getElementById("respuesta");


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {

    //console.log(data)
    //foreach() encarga de contar los elementos del arrayt que esta recorriendo  


     //   def         condicion   incremento 
    //for(var i=0; i<data.length; i++)

    let linea = "";
    data.forEach(element => {

        console.log(element)
         //varaible acumulativa    
         linea += `<p><span style="background:yellow;"> >Título: <strong>${data.title}</strong></span> ID:${data.id} completed: ${data.completed}userID: ${data.userID}</p><br/>`
        
    });


    respuesta.innerHTML = linea;

})
