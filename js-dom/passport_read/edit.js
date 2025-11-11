function find_edit() {
    const secondName_node = document.getElementById('secondName')
    secondName_node.innerHTML = "<b>Omeclchenko</b>"
    const firstName_node = document.getElementById('firstName')
    firstName_node.innerHTML = "<b>Nikita</b>"
    const year_node = document.getElementById('year')
    year_node.innerHTML = "<b>2006</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", find_edit)
