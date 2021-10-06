const slider = document.querySelector('.slider');
const before = document.querySelector('.img-container-before');
const after = document.querySelector('.img-container-after');
const container = document.querySelector('.container');


const dragIt = (e) => {
    let layerX = e.layerX;
    before.style.width = layerX + 'px';
    slider.style.left = layerX + 'px';
    
    // if(layerX<50){
    //     before.style.width = 0;
    //     slider.style.left  = 0;
    // }
}

container.addEventListener('mousemove', dragIt)