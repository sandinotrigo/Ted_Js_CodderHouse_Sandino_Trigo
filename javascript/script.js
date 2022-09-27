let numeroTelefono = 'X';

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let userTelefono = prompt('Ingresa tu número de celular. Tienes  ' + (i + 1) + ' intentos');
        if (userTelefono === numeroTelefono) {
            alert('Bienvenido/a!');
            ingresar = true
            break;
        }
        else {
            alert('Error. Le quedan ' + i + ' intentos, vuelva a ingresar su clave')
        }
    }

    return ingresar;
}

if (login()) {

    // agrego var saldo, y las opciones del login (parte dos del login)

    let posiciondecarrera = '2do';

    let seleccion = prompt('Elige una opción: \n1 - Informate sobre como saliste en al última carrera. \n2 - Recarga Solidaria. \n3 - Entra y descarga el cupon con el 10% de descuento en marcas reconocidas!. \n4 - Fecha y Hora actual. \n digita Esc para finalizar.'); //ESTA PROMPT ES EL COMIENZO LUEGO DE LOGIN()= TRUE. ES DECIR, EL LOGIN FUE ACERTADO CORRECTAMENTE. 

    while (seleccion != 'Esc' && seleccion != 'esc') {

        switch (seleccion) { //EN ESTA SWITCH CREO EL WORKFLOW PARA LAS SELECCIONES DE CASOS N 1 N 2 N3 N4 Y N.
            case '1':
                alert('En la ultima carrera saliste ' + posiciondecarrera + '!');
                break;
            case '2':
                let solidario = prompt('Ingresa el número de teléfono del usuario al que quieres inscribir:'); //NUMERO DE TEL DE LA PERSONA A INSCRIBIR
                // DECLARAR VAR DE PERSONA A INSCRIBIR (NOMBRE).
                let numerodepersona = 'Y'
                if (solidario == numerodepersona) {
                    alert('Has inscripto a Jorge a la carrera "Los Caranchos".');
                    break;
                }
                else {
                    alert('Disculpa, no tienes el saldo suficiente para realizar esta recarga. Intente nuevamente')

                }


                break;
            case '3':
                let nike = '111'
                let adidas = '222'
                let umbro = '333'
                let marcas = prompt('Con TOROS EVENTOS DEPORTIVOS tienes descuentos del 10% en todas estas marcas! \n5 - Nike \n6 - Adidas \n7 - Umbro. ')

                switch (marcas) { //AQUI CREO OTRO SWITCH DENTRO DE LA SWITCH PRINCIPAL PARA DERIVAR MAS OPCIONES DENTRO DE OTRA. 
                    case '5':
                        alert('Elgiste NIKE! Presenta el siguiente código para acceder al cupón con el 10% de descuento , recuerda seleccionar el tipo de cliente nuestro para que funcione el código.')
                        alert('Tu código es: ' + nike + ' ')
                        break;

                    case '6':
                        alert('Elgiste ADIDAS! Presenta el siguiente código para acceder al cupón con el 10% de descuento , recuerda seleccionar el tipo de cliente nuestro para que funcione el código.')
                        alert('Tu código es: ' + adidas + ' ')
                        break;

                    case '7':
                        alert('Elgiste UMBRO! Presenta el siguiente código para acceder al cupón con el 10% de descuento , recuerda seleccionar el tipo de cliente nuestro para que funcione el código.')
                        alert('Tu código es: ' + umbro + ' ')
                }


                break;
            case '4':
                //USAR NEW COMO PALABRA RESERVADA Y AGREGAR DATE COMO OBJETO

                let fechadehoy = new Date();
                    alert('Basada en Montevideo la fecha y hora de hoy es: '+fechadehoy+' ')
                break;

            default:
            alert('Has marcado una opción inválida, intente nuevamente.')
        }
        seleccion = prompt('Elige una opción: \n1 - Consulta de Saldo. \n2 - Recarga a terceros. \n3 - Entra y descarga el cupon con el 10% de descuento en marcas reconocidas!. \n4 - Fecha y Hora actual. \n digita Esc para finalizar.');
    }
}
else{
    //Has marcado erroneamente tu celular. intente de nuevo.
    alert('Has pasado el límite de errores al ingresar tu número. Intenta nuevamente.')
    
}

alert('¡Gracias por confiar en nosotros! ¡Hasta la próxima!')


login()