var inputTxt = document.querySelector('input');
var addButton = document.querySelector("#add");

function deleteItem(e) {
    e.target.parentNode.parentNode.remove();
}


function doneItem(e) {
    e.target.parentNode.classList.add('task-done');
    e.target.classList.add('disable');
}

function addItem() {
    var list = document.querySelector('.list');

    var listItem = document.createElement("li");  

    var task = document.createElement('div');
    task.setAttribute("class", 'task');

    var currentTask = document.createElement('div');
    currentTask.setAttribute('class', "current-task");
    currentTask.textContent = inputTxt.value;

    var done = document.createElement('div');
    done.setAttribute("id", 'done');
    done.textContent = "Done";
    done.addEventListener('click', function(e) {
        doneItem(e);
    })

    var del = document.createElement('div');
    del.setAttribute('id', "delete");
    del.textContent = 'Delete';
    del.addEventListener('click', function(e) {
        deleteItem(e);
    })


    var childs = [currentTask, done , del];

    for (var i = 0; i < childs.length; i++) {
        task.appendChild(childs[i]);
    }

    listItem.appendChild(task);
    list.appendChild(listItem);

    inputTxt.value = "";
}

addButton.addEventListener("click", addItem);