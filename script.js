function loger(e){
    const audio=document.querySelector(`audio[data-key=${e.key}]`);
    const btn=document.querySelector(`.btn[data-key=${e.key}]`);
    if (!audio) return;
    audio.play();
    audio.currentTime= 0;
    // console.log(btn);
    // console.log(audio);
    btn.classList.add('play');
}
function removetrans(e){
    // console.log(e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('play');
}

const btns=document.querySelectorAll('.btn');
btns.forEach(key => {
    key.addEventListener('transitionend', removetrans);
});
addEventListener('keydown', loger);