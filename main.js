//Grid Shit
const gridWidth = 50;
let count = 0;
while (count <= gridWidth * gridWidth) {
    const canvas = document.querySelector('.canvas');
    const div = document.createElement('div');
    div.className = 'square color-5';
    canvas.appendChild(div);
    count++;
}
//Lots of query selectors
const colors = document.querySelectorAll('.palette-color');
const canvas = document.querySelectorAll('.canvas');
const vanvas = document.querySelector('.canvas')
const brush = document.querySelector('.current-brush')
const squares = document.querySelectorAll('.square')
const dark = document.querySelector('.dark')
const reset = document.querySelector('.reset')
const body = document.querySelector('body')
const h3 = document.querySelector('h3')
const message = document.querySelector('.message')

//Default clicked status is false.
let clicked = false;


squares.forEach(function (square) {
    square.addEventListener('click', function () {
        //Remove class name.
        square.classList.remove(square.className.split(' ')[1]);

        //Add class name of brush color currently selected.
        square.classList.add(brush.className.split(' ')[1]);
    });
});


squares.forEach(function (square) {
    square.addEventListener('mouseenter', function () {

        //*****
        //Wasn't sure where to put these two functions. Took me a while.
        //Figured it out with console logs
        square.addEventListener('mouseup', function () {
            clicked = false;
            console.log('mouseup should be false: ', clicked)
        })

        square.addEventListener('mousedown', function () {
            clicked = true;
            console.log('mousedown should be true: ', clicked)
        })

        console.log(clicked)

        //Only when clicked can the class name be removed and replaced.
        if (clicked === true) {
            square.classList.remove(square.className.split(' ')[1]);


            square.classList.add(brush.className.split(' ')[1]);
        };
        //If you're not clicking but hovering over the canvas you will not paint.
        if (clicked === false) { square.classList = square.classList };
    });
});



colors.forEach(function (color) {
    color.addEventListener('click', function (e) {
        //Upon click, the color from the brush will be removed and replaced with the color clicked on.
        brush.classList.remove(brush.className.split(' ')[1]);

        brush.classList.add(e.target.classList[1]);
    });
});

console.log(brush.className.split(' ')[1])

//Changes background color and font color.
dark.addEventListener('click', function () {
    body.style.backgroundColor = '#565656'
    h3.style.color = 'white';
    message.style.color = 'white';

})

//Refreshes broswer.
reset.addEventListener('click', function () {
    location.reload();
})

//Random color generator.
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let output = '#';
    for (let i = 0; i < 6; i++) {
        output += letters[Math.floor(Math.random() * 16)];
    }
    console.log(output)

    //Changes box shadow surrounding canvas.
    vanvas.style.boxShadow = `0 0 0px ${output}`;
    vanvas.style.boxShadow = `0 0 30px ${output}`;
}

setInterval(getRandomColor, 3000);