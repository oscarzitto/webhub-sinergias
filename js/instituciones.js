const nombre = document.getElementById("nombre");
const comuna = document.getElementById("comuna");
const avance = document.getElementById("avance");

const btnGuardar = document.getElementById("btnGuardar");
const tabla = document.getElementById("tablaInstituciones");

let indiceEditar = null;

cargarInstituciones();

btnGuardar.addEventListener("click", guardarInstitucion);

function obtenerInstituciones() {

    return JSON.parse(
        localStorage.getItem("instituciones")
    ) || [];

}

function guardarInstituciones(lista) {

    localStorage.setItem(
        "instituciones",
        JSON.stringify(lista)
    );

}

function guardarInstitucion() {

    if (
        nombre.value.trim() === "" ||
        comuna.value.trim() === "" ||
        avance.value.trim() === ""
    ) {
        alert("Complete todos los campos");
        return;
    }

    const instituciones = obtenerInstituciones();

    const nuevaInstitucion = {
        nombre: nombre.value,
        comuna: comuna.value,
        avance: avance.value
    };

    if (indiceEditar === null) {

        instituciones.push(nuevaInstitucion);

    } else {

        instituciones[indiceEditar] = nuevaInstitucion;
        indiceEditar = null;

        btnGuardar.textContent =
            "Guardar Institución";
    }

    guardarInstituciones(instituciones);

    limpiarFormulario();

    cargarInstituciones();
}

function cargarInstituciones() {

    const instituciones = obtenerInstituciones();

    tabla.innerHTML = "";

    instituciones.forEach((inst, index) => {

        tabla.innerHTML += `
            <tr>
                <td>${inst.nombre}</td>
                <td>${inst.comuna}</td>
                <td>${inst.avance}%</td>
                <td>

                    <button
                        class="btn-editar"
                        onclick="editar(${index})">
                        Editar
                    </button>

                    <button
                        class="btn-eliminar"
                        onclick="eliminarInstitucion(${index})">
                        Eliminar
                    </button>

                </td>
            </tr>
        `;
    });

}

function editar(index) {

    const instituciones = obtenerInstituciones();

    const inst = instituciones[index];

    nombre.value = inst.nombre;
    comuna.value = inst.comuna;
    avance.value = inst.avance;

    indiceEditar = index;

    btnGuardar.textContent =
        "Actualizar Institución";
}

function eliminarInstitucion(index) {

    const instituciones = obtenerInstituciones();

    instituciones.splice(index, 1);

    guardarInstituciones(instituciones);

    cargarInstituciones();
}

function limpiarFormulario() {

    nombre.value = "";
    comuna.value = "";
    avance.value = "";

}