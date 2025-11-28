document.addEventListener('DOMContentLoaded', function() {
    
    const fotos = [
        { src: 'imagenes/imagen1.jpg', categoria: 'PatyReuniones', descripcion: 'Antes de la peleada, se eliminó al cacas tambien xd' },
        { src: 'imagenes/imagen2.jpg', categoria: 'PatyReuniones', descripcion: 'Yo digo que sí le gustó' },
        { src: 'imagenes/imagen3.jpg', categoria: 'PatyReuniones', descripcion: 'Preciosos los dos verda de Dioj' },
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

  
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            
            boton.classList.add('active');
            
            const categoria = boton.dataset.categoria;
            cargarFotos(categoria);
        });
    });

    
    cerrar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    modal.addEventListener('click',)

})

