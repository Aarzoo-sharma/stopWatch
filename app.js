const btn1 = document.getElementById("btn1"); // lap or reset button
const btn2 = document.getElementById("btn2"); // reset button
const btn3 = document.getElementById("btn3"); // start button
const btn4 = document.getElementById("btn4"); // stop button
const text1 = document.getElementById("time"); // time label

btn1.addEventListener("click", lap);
btn2.addEventListener("click", reset);
btn3.addEventListener("click", start);
btn4.addEventListener("click", pause);

var ms = 0,id,lapNo = 0,hh=0,mm=0,ss=0;

function start() {
  btn1.style.display = "unset";
  btn2.style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "unset";

  btn1.removeAttribute("disabled");
  id = setInterval(function () {
    ms=ms+10;
    if(ms>999)
    {
      ms=0;
      ss=ss+1;
    }
    if(ss>60)
    {
      ss=0;
      mm=mm+1;
    }
    if(mm>60)
    {
      mm=0;
      hh=hh+1;
    }

    if(ss<9)
    {
      sss="0"+ss;
    }
    else
    sss=ss;
    if(mm<9)
    {
      mmm="0"+mm;
    }
    else
    mmm=mm;
    if(hh<9)
    {
      hhh="0"+hh;  
    }
    else
    hhh=hh;
    str = hhh + ":" + mmm + ":" + sss + ":" + ms;
    text1.innerText = str;
  }, 10);
}

function pause() {
  btn1.style.display = "none";
  btn2.style.display = "unset";
  btn3.style.display = "unset";
  btn4.style.display = "none";
  clearInterval(id);
}

function reset() {
  btn1.style.display = "unset";
  btn2.style.display = "none";
  btn3.style.display = "unset";
  btn4.style.display = "none";
  btn1.setAttribute("disabled", "true");

  text1.innerText = "00:00:00:00";
  hh = mm = ss = ms = lapNo = 0;

  document.getElementById("list").innerHTML = null;
}

function lap() {
  lapNo = lapNo + 1;
  const parentElement = document.getElementById("list");

  if (lapNo > 1) parentElement.lastChild.children[1].classList.remove("active");

  const ele = document.createElement("li");
  ele.classList.add("list-item");
  parentElement.appendChild(ele);

  const span1 = document.createElement("span");
  span1.innerText = "Lap" + lapNo;
  ele.appendChild(span1);

  const span2 = document.createElement("span");
  span2.classList.add("active");
  span2.innerText = hh + ":" + mm + ":" + ss + ":" + ms;
  ele.appendChild(span2);
}
