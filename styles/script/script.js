const turnon = document.getElementById ('turnon');
const turnoff = document.getElementById ('turnoff');
const lamp = document.getElementById ('lamp');

function lampon() {
    lamp.src =  './img/lampacesa.jpg';
    lamp.style.height = "450px"
}   

function lampoff () {
    lamp.src = './img/lampapagada.jpg';
}
function lampBroken() {
    lamp.src = './img/lampquebrada.jpg';
}  
turnon.addEventListener ( 'click', lampon );
turnoff.addEventListener ( 'click', lampoff);
lamp.addEventListener ('mouseover', lampon);
lamp.addEventListener ('mouseleave', lampoff);
lamp.addEventListener ('dblclick',lampBroken);
