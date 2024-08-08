const rainContainer = document.querySelector('.rain');
const umbrella = document.querySelector('.umbrella');
const header = document.querySelector('header');

function createDrop() {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';

    rainContainer.appendChild(drop);

    const interval = setInterval(() => {
        const dropRect = drop.getBoundingClientRect();
        const umbrellaRect = umbrella.getBoundingClientRect();

        if (
            dropRect.bottom >= umbrellaRect.top &&
            dropRect.right >= umbrellaRect.left &&
            dropRect.left <= umbrellaRect.right
        ) {
            drop.remove();
            clearInterval(interval);
        }
    }, 50);

    setTimeout(() => {
        drop.remove();
        clearInterval(interval);
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
