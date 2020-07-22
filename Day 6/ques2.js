
const q2btn = document.getElementById('q2btn')

let list = document.getElementById('list')

function createTables(num) {

    list.innerHTML = ''
    for (i = 1; i <= 10; i++) {
        list.innerHTML += `<li> ${num} x ${i} = ${num * i} </li>`
    }

}

function showTables() {
    const num = document.getElementById('ques2Input').value

    if (num <= 0 || num == '') {
        alert('Enter a positive number')
    } else {
        createTables(num)
    }

}
q2btn.onclick = showTables