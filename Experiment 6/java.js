let heading = document.getElementById("heading");
let input = document.getElementById("inputtext");
let para = document.getElementById("para");

document.getElementById("changeTextBtn").onclick = function() {
    heading.innerText = input.value;
};

input.onchange = function() {
    console.log("Input changed");
};

document.getElementById("bgColorBtn")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

document.getElementById("fontsizeBtn")
.addEventListener("click", function() {
    para.style.fontSize = "30px";
}); 