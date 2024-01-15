const btn_setBrick = document.getElementById('btn_setBrick');
const bricks = document.querySelectorAll('.brick');
let oldBrick;

btn_setBrick.addEventListener('click', ()=> {
    //* im Bereich des vorherigen = old_X + width
    //* Rechts abbruchstelle = Wenn (currentbrick.x + width) > (old_X + width) DANN - (currentbrick.x + width) - (old_X + width)
    const current_brick = document.querySelector(".current").getBoundingClientRect();
    const old_brick = document.querySelector(".old").getBoundingClientRect();

    // Abbruchstelle rechts
    if((current_brick.x + current_brick.width) > (old_brick.x + old_brick.width)) {
        console.log('Abbruch rechts');
        const demolition_right = (current_brick.x + current_brick.width) - (old_brick.x + old_brick.width);
        console.log('demolition_right', demolition_right);
    }

    // Abbruch links


    console.log('current_brick', current_brick);
    console.log('old_brick', old_brick);
})

