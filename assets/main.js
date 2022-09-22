// Elejir Marca

alert ("Escoja un Número")
let marca = +(prompt("¿1-hikvision 2-dahua?"));

if (marca==1){
    alert("Elegiste hikvision")
}   else if (marca==2){
    alert("Elegite Dahua")
}

let canalesDvr = +(prompt("4-Canales 8-Canales 16-Canales"));

//Cantodad de canales (uso de Switch)

switch (canalesDvr) {
    case 4: {
        alert("El DVR es de 4 canales");
        break;
    }
    case 8: {
        alert("El DVR es de 8 canales");
        break;
    }
    case 16: {
        alert("El DVR es de 16 canales");
        break;
    }
    default :
        alert ("La opcion no es correcta")
}

//Mostrando Pedido

let camara = +(prompt("¿Cuantas Camaras?"));


    alert ("Elegiste" +" "+ camara +" "+ "camaras");

    function tuPedido(a,b,c){
        let mensaje = "Marca: " + a + "\n"; 
        mensaje+="DVR: " + b + " canales" + "\n"; 
        mensaje+="Camaras: " + c + "\n"; 
    
        return mensaje;
    }

let completado = tuPedido(marca, canalesDvr, camara);

alert ("Tu pedido es"+ " " + "\n"+ completado);

