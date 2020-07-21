
async function fetchCompletedTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await response.json()

    for (i = 0; i < data.length; i++) {
        if (data[i].completed == true) {
            console.log(data[i])
        }
    }


}






