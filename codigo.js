'use strict';
const contenedorNotas = document.getElementById('nota-cont');
const text = document.getElementById('text');
const btnAdd = document.getElementById('agregar');
const obtenerNotas = JSON.parse(localStorage.getItem('NOTAS'));
let cantidadNotas = 0;



if (obtenerNotas) {
    obtenerNotas.forEach(nota => {
        loadNotes(nota);
    })
}


btnAdd.addEventListener('click', () => {
    loadNotes();

});

function loadNotes(nota) {
    cantidadNotas++;
    let textoNota = text.value;

    if (nota) {
        textoNota = nota.texto

    }

    if (textoNota) {
        const notaDiv = document.createElement('div');
        notaDiv.classList.add('nota')
        notaDiv.innerHTML = `
            <h1>Nota <span>${cantidadNotas}</span></h1>
            <p class='txt'>${textoNota}</p>
            <button class="modal-btn" id="modal">Detalle</button>
            <button class="eliminar" id="eliminar"><i class="far fa-times-circle"></i></button>
    `
        contenedorNotas.appendChild(notaDiv);
        text.value = '';

        const btnDelete = notaDiv.querySelector('.eliminar');

        btnDelete.addEventListener('click', () => {
            console.log('Boton Eliminar')
                // notaDiv.innerHTML = '';
            notaDiv.remove();
            saveNote();
            cantidadNotas--;
            //loadNotes();
        });
    }

    saveNote();
}

function saveNote() {
    const notas = document.querySelectorAll('.txt');
    const NOTAS = [];
    notas.forEach((nota) => {
        NOTAS.push({
            texto: nota.textContent
        });
    });
    localStorage.setItem('NOTAS', JSON.stringify(NOTAS))
}









/*
const nota = document.createElement('div');
    nota.classList.add('nota')
    nota.innerHTML = `
            <h1>Nota <span>${cantidadNotas}</span></h1>
            <p>${text.value}</p>
            <button class="modal-btn" id="modal">Detalle</button>
            <button class="eliminar" id="eliminar"><i class="far fa-times-circle"></i></button>
    `
    contenedorNotas.appendChild(nota);
    text.value = '';

    const btnDelete = nota.querySelector('.eliminar');

    btnDelete.addEventListener('click', () => {
        console.log('Boton Eliminar')
        nota.innerHTML = '';
    });

*/