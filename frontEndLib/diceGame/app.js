const p1=document.getElementById('player1');
const p2=document.getElementById('player2');
const head1=document.getElementById('h1');
const head2=document.getElementById('h2');
const score1=document.getElementById('score1');
const score2=document.getElementById('score2');
const btn1=document.getElementById('dice');
const btn2=document.getElementById('hold');
const imgs=document.getElementsByTagName('img');
const winner=document.getElementById('win');
const btn3=document.getElementById('newgame');


let trans;

btn1.addEventListener('click', ()=>{
    let calc= Math.floor(Math.random()*6)+1;
    console.log(calc)
    for(const i of imgs){
        i.style.display='none';
    }
    if(calc==1){
        imgs[calc-1].style.display='block';
        p1.classList.toggle('activeUser');
        p2.classList.toggle('activeUser');

    }else{
        imgs[calc-1].style.display='block';
    }
    trans=calc;
})
btn2.addEventListener('click',()=>{
    let calc= trans
    if(p1.classList.contains('activeUser')){
        score1.innerHTML=Number(score1.innerHTML)+calc;
        if(score1.innerHTML>=100){
            winner.style.display='block';
            winner.innerHTML=`${head1.innerText} WON`;
            winner.classList.add('appear');
            btn2.setAttribute('disabled',true)
        }else{
            if(p1.classList.contains('activeUser')){
                p1.classList.remove('activeUser')
            }else{
                p1.classList.add('activeUser')
            }
            if(p2.classList.contains('activeUser')){
                p2.classList.remove('activeUser')
            }else{
                p2.classList.add('activeUser')
            }
        }

    }else{
        score2.innerHTML=Number(score2.innerHTML)+calc;
        if(score2.innerHTML>=100){
            winner.style.display='block';
            winner.innerHTML=`${head2.innerText} WON`;
            winner.classList.add('appear');
            btn2.setAttribute('disabled',true)
        }else{
            if(p1.classList.contains('activeUser')){
                p1.classList.remove('activeUser')
            }else{
                p1.classList.add('activeUser')
            }
            if(p2.classList.contains('activeUser')){
                p2.classList.remove('activeUser')
            }else{
                p2.classList.add('activeUser')
            }
        }
        
    }
})

btn3.addEventListener('click',()=>{
    history.go();
})