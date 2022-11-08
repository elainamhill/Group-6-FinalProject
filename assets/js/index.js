// Test HTML connection
// console.log('JavaScript connected!');

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
        return false;
    }

    /* 
    if (name === "") {
        formAlert.style.display = "block";
        return false;
    }

    if (description === "") {
        formAlert.style.display = "block";
        return false;
    }

    if (assign === "") {
        formAlert.style.display = "block";
        return false;
    }

    if (due === "") {
        formAlert.style.display = "block";
        return false;
    } */

    formAlert.style.display = "none";
    return true;
}

// Show alert, close after 5 seconds
function sendAlert(alert) {
    alert.style.display = "block";
    setTimeout(() => {alert.style.display = "none"}, 5000);
}

const testTaskManager = new TaskManager();
console.log(testTaskManager);

testTaskManager.addTask('Dishes', 'Do them and put them away', 'Me', '2022-11-10T14:10');
console.log(testTaskManager);