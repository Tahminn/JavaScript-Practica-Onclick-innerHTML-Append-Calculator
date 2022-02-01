let txt = document.getElementById("#id")
let txt = document.getElementsByTagName("h1")
let txts = document.getElementsByClassName("class-name")
let txt = document.querySelector(".classname")
let txts = document.querySelectorAll(".class-name")

for (const item of txts) {
    item.value = ""
}

let btn = document.querySelector(".btn")

btn.onclick = function () {
    alert("Click")
}

btn.addEventListener("click", function(){
    alert("Clicked")
    let p = document.createElement("p")
    let icon = document.createElement("i")
    p.append(icon)

    icon.onclick = function () {
        p.remove();
    }
})