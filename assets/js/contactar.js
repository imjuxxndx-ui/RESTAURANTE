function enviarmensaje(){

    let nombre = document.getElementById("nombre").value;

    let mensaje = document.getElementById("mensaje").value;
   
    let correo = document.getElementById("correo").value;
    
    //Validar 

    if(!nombre || !correo || !mensaje){
        //alert("Faltan datos")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error falntan datos",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    else{

        alert("Su mensaje se ha enviado correctamente");

    }
}