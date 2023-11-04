document.getElementById("boton-calcular").addEventListener("click", function(){calculoEntradas()});

document.getElementById("boton-borrar").addEventListener("click", function(){borrarResumen()});

function calculoEntradas(){

    let cantidad = document.getElementById("input-cantidad").value;
    let categoria = document.getElementById("input-categoria").value;   

    let valorTicket = 1700;

    let precioFinal = 0;

    switch(categoria){

        case "general":
            precioFinal = valorTicket * cantidad;
            break;
        
        case "estudiante":
            precioFinal = (valorTicket * cantidad) * 0.5;
            break;
        
        case "socio":
            precioFinal = (valorTicket * cantidad) * 0.3;
            break;     
    }

    document.getElementById("total-a-pagar").innerText = "Total a pagar: $" + precioFinal;

    console.log(precioFinal)
}

function borrarResumen(){
    document.getElementById("total-a-pagar").innerText = "Total a pagar: $";
}
