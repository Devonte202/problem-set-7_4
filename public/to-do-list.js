const incomplete = document.getElementById('incomplete')
const complete = document.getElementById('complete')

window.addEventListener('load', (event) => {
    fetch('/tasks')
    .then(res => res.json())
    .then(tasks => console.log(tasks[0]))
})