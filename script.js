document.onkeydown=function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode==38){
        batman=document.querySelector('.batman');
        batman.classList.add('jump');
        setTimeout(() => {
            batman.classList.remove('jump'); 
        }, 1200);
    }
}