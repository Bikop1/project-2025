function find_edit() {
    const secondName_node = document.getElementById('second_name')
    secondName_node.innerHTML = "<b>Omelchenko</b>"
    const firstName_node = document.getElementById('first_name')
    firstName_node.innerHTML = "<b>Nikita</b>"
    const thirdName_node = document.getElementById('third_name')
    thirdName_node.innerHTML = "<b>Vadimovich</b>"
}

const node_for_click = document.getElementById("knopka")
node_for_click.addEventListener("click", find_edit)
