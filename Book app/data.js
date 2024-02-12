//select popup overlay,box and add button by id
var popupoverlay = document.getElementById("overlay")
var popupbox = document.getElementById("box")
var addpopup = document.getElementById("plusbtn")

function showbox(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
}

//select cancel button by id
var cancelpopup = document.getElementById("cancelbtn")

function canc(event){
    cancelpopup = event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
}

//select container, add button, inputtitle, inputname, inputtextarea
var containers = document.getElementById("boxer")
var addbutton = document.getElementById("addbtn")
var title = document.getElementById("inputtitle")
var names = document.getElementById("inputname")
var textarea = document.getElementById("inputtextarea")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${title.value}</h2>
    <h4>${names.value}</h4>
    <p>${textarea.value}</p>
    <button>Delete</button>`
    containers.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
