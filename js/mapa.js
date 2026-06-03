document.addEventListener("DOMContentLoaded", () => {

    const instituciones = [
        {
            nombre: "Universidad de Los Lagos",
            region: "Los Lagos",
            avance: 65,
            lat: -41.4689,
            lng: -72.9411
        },
        {
            nombre: "Municipalidad de Puerto Montt",
            region: "Los Lagos",
            avance: 80,
            lat: -41.4693,
            lng: -72.9424
        },
        {
            nombre: "Instituto Profesional",
            region: "Los Ríos",
            avance: 100,
            lat: -39.8142,
            lng: -73.2459
        }
    ];

    const contenedor =
        document.getElementById("institucionesMapa");

    instituciones.forEach(inst => {

        contenedor.innerHTML += `
            <div class="institucion-card">

                <h3>${inst.nombre}</h3>

                <p>
                    Región: ${inst.region}
                </p>

                <p>
                    Avance: ${inst.avance}%
                </p>

                <button
                    onclick="mostrarFicha('${inst.nombre}')">
                    Ver ficha
                </button>

            </div>
        `;

    });

    const map =
        L.map("map")
            .setView([-41.4693, -72.9424], 6);

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    instituciones.forEach(inst => {

        L.marker([inst.lat, inst.lng])
            .addTo(map)
            .bindPopup(`
                <strong>${inst.nombre}</strong>
                <br>
                Avance: ${inst.avance}%
            `);

    });

});

function mostrarFicha(nombre) {

    alert(`
Institución:
${nombre}

Información simulada proveniente
del GeoDashboard (Grupo 1).
    `);

}