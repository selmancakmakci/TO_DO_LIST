function addTask(){
    var list = document.getElementById('list');
    var currentTasks = list.getElementsByTagName('li').length;

    if(currentTasks >= 10) {
        alert("You can add max 10 task!");
        return;
    }


    var todoText = document.getElementById("inputToDo").value;
    if(!todoText) {
        alert("Please! Enter Text.")
        return;
    }
    var listItem = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = "checkbox";
    var label = document.createElement('label');
    label.textContent = todoText;

    

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
   
    document.getElementById('list').appendChild(listItem);

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            listItem.classList.add('completed');
        
        } else {
            listItem.classList.remove('completed');
        }
    })

    
};

function clearChecked(){
    var list = document.getElementById('list');
    var checkboxes = list.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            var listItem = checkbox.parentElement;
            list.removeChild(listItem);
        }
    });
}


function clearAll(){

    var todoText = document.getElementById("list");
    todoText.innerHTML = "";
}

