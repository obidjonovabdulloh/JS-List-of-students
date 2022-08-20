const formElement = document.querySelector("#form")
const nameElement = document.querySelector(".name_element")
const ageElement = document.querySelector(".age_element")
const selectElement = document.querySelector("#select_element")
const deleteModal = new bootstrap.Modal(document.getElementById("staticBackdrop"))
const deleteButtonElement = document.querySelector("#deleteButton")

let deleteElement;
let openContextMenu = false


formElement.addEventListener("submit" , event => {
    event.preventDefault()
    console.log(nameElement.value , ageElement.value , selectElement.value);
    deleteModal.show()

    const newtrElement = document.createElement("tr")
    const newNametrElement = document.createElement("td")
    const newAgetrElement = document.createElement("td")
    const newJobtrElement = document.createElement("td")

    newNametrElement.textContent = nameElement.value
    newAgetrElement.textContent = ageElement.value
    newJobtrElement.textContent = selectElement.value

    newtrElement.appendChild(newNametrElement)
    newtrElement.appendChild(newAgetrElement)
    newtrElement.appendChild(newJobtrElement)
    tbody.prepend(newtrElement)
    event.target.reset()

    newtrElement.addEventListener("contextmenu" , event => {
        event.preventDefault()
        deleteElement = newtrElement
        deleteModal.show()
    })


    deleteButtonElement.addEventListener("click" , event => {
        deleteModal.hide()
        newtrElement.remove()
    })
})

window.addEventListener("contextmenu" , event => {
    event.preventDefault()
    openContextMenu = true
    console.log(event);
    context.style.display = "block"
    context.style.top = mouseY(event) + "px"
    context.style.left = mouseX(event) + "px"
})

window.addEventListener("click" , event =>{
    if(openContextMenu) {
        context.style.display= "none"
    }
})
function mouseX(evt) {
    if (evt.pageX) {
      return evt.pageX;
    } else if (evt.clientX) {
      return evt.clientX + (document.documentElement.scrollLeft ?
        document.documentElement.scrollLeft :
        document.body.scrollLeft);
    } else {
      return null;
    }
  }
  
  function mouseY(evt) {
    if (evt.pageY) {
      return evt.pageY;
    } else if (evt.clientY) {
      return evt.clientY + (document.documentElement.scrollTop ?
        document.documentElement.scrollTop :
        document.body.scrollTop);
    } else {
      return null;
    }
  }