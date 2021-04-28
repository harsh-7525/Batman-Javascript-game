score=0;
cross=true;

aud=new Audio('jump.mp3');
audio=new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');
setTimeout(() => {
   // audio.play()
    
}, 1000);

document.onkeydown=function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode==38){
        batman=document.querySelector('.batman');
        batman.classList.add('jump');
        aud.play()
        setTimeout(() => {
            //aud.pause()
            batman.classList.remove('jump'); 
        }, 1200);
    }

    if(e.keyCode==39){
        batman=document.querySelector('.batman');
        batx=parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
        batman.style.left=batx+112+"px"
        
    }

    if(e.keyCode==37){
        batman=document.querySelector('.batman');
        batx=parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
        batman.style.left=batx-112+"px"
       
    }
}


setInterval(() => {
   batman=document.querySelector('.batman');
    gameOver=document.querySelector('.gameOver');
    joker=document.querySelector('.joker');

    dx=parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(batman, null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(joker, null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(joker, null).getPropertyValue('top'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
  console.log(offsetx,offsety)
  
    if(offsetx<100 && offsety<70){
        gameOver.style.visibility='visible';
        joker.classList.remove('jokrani');
        audiogo.play();
        setTimeout(() => {
            //audio.pause()
            audiogo.pause()
        }, 1000);

        setTimeout(() => {
            //audio.pause()
            audio.play()
            setTimeout(() => {
                //audio.pause()
                audio.pause()
            }, 10000);
        }, 1400);
    }
    else if(offsetx<140 && cross){
        score+=1;
        updatescore(score); 
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 2000);
       setTimeout(() => {
        Duration= parseFloat(window.getComputedStyle(joker, null).getPropertyValue('animation-Duration'));
        newDur= Duration-0.1;
        if(newDur>2)
        {joker.style.animationDuration= newDur + 's'; }
        console.log("Ani Dr:",newDur)
       }, 800);
       

    }
}, 30);


function updatescore(score){
    sc.innerHTML= "Your Score :" + score
}