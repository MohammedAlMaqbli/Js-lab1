let btn = document.getElementById('btn')
let input = document.getElementById('input')
let list = document.getElementById('list')

btn.addEventListener('click', function () {
    if (input.value !== '') {
        let newListItem = document.createElement('li')
        newListItem.innerHTML = input.value
        list.appendChild(newListItem)
        input.value = ''
        input.focus()
    }
})