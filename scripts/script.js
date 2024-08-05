const rainContainer = document.querySelector('.rain');
const umbrella = document.querySelector('.umbrella');
const header = document.querySelector('header');

// Función para crear gotas de lluvia
function createDrop() {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    drop.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria
    drop.style.animationDuration = Math.random() * 1 + 0.5 + 's'; // Duración aleatoria

    rainContainer.appendChild(drop);

    // Verificar colisión con la sombrilla
    const interval = setInterval(() => {
        const dropRect = drop.getBoundingClientRect();
        const umbrellaRect = umbrella.getBoundingClientRect();

        // Verifica si la gota está por encima del paraguas
        if (
            dropRect.bottom >= umbrellaRect.top &&
            dropRect.right >= umbrellaRect.left &&
            dropRect.left <= umbrellaRect.right
        ) {
            drop.remove(); // Elimina la gota inmediatamente
            clearInterval(interval); // Detiene el intervalo de colisión
        }
    }, 50); // Comprobar cada 50 ms

    setTimeout(() => {
        drop.remove(); // Elimina la gota después de un tiempo
        clearInterval(interval); // Asegúrate de detener el intervalo al eliminar la gota
    }, 1500);
}

// Crear gotas cada 10 ms
setInterval(createDrop, 50);

// Muestra el paraguas y mueve su posición con el cursor
header.addEventListener('mousemove', (event) => {
    umbrella.style.opacity = 1; // Muestra el paraguas
    umbrella.style.left = `${event.clientX - 25}px`; // Ajusta la posición horizontal
    umbrella.style.top = `${event.clientY - 50}px`; // Ajusta la posición vertical
});

// Oculta el paraguas cuando el cursor sale del encabezado
header.addEventListener('mouseleave', () => {
    umbrella.style.opacity = 0; // Oculta el paraguas
});
