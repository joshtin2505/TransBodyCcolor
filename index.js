const colores = ['IndianRed','LightCoral', 'Salmon', 'DarkSalmon'];
document.getElementById('body').style.backgroundColor = 'Salmon';
let colors;

const cambio = setInterval(function() {
    colors = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('body').style.transition = '1s'
    document.getElementById('body').style.backgroundColor = colors;
}, 1000);
