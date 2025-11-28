document.addEventListener('DOMContentLoaded', function() {
    // Datos de las fotos (puedes cambiarlos por tus propias imágenes)
    const fotos = [
        { src: 'imagenes/imagen1.jpg', categoria: 'PatyReuniones', descripcion: 'Antes de la peleada, se eliminó al cacas tambien xd' },
        { src: 'imagenes/imagen2.jpg', categoria: 'PatyReuniones', descripcion: 'Yo digo que sí le gustó' },
        { src: 'imagenes/imegen3.jpg', categoria: 'PatyReuniones', descripcion: 'Preciosos los dos verda de Dioj' },
        { src: 'imagenes/imagen4.jpg', categoria: 'PatyReuniones', descripcion: 'Los más guapos del Team 😍✨' },
        { src: 'imagenes/imagen5.jpg', categoria: 'PatyReuniones', descripcion: 'Puro personaje, pura celebridad 😮' },
        { src: 'imagenes/imagen6.jpg', categoria: 'PatyReuniones', descripcion: 'JAJAJAJ' },
        { src: 'imagenes/imagen7.jpg', categoria: 'PatyReuniones', descripcion: 'Las más guapas de P8😍' },
        { src: 'imagenes/imagen8.jpg', categoria: 'PatyReuniones', descripcion: 'Cumple Feliz David, Mon, Mich' },
        { src: 'imagenes/imagen9.jpg', categoria: 'PatyReuniones', descripcion: 'Cumple Feliz David, Mon, Mich' },
        { src: 'imagenes/imagen10.jpg', categoria: 'PatyDiosa', descripcion: 'SIN COMENTARIOS...' },
        { src: 'imagenes/imagen11.jpg', categoria: 'PatyPreparatoriana', descripcion: '¿Desde hace cuanto nos conocemos? 🥹' },
        { src: 'imagenes/imagen12.jpg', categoria: 'PatyPreparatoriana', descripcion: 'Ultima foto registrada en P8' },
        { src: 'imagenes/imagen13.jpg', categoria: 'PatyPreparatoriana', descripcion: 'El supuesto 505' },
        { src: 'imagenes/imagen14.jpg', categoria: 'PatyPreparatoriana', descripcion: 'Greiz creo que se estaba cayendo xdxd' },
        { src: 'imagenes/imagen15.jpg', categoria: 'PatyDiosa', descripcion: 'BUENO, SOLO UNO' },
        { src: 'imagenes/imagen16.jpg', categoria: 'PatyDiosa', descripcion: '¿QUÉ ONDA CON LO GUAPA QUE ERES PATRICIA? 🤯' },
        { src: 'imagenes/imagen17.jpg', categoria: 'PatyPreparatoriana', descripcion: 'Eramos unos mocos jajaj' },

        // Añade más fotos según necesites
    ];

    const galeria = document.getElementById('galeria');
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagen-modal');
    const caption = document.getElementById('caption');
    const cerrar = document.getElementById('cerrar');

    // Cargar las fotos en la galería
    function cargarFotos(categoria = 'todas') {
        galeria.innerHTML = '';
        
        const fotosFiltradas = categoria === 'todas' 
            ? fotos 
            : fotos.filter(foto => foto.categoria === categoria);
        
        fotosFiltradas.forEach(foto => {
            const item = document.createElement('div');
            item.className = 'item-galeria';
            item.dataset.categoria = foto.categoria;
            
            const img = document.createElement('img');
            img.src = foto.src;
            img.alt = foto.descripcion;
            
            img.addEventListener('click', () => {
                modal.style.display = 'block';
                imagenModal.src = foto.src;
                caption.innerHTML = foto.descripcion;
            });
            
            item.appendChild(img);
            galeria.appendChild(item);
        });
    }

    // Filtrar fotos por categoría
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Quitar clase active de todos los botones
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            boton.classList.add('active');
            
            const categoria = boton.dataset.categoria;
            cargarFotos(categoria);
        });
    });

    // Cerrar modal al hacer clic en la X
    cerrar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click',)
})