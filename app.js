const btn1=document.getElementById("btn1");// lap or reset button
const btn2=document.getElementById("btn2");// reset button
const btn3=document.getElementById("btn3");// start button
const btn4=document.getElementById("btn4");// stop button
const text1=document.getElementById("time");// time label

btn1.addEventListener('click',lap);
btn2.addEventListener('click',reset);
btn3.addEventListener('click',start);
btn4.addEventListener('click',pause);

var ms=0, id,lapNo=0, hh, mm, ss;

function start(){
    btn1.style.display="unset";
    btn2.style.display="none";
    btn3.style.display="none";
    btn4.style.display="unset";
    
    btn1.removeAttribute("disabled");
    id=setInterval(function(){        
        ss=parseInt(ms/100);
        mm=parseInt(ss/60);
        hh=parseInt(mm/60);
        if(ss<10)
        ss="0"+ss;
        if(mm<10)
        mm="0"+mm;
        if(hh<10)
        hh="0"+hh;
        let str=hh+":"+mm+":"+ss+":"+ms;
        text1.innerText=str;
        ms++;
    },10);
}
function pause(){
    btn1.style.display="none";
    btn2.style.display="unset";
    btn3.style.display="unset";
    btn4.style.display="none";
    clearInterval(id);
}
function reset()
{
    btn1.style.display="unset";
    btn2.style.display="none";
    btn3.style.display="unset";
    btn4.style.display="none";
    btn1.setAttribute("disabled","true");

    text1.innerText="00:00:00:00";
    hh=mm=ss=ms=0;
    lapNo=0;

    document.getElementById("list").innerHTML=null;  
}
function lap(){
    lapNo=lapNo+1;
    const parentElement=document.getElementById('list');
    
    if(lapNo>1)
    parentElement.lastChild.children[1].classList.remove('active');

    const ele=document.createElement('li');
    ele.classList.add('list-item');
    parentElement.appendChild(ele);

    const span1=document.createElement('span');
    span1.innerText="Lap" + lapNo;
    ele.appendChild(span1);

    const span2=document.createElement('span');
    span2.classList.add('active');
    span2.innerText=hh+":"+mm+":"+ss+":"+ms;
    ele.appendChild(span2);
}