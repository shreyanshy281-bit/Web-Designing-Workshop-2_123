let taskcount=0;
function addTask(){
    let taskText=InputDeviceInfo.value.trim();
    if(taskText===" ") return;
    let li=document.createElement("li");
    li.innerHTML=
    ${taskText}
    <button class="delete"> X </button>;
    FileList.appendChild(li);
    taskText++;
    count.innerText=taskcount;
    input value=" ";
}
FileList.addEventlistner("click" function(e)){
    if(e.target classlist.contrain("delete")){
        target present.Element.remove
    }
}
