
let name = prompt('Please enter your name')

let showName = document.getElementById('showname')

if (name != '') {
    showName.innerHTML = `Welcome ${name}.`
} else {
    alert('Enter name')

}


function clock() {
    let date = new Date()
    let time = date.toLocaleTimeString()
    ctimer = document.getElementById('timer')
    ctimer.innerText = time

}

clock()
setInterval(clock, 1000)

const body = document.getElementById('ques3body')

const darkmode = document.getElementById('darkmode')


function switchtoDark() {

    body.classList.toggle("dark-mode")

}

darkmode.onclick = switchtoDark

