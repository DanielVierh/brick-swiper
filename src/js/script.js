const btn_setBrick = document.getElementById('btn_setBrick');
const bricks = document.querySelectorAll('.brick');
const brick_wrapper = document.getElementById('brick_wrapper');

let oldBrick;
let old_width = 170;
let new_width = 170;

btn_setBrick.addEventListener('click', ()=> {
    //* im Bereich des vorherigen = old_X + width
    //* Rechts abbruchstelle = Wenn (currentbrick.x + width) > (old_X + width) DANN - (currentbrick.x + width) - (old_X + width)
    const current_brick = document.querySelector(".current").getBoundingClientRect();
    const old_brick = document.querySelector(".old").getBoundingClientRect();

    // Abbruchstelle rechts
    if((current_brick.x + current_brick.width) > (old_brick.x + old_brick.width)) {
        const demolition_right = (current_brick.x + current_brick.width) - (old_brick.x + old_brick.width);
    }
        
       // Abbruchstelle links
       if((current_brick.x) < (old_brick.x)) {
        const demolition_left = old_brick.x - current_brick.x;
        new_width = current_brick.width - demolition_left;

        document.querySelector(".current").classList.remove('swipe');
        document.querySelector(".old").classList.remove('old');
        document.querySelector(".current").classList.add('old');
        document.querySelector(".current").style.width = `${new_width}px`;
        document.querySelector(".current").style.transform = `translateX(${(old_brick.x - 10)}px)`;
        document.querySelector(".current").classList.remove('current');
        let new_Brick = document.createElement('div');
        new_Brick.classList.add('brick');
        new_Brick.classList.add('swipe');
        new_Brick.classList.add('current');
        new_Brick.style.width = `${new_width}px`;

        brick_wrapper.insertBefore(new_Brick, brick_wrapper.firstChild);

        console.log('old_brick.x', old_brick.x);
        console.log('document.querySelector(".current").getBoundingClientRect()', document.querySelector(".current").getBoundingClientRect());
    }


    console.log('current_brick', current_brick);
    console.log('old_brick', old_brick);
})

