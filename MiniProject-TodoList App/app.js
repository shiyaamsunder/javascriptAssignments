// (function(){


// }())

var todoBtn = document.getElementById('todo-btn')
var todoInput = document.getElementById('todo-input')
var todoList = document.getElementById('todo-list')

var allTodos = document.getElementsByTagName('li')
console.log(allTodos.item);

function addTodo() {
    todoText = todoInput.value

    todoText == "" ? alert('Enter a todo') :
        todoListItem = document.createElement('li')

    //text node
    todoTextnode = document.createTextNode(todoText)
    todoListItem.appendChild(todoTextnode)

    todoList.appendChild(todoListItem)
    storeData()
    todoInput.value = ''

}



todoBtn.addEventListener('click', addTodo)

todoList.addEventListener('click', function (e) {
    var t = e.target;
    t.parentNode.removeChild(t)
    storeData()
})

function storeData() {
    window.localStorage.allTodos = todoList.innerHTML
}

function fetchTodos() {
    var storedTodos = window.localStorage.allTodos
    if (!storedTodos) {
        todoList.innerHTML = "<li>Buy Milk</li>";
    } else {

        todoList.innerHTML = storedTodos


    }
}

fetchTodos()