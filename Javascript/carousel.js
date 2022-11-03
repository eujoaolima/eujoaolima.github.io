var balls = document.querySelector(".balls")
var quant = document.querySelectorAll(".slides .images-project")
var image = document.getElementById("atual")
var next = document.getElementById("next")
var back = document.getElementById("back")
var atual = 0
var roll = true

for (let i=0; i < quant.length; i++) {
    var div = document.createElement("div")
    div.id = i 
    balls.appendChild(div) 
}

document.getElementById("0").classList.add("img-atual")

var position = document.querySelectorAll(".balls div")

for (let i=0; i < position.length; i++) {
    position[i].addEventListener("click", () => {
        atual = position[i].id
        roll = false
        slide()
    })
}
    back.addEventListener("click", () => {
        atual--
        roll = false
        slide()
    })

    next.addEventListener("click", () => {
        atual++
        roll = false
        slide()
    })

function slide () {
    if(atual >= quant.length) {
        atual = 0
    }

    else if (atual < 0) {
        atual = quant.length  -1
    }

    document.querySelector(".img-atual").classList.remove("img-atual")
    image.style.marginLeft = -1085 * atual + 'px'
    document.getElementById(atual).classList.add("img-atual")
}

setInterval(() => {
    if (roll = true) {
        atual++ 
        slide()
    }

    else {
        roll = true
    }
}, 4000)

slide()


