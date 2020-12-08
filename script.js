window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const control = document.querySelector(`.control[data-key="${e.keyCode}"]`);

    if(!audio) return;
    
    audio.currentTime = 0;
    audio.play();

    control.classList.add('pressed');
});

const controls = document.querySelectorAll('.control');

controls.forEach(control => control.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('pressed');
}