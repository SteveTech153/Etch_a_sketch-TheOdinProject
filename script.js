document.addEventListener('DOMContentLoaded', function () {
    let cont = document.querySelector('.container');
    let colorpick = document.querySelector('#color');
    let color = 'rgb(38, 38, 38)';
    let rand = false;
    let prevColor;
    let size = 4;
    //let colorpicker = document.querySelector('.colorpick-eyedropper-input-trigger');
    let keyDown = false;
    const clear = document.querySelector('#clear-btn');
    let randBtn = document.querySelector('#random-btn');

    colorpick.addEventListener('change', () => {
        color = colorpick.value;
    });


    function createSqaures(size) {
        cont = document.querySelector('.container');
        cont.innerHTML = '';
        size = size * 4;
        for (let i = 0; i < size * size; i++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.addEventListener('mouseover', changeColor);
            square.addEventListener('mousedown', changeColor);
            square.style.width = `${100 / size}%`;
            square.style.height = `${100 / size}%`;
            // square.style.transition = 'background-color 0.5s ease-in-out';
            cont.appendChild(square);
        }
    }
    document.onready = createSqaures(size);

    function colorPickFun() {
        rand = false;
        colorpick.style.border = '5px solid #fff';
        randBtn.style.border = 'none';
        color = prevColor;
    }
    colorpick.addEventListener('click', colorPickFun);
    //colorpicker.addEventListener('click', colorPickFun);


    document.querySelector('#size').addEventListener('click', () => {
        size = document.querySelector('#size').value;
        createSqaures(size);
    });


    if (document.addEventListener('mousedown', (e) => {
        keyDown = true;
    }));
    if (document.addEventListener('mouseup', (e) => {
        keyDown = false;
    }));

    function changeColor(square) {
        if (square.type == 'mouseover' && !keyDown) {
            return;
        }
        if (rand) color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        square.target.style.backgroundColor = color;
    }


    clear.addEventListener('click', () => {
        cont.innerHTML = '';
        createSqaures(size);
    });


    randBtn.addEventListener('click', () => {
        rand = true;
        randBtn.style.border = '5px solid #fff'
        colorpick.style.border = 'none';
        prevColor = color;
    }
    );
}  
);