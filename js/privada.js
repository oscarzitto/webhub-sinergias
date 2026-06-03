const documentos = [
    "Informe de sostenibilidad",
    "Evidencia ODS 7",
    "Evidencia ODS 13"
];

const alertas = [
    "Faltan 3 documentos para revisión.",
    "Nueva observación del evaluador.",
    "Actualización pendiente antes del 15 de junio."
];

const listaDocumentos =
document.getElementById("documentosPendientes");

documentos.forEach(doc => {

    listaDocumentos.innerHTML += `
        <li>${doc}</li>
    `;

});

const contenedorAlertas =
document.getElementById("alertas");

alertas.forEach(alerta => {

    contenedorAlertas.innerHTML += `
        <div class="alert-card">
            ${alerta}
        </div>
    `;

});

document
.getElementById("btnGeo")
.addEventListener("click", () => {

    window.location.href =
    "mapa.html";

});

document
.getElementById("btnODS")
.addEventListener("click", () => {

    window.location.href =
    "avances.html";

});