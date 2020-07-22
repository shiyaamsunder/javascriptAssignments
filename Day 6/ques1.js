let colors = ['red', 'blue', 'yellow', 'orange', 'pink', 'grey', 'green']

let i = 0

const changeColorbtn = document.getElementById('changeColor')

changeColorbtn.onclick =

    function changeBg() {
        setInterval(function changeColor() {
            document.body.style.backgroundColor = colors[i]
            i++

            if (i > colors.length) {
                document.body.style.backgroundColor = 'white'
            }
        }, 5000)
    }