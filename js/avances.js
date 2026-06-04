const procesos = [
    {
        institucion: "Universidad de Los Lagos",
        etapa: "Evidencias",
        avance: 65
    },
    {
        institucion: "Municipalidad de Puerto Montt",
        etapa: "Revisión",
        avance: 80
    },
    {
        institucion: "Instituto Profesional",
        etapa: "Certificación",
        avance: 100
    }
];

const tabla = document.getElementById("tablaAvances");

const barras =
    document.getElementById("barrasAvance");

let suma = 0;
let certificadas = 0;

procesos.forEach(proceso => {

    suma += proceso.avance;

    if (proceso.avance === 100) {
        certificadas++;
    }

    tabla.innerHTML += `
        <tr>
            <td>${proceso.institucion}</td>
            <td>${proceso.etapa}</td>
            <td>${proceso.avance}%</td>
        </tr>
    `;

    barras.innerHTML += `
<div class="avance-item">

    <div class="avance-header">
        <span>${proceso.institucion}</span>
        <strong>${proceso.avance}%</strong>
    </div>

    <div class="barra-fondo">
        <div
            class="barra-progreso"
            style="width:${proceso.avance}%"
        ></div>
    </div>

</div>
`;

});

document.getElementById("totalInstituciones").textContent =
    procesos.length;

document.getElementById("promedioAvance").textContent =
    Math.round(suma / procesos.length) + "%";

document.getElementById("certificadas").textContent =
    certificadas;