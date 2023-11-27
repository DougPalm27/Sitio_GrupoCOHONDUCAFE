$(document).ready(function () {
  $("#sendInfo").on("click", function () {
    let losDatos = {
      fullname: $("#fullname").val().trim(),
      email: $("#email").val().trim(),
      tel: $("#tel").val().trim(),
      mensaje: $("#mensaje").val().trim(),
    };

    let error = false;

    // Validación para el nombre completo
    if (losDatos.fullname == "") {
      // Mostrar mensaje de error o marcar el campo como inválido
      swal.fire("Error", "Please enter your full name", "warning");
      error = true;
    }

    // Validación para el email
    if (losDatos.email == "" || !validarEmail(losDatos.email)) {
      // Mostrar mensaje de error o marcar el campo como inválido
      swal.fire("Error", "Please enter a valid email address", "warning");
      error = true;
    }

    // Validación para el teléfono
    if (losDatos.tel == "" || !validarTelefono(losDatos.tel)) {
      // Mostrar mensaje de error o marcar el campo como inválido
      swal.fire("Error", "Please enter a valid phone number", "warning");
      error = true;
    }

    // Validación para el mensaje
    if (losDatos.mensaje == "") {
      // Mostrar mensaje de error o marcar el campo como inválido
      swal.fire("Error", "Please enter your message", "warning");
      error = true;
    }

    if (!error) {
      guardarMensaje(losDatos);
      limpiarCampos();
    }
  });
});
function guardarMensaje(losDatos) {
  $.ajax({
    type: "POST",
    url: "./config/ctrMensaje.php",
    data: {
      losDatos: losDatos,
    },

    error: function (error) {
      console.log(error);
    },

    success: function (respuesta) {
      console.log(respuesta);
      const resp = JSON.parse(respuesta);
      // console.log(resp);

      if (resp.status == "200") {
        swal.fire("Hi", "I have your info", "success");
      }
    },
  });
}

function validarEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
function validarTelefono(tel) {
    var re = /^[0-9]{8,20}$/; // Asume un formato de entre 8 y 15 dígitos
    return re.test(tel);
}
function limpiarCampos() {
    $("#fullname").val('');
    $("#email").val('');
    $("#tel").val('');
    $("#mensaje").val('');
}