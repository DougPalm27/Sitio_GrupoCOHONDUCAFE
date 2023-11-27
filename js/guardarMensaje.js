$(document).ready(function(){
   
    $("#sendInfo").on("click", function(){
        let losDatos = {
            fullname: $("#fullname").val(),
            email: $("#email").val(),
            tel: $("#tel").val(),
            mensaje: $("#mensaje").val(),
        }
    
        // Verificar cada campo y aplicar la clase basada en su valor
    
        if(losDatos.pnombre == ''){  
            swal.fire("Hi", "I cant save your info :(", "warning");
        }
        else{
            console.log(losDatos)
            guardarMensaje(losDatos);
        }
    });

});
function guardarMensaje(losDatos){
    $.ajax({
        type: "POST",  
        url: "./config/ctrMensaje.php",
        data: {
          losDatos:losDatos
        },

        error: function (error) {
            console.log(error);
        },

        success: function (respuesta) {
            console.log(respuesta);
            const resp = JSON.parse(respuesta);
           // console.log(resp);

            if(resp.status =="200"){
                swal.fire("Hi","I have your info","success");
            }
        },
      });
}