// Start Tutorial #10
let text=document.querySelector(".drag .text input");
let boxes=document.querySelectorAll(".drag .boxes .box");
let drag=null;
document.querySelector(".drag .text button").onclick=function(){
    if(text.value!=""){
        let item=document.createElement("p");
        item.textContent=text.value;
        item.setAttribute("draggable","true");
        boxes[0].appendChild(item);
    }
    text.value="";
    text.focus();
    dragItem();
};
function dragItem(){
    let items=document.querySelectorAll(".drag .boxes .box p");
    items.forEach((item)=>{
        item.addEventListener("dragstart",()=>{
            item.style.opacity="0.5";
            drag=item;
        });
        item.addEventListener("dragend",()=>{
            item.style.opacity="1";
            drag=null;
        });
    });
};
boxes.forEach((box)=>{
    box.addEventListener("dragover",(e)=>{
        e.preventDefault();
        box.style.backgroundColor="#a7b423";
    });
    box.addEventListener("dragleave",()=>{
        box.style.backgroundColor="white";
    });
    box.addEventListener("drop",()=>{
        box.appendChild(drag);
        box.style.backgroundColor="white";
    });
});
// End Tutorial #10

// Start Tutorial #16
let skills=document.querySelector(".skills");
let skill=document.querySelectorAll(".skills .skill div span");
window.onscroll=(e)=>{
    if(window.scrollY>=skills.offsetTop){
        skill.forEach((span)=>{
            span.style.width=span.dataset.progress+"%";
        })
    }
}
// End Tutorial #16

// Start Tutorial #17
let inputProgress=document.querySelector(".progress input");
let progress=document.querySelector(".progress span");
let progressNumber=document.querySelector(".progress p");
inputProgress.oninput=()=>{
    progressNumber.innerHTML=35-inputProgress.value.length;
    progress.style.width=(inputProgress.value.length/35)*100+"%";
}
// End Tutorial #17

// Start Tutorial #18
let timer = document.querySelectorAll(".events div span");
let date,newDate;
setInterval(()=>{
    date=new Date;
    newDate=new Date("Dec 31, 2022 23:59:59");
    timer[0].innerHTML=(newDate.getFullYear())-(date.getFullYear());
    timer[1].innerHTML=(newDate.getMonth())-(date.getMonth());
    timer[2].innerHTML=(newDate.getDate())-(date.getDate());
    timer[3].innerHTML=(newDate.getHours())-(date.getHours());
    timer[4].innerHTML=(newDate.getMinutes())-(date.getMinutes());
    timer[5].innerHTML=(newDate.getSeconds())-(date.getSeconds());
    timer.forEach((time)=>{
        time.innerHTML<10? time.innerHTML="0"+time.innerHTML:time.innerHTML=time.innerHTML;
    });
},1000);
// End Tutorial #18

// Start Tutorial #19
let cats=document.querySelectorAll(".portfolio ul li");
let imgs=document.querySelectorAll(".portfolio .port-imgs img");
cats.forEach((cat)=>{
    cat.onclick=(e)=>{
        e.preventDefault();
        cats.forEach((e)=>{
            e.classList.remove("active");
        });
        cat.classList.add("active");
        imgs.forEach((img)=>{
            img.classList[0]==cat.classList[0]?img.style.display="block":img.style.display="none";
            cat.classList[0]=="all"?img.style.display="block":"";
        });
    };
});
// End Tutorial #19

// Start Tutorial #20
let up=document.getElementsByClassName("up")[0];
window.onscroll=()=>{
    if(scrollY>1000){
        up.style.bottom="20px";
    }else{
        up.style.bottom="-100px";
    };
};
up.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
// End Tutorial #20

// Start Tutorial #21
let tabs= document.querySelectorAll(".tabs ul li");
let contents=document.querySelectorAll(".tabs div")
tabs.forEach((tab)=>{
    tab.onclick=()=>{
        tabs.forEach((e)=>{
            e.classList.remove("active");
        });
        tab.classList.add("active");
        contents.forEach((content)=>{
            content.classList.remove("active");
        });
        contents.forEach((content)=>{
            tab.classList[0]==content.dataset.cont?content.classList.add("active"):"";
        })
    }
})
// End Tutorial #21