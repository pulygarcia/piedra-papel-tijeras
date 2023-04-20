const piedra = 'piedra';
const papel = 'papel';
const tijeras = 'tijeras';
const opciones = [piedra, papel, tijeras];

const piedraBoton = document.querySelector('#piedra');
const papelBoton = document.querySelector('#papel');
const tijeraBoton = document.querySelector('#tijeras');

//eventos
piedraBoton.addEventListener('click', () => {
    jugar('piedra');
});
papelBoton.addEventListener('click', () => {
    jugar('papel');
});
tijeraBoton.addEventListener('click', () => {
    jugar('tijeras');
});



//eleccion computadora
function eleccionComputadora() {
    const eleccion = Math.floor(Math.random() * 3);

    return opciones[eleccion];
}

//eleccion usuario
function jugar(eleccionUsuario) {
    const eleccionPc = eleccionComputadora();
    const resultado = ganador(eleccionUsuario, eleccionPc);

    return resultado;
}

function ganador(usuario, computadora){
    if(usuario === computadora){
        mostrarResultado('¡Empate!', `Ambos eligieron: ${usuario}`);
        return;
    }else if(usuario === 'piedra'){
        if(computadora === 'tijeras'){
            mostrarResultado('¡Ganaste!', 'La computadora eligió: Tijeras', 'Tú elegiste: Piedra');
            return;
        }else{
            mostrarResultado('Perdiste', 'La computadora eligió: Papel', 'Tú elegiste: Piedra');
            return;
        }
    }else if(usuario === 'papel'){
        if(computadora === 'piedra'){
            mostrarResultado('¡Ganaste!', 'La computadora eligió: Piedra', 'Tú elegiste: Papel');
            return;
        }else{
            mostrarResultado('Perdiste', 'La computadora eligió: Tijeras', 'Tú elegiste: Papel');
            return;
        }
    }else if(usuario === 'tijeras'){
        if(computadora === 'papel'){
            mostrarResultado('¡Ganaste!', 'La computadora eligió: Papel', 'Tú elegiste: Tijeras');
            return;
        }else{
            mostrarResultado('Perdiste', 'La computadora eligió: Piedra', 'Tú elegiste: Tijeras');
            return;
        }
    }
}

function mostrarResultado(mensaje, eleccionComputadora, eleccionUsuario){
    const resultado = document.querySelector('.resultado');

    //limpiar HTML PREVIO
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }


    const resultadoParrafo = document.createElement('P');
    resultadoParrafo.classList.add('parrafo-resultado');
    resultadoParrafo.textContent = mensaje;

    //COLORES para el resultado
    if(mensaje === '¡Ganaste!'){
        resultadoParrafo.classList.add('victoria');
    }else if(mensaje === '¡Empate!'){
        resultadoParrafo.classList.add('empate');
    }else{
        resultadoParrafo.classList.add('derrota');
    }

    const resultadoEleccionPc = document.createElement('P');
    resultadoEleccionPc.classList.add('parrafo-eleccion');
    resultadoEleccionPc.textContent = eleccionComputadora;

    const resultadoEleccionUsuario = document.createElement('P');
    resultadoEleccionUsuario.classList.add('parrafo-eleccion');
    resultadoEleccionUsuario.textContent = eleccionUsuario;

    resultado.appendChild(resultadoParrafo);
    resultado.appendChild(resultadoEleccionPc);
    resultado.appendChild(resultadoEleccionUsuario);
}