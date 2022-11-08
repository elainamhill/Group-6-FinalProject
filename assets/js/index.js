// Test HTML connection
// console.log('JavaScript connected!');

const formTaskManager = new TaskManager();

const validFormFieldInput = () => {

    // Input element variables
    const taskNameInput = document.querySelector('#input_taskName');
    const taskDescriptionInput = document.querySelector('#input_description');
    const taskAssignInput = document.querySelector('#input_assign');
    const taskDueDateInput = document.querySelector('#input_dueDate');

    // Input with value variables
    const name = taskNameInput.value;
    const description = taskDescriptionInput.value;
    const assign = taskAssignInput.value;
    const due = taskDueDateInput.value;

    // Test New Task form input values
    // console.log(typeof name);
    console.log("Task Name: " + name);
    console.log("Description: " + description);
    console.log("Assigned To: " + assign);
    console.log("Due Date: " + due);

    // Form alert appears when field is blank/empty
    const formAlert = document.getElementById("form_alert");
    const form = document.querySelector(".require-valid");

    form.checkValidity();
    form.classList.add('was-validated');

    if(!form.checkValidity()) {
        sendAlert(formAlert);
    } else {
        formTaskManager.addTask(name, description, assign, due);
        console.log(formTaskManager);
        form.classList.remove('was-validated');
        form.reset();
    }

    return false;
}

// Show alert, close after 5 seconds
function sendAlert(alert) {
    alert.style.display = "block";
    setTimeout(() => {alert.style.display = "none"}, 5000);
}