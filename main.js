const Input = document.querySelector("#Input")
const Sumbit = document.querySelector('#sumbit')
const todoList = document.querySelector('.todo-list')


const todoListFunc = () => {
    if(Input.value.trim() !== "") {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        div.setAttribute("class", "block") // first type

        const commonBtn = document.createElement('div')  // second type
        const incrementBtn = document.createElement('button')
        const decrementBtn = document.createElement('button')
        
        commonBtn.setAttribute("class", "commonButtons")  // thitd type
        incrementBtn.setAttribute("class", "increment")
        decrementBtn.setAttribute("class", "decrement")

        incrementBtn.innerHTML = 'edit'
        decrementBtn.innerHTML = 'delete'

        commonBtn.append(incrementBtn,decrementBtn)

        decrementBtn.onclick = () => div.remove()

        incrementBtn.addEventListener("click", () => {
            const newText = prompt(`Edit text: ${text.innerHTML}`).trim()
            if(newText === '') {
                return false 
            } else {
            text.innerHTML = newText
            }
        })

        text.innerHTML = Input.value
        div.append(text, commonBtn)
        todoList.prepend(div)
    }
    return Input.value = ''
}


Sumbit.addEventListener('click', () => {
    todoListFunc()
})

window.addEventListener("keydown", (event) => {
    if(event.keyCode === 13) {
        todoListFunc()
    }
})