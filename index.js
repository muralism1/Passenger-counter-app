let count = 0
let countEl = document.getElementById("count-el")
let saveEl1 = document.getElementById("save-el")

function increament(){
    count += 1
    countEl.textContent = count
}


function save(){
    let counStr = count + " -  "
    saveEl1.textContent += counStr
    count = 0 
    countEl.textContent=count
}