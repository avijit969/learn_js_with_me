const mobile = document.getElementById("mobile")
mobile.addEventListener("click", () => {
    console.log("clicked")
    alert("clicked")
})

const bg = document.getElementsByTagName("h1")[2]
bg.addEventListener("click", changeBgColor)

function changeBgColor() {
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = "red"
}

const name = document.getElementById("name")
document.getElementById("submit").addEventListener("click", () => {
    const p = document.createElement("p").innerHTML = "Hello " + name.value
    document.getElementById("output").replaceChildren(p)
})
