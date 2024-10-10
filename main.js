function growFlower() {
    const flower = document.querySelector('.flower');
    const message = document.getElementById('message');
    
    // Cambia la clase para hacer crecer la flor
    flower.classList.toggle('grow');
    
    // Mostrar el mensaje de "Te quiero, mi niña" si la flor crece
    if (flower.classList.contains('grow')) {
        message.textContent = "Te quiero, mi niña guapa";
        message.style.opacity = 1;  // Hacer visible el mensaje
    } else {
        message.style.opacity = 0;  // Ocultar el mensaje si se retrae
    }
}
