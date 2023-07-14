const inbox=document.getElementById("inbox");
const list_container=document.getElementById("Listcon");

function AddTask(){
    if(inbox.value===''){
        alert("You must write something!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inbox.value;
        list_container.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inbox.value="";
    saveData();
     
}

list_container.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", Listcon.innerHtml)
}
function showTask(){
    Listcon.innerHTML=localStorage.getItem("data");

}
showTask();
