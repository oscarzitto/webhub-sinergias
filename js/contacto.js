const btnEnviar =
document.getElementById("btnEnviar");

const tabla =
document.getElementById("tablaSolicitudes");

let solicitudes =
JSON.parse(
    localStorage.getItem("solicitudes")
) || [];

renderizar();

btnEnviar.addEventListener("click", () => {

    const nombre =
    document.getElementById("nombre").value;

    const correo =
    document.getElementById("correo").value;

    const mensaje =
    document.getElementById("mensaje").value;

    if(
        !nombre ||
        !correo ||
        !mensaje
    ){
        alert("Complete todos los campos");
        return;
    }

    solicitudes.push({
        nombre,
        correo,
        mensaje
    });

    localStorage.setItem(
        "solicitudes",
        JSON.stringify(solicitudes)
    );

    renderizar();

});

function renderizar(){

    tabla.innerHTML = "";

    solicitudes.forEach(item => {

        tabla.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.correo}</td>
                <td>${item.mensaje}</td>
            </tr>
        `;

    });

}