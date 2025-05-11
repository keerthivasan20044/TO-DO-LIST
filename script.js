var inputbox=document.getElementById('input-box');
var list=document.getElementById('list-container');
function addtask(){
    if(inputbox.value ===""){
        alert("write something 😊😊")
    }
    else{
        var items=document.createElement('li')
        items.innerHTML=inputbox.value
    
        list.appendChild(items);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        items.appendChild(span)
    }
    inputbox.value="";
    saveData();
}
list.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML=localStorage.getItem("data")
}
showtask();