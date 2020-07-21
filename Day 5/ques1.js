let arr = []

function createArray(num) {


    for (i = 1; i <= num; i++) {
        arr.push(i)

    }
    document.getElementById('ques1array').innerHTML = arr
}

function showOddandCube(arr) {

    if (arr == '') {
        alert('Create an array first')
    } else {
        let oddArray = arr.filter(num => num % 2 != 0)
        document.getElementById('odd').innerText = oddArray

        let cubeArray = oddArray.map((e => (e ** 3)))

        document.getElementById('cube').innerText = cubeArray
    }



}

// function showCubes(arr) {
//     let cubeArray = 
// }


function checkNum() {
    let num = Number(document.getElementById('ques1input').value)

    if (num <= 0 || num == '') {
        alert('Enter a positive number')
    } else {
        createArray(num)
    }


}
