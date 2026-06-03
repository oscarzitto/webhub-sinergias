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

let suma = 0;
let certificadas = 0;

procesos.forEach(proceso => {

    suma += proceso.avance;

    if(proceso.avance === 100){
        certificadas++;
    }

    tabla.innerHTML += `
        <tr>
            <td>${proceso.institucion}</td>
            <td>${proceso.etapa}</td>
            <td>${proceso.avance}%</td>
        </tr>
    `;
});

document.getElementById("totalInstituciones").textContent =
    procesos.length;

document.getElementById("promedioAvance").textContent =
    Math.round(suma / procesos.length) + "%";

document.getElementById("certificadas").textContent =
    certificadas;