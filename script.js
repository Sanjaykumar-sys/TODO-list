// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        
        // Mark task as completed when clicked
        li.onclick = function () {
            li.classList.toggle('completed');
        };

        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!');
    }
}


