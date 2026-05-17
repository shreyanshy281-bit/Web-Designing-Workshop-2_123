let heading = document.getElementById("heading");
let input = document.getElementById("inputtext");
let para = document.getElementById("para");

document.getElementById("changeTextBtn").onclick = function(){


heading.innerText = input.value;
};
input.onchange =function(){
    console.log("Inputchange");
}

document.getElementById("bgColorBtn").
addEventListener("click",function()){
    document.body.style.backgroundColor ="lightblue";
});


document.getElementById("fontsizeBtn").
addEventListener("click")




