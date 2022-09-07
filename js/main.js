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