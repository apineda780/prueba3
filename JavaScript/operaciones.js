let a = 10;

let b = 15;

let operacion = "suma"

function operaciones(a,b,operacion) {

    switch(operacion){

        case "suma":
            console.log("Total Suma:" +a+ "+" +b+ "=" +(a+b));
            break;

        case "resta":
            console.log("Total Resta:" +a+ "-" +b+ "=" +(a-b));
            break;

        case "producto":
            console.log("Total Producto:" +a+ "*" +b+ "=" +(a*b));
            break;

        case "división":
            let div = 0;
                div =a/b;
                if(div>=0){
            console.log("Total División:" +a+ "7" +b+ "=" + div);
            }else{
                console.log("Es una Indeterminación la división dio 0");
                }
            break;
        
        default:
            console.log("Total Suma**: "+ a + "+" +b+ "=" + (a+b));
            break;    
        }   

        return resultado;

}