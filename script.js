const title = document.querySelector(".title")
const author = document.querySelector(".author")
const color = document.querySelector(".color")
const addBtn = document.querySelector("button")
const table = document.querySelector("tbody")
let count = 0

const check = () =>{
    title.value && author.value && color.value ? addBtn.disabled = false : addBtn.disabled = true
}

title.addEventListener('input', check)
author.addEventListener('input', check)
color.addEventListener('input', check)

addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    count++
    const type = document.querySelector("input[type = 'radio']:checked")
    
    if(type){
        table.innerHTML += `
        <tr style='background: ${color.value}'>
            <td>${count}</td>
            <td>${title.value}</td>
            <td>${author.value}</td>
            <td>${type.value}</td>
        </tr>
    `   
    }

    title.value = ''
    author.value = ''
    color.value = ''
    type.checked = false
})