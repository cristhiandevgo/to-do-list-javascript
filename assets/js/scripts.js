var form = document.querySelector("#task_form");


form.onsubmit = (e) => {
    e.preventDefault();

    var task = document.querySelector(".typed_task");

    add_new_task(task.value);
    form.reset();
}

function add_new_task(new_task_typed){
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    var new_task_element = document.querySelector(".new_task");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", new_task_typed);
    checkbox.setAttribute("id", new_task_typed);

    label.setAttribute("for", new_task_typed);
    label.appendChild(document.createTextNode(new_task_typed));

    div.setAttribute("class", new_task_typed);

    div.appendChild(checkbox);
    div.appendChild(label);

    new_task_element.appendChild(div);
}