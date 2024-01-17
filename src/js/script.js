const btn_setBrick = document.getElementById('btn_setBrick');
const bricks = document.querySelectorAll('.brick');
const brick_wrapper = document.getElementById('brick_wrapper');
const btn_restart = document.getElementById('btn_restart');
const modal = document.getElementById('modal');
const modal_lbl = document.getElementById('modal_lbl');
let x_anker = 0;
let new_width = 300;
const looser_width = 3;
let stack_height = 20;
let round = 1;
const winnerRound = 30;
let velocity = 3;

const brickColors = ['red', 'yellow', 'green', 'blue', 'lightblue', 'tomato'];

btn_setBrick.addEventListener('click', () => {
    const current_brick = document.querySelector(".current").getBoundingClientRect();
    const old_brick = document.querySelector(".old").getBoundingClientRect();

    // Abbruchstelle rechts
    if ((current_brick.x + current_brick.width) > (old_brick.x + old_brick.width)) {
        const demolition_right = (current_brick.x + current_brick.width) - (old_brick.x + old_brick.width);
        new_width = current_brick.width - demolition_right;
        //*  check if game is over   
        check_game_status();
        x_anker = (current_brick.x + demolition_right);
        document.querySelector(".current").left = x_anker;
        //* CSS Class handler
        classhandler();
        //* create new Brick    
        create_new_Brick();

        //* Abbruchstelle links
    } else if ((current_brick.x) < (old_brick.x)) {
        const demolition_left = old_brick.x - current_brick.x;
        new_width = current_brick.width - demolition_left;
        // * check if game is over
        check_game_status();
        x_anker = old_brick.x;
        //* CSS Class handler
        classhandler();
        //* create new Brick    
        create_new_Brick();
    } 
    round++;
    if(round === winnerRound) {
        modal.classList.add('active');
        modal_lbl.innerHTML = 'Gewonnen 😄';
        modal_lbl.style.color = 'green';
        document.getElementById('lbl_roundInfo').innerHTML = '30 Runden geschafft';
        document.querySelector(".current").classList.remove('swipe');
    }
    document.getElementById('lbl_round').innerHTML = `Brick ${round}/${winnerRound}`
})

function check_game_status() {
    if(new_width <= 3) {
        modal.classList.add('active');
        modal_lbl.innerHTML = 'Game Over';
        document.getElementById('lbl_roundInfo').innerHTML = `${round} Runden geschafft`;
        document.querySelector(".current").classList.remove('swipe');
    }
}

function classhandler() {
    document.querySelector(".current").classList.remove('swipe');
    document.querySelector(".old").classList.remove('old');
    document.querySelector(".current").classList.add('old');
    document.querySelector(".current").style.width = `${new_width}px`;
    document.querySelector(".current").classList.remove('current');
}

function create_new_Brick() {
    let new_Brick = document.createElement('div');
    new_Brick.classList.add('brick');
    new_Brick.classList.add('swipe');
    new_Brick.classList.add('current');
    new_Brick.style.width = `${new_width}px`;
    new_Brick.style.left = `translateX(${x_anker}px)`;
    stack_height = stack_height + 20;
    new_Brick.style.bottom = `${stack_height}px`;
    const brick_colorIndex = Math.floor(Math.random() * brickColors.length) + 1;
    new_Brick.style.backgroundColor = `${brickColors[brick_colorIndex]}`;
    const random_velocity = (Math.random() * 0.15).toFixed(2);
    console.log('random_velocity', random_velocity);
    velocity = velocity -= random_velocity;
    console.log('velocity', velocity);
    new_Brick.style.animationDuration = `${velocity}s`;
    brick_wrapper.insertBefore(new_Brick, brick_wrapper.firstChild);
}

//* Neustart
btn_restart.addEventListener('click', ()=> {
    window.location.reload();
})

