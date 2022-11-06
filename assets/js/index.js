// Test HTML connection
// console.log('JavaScript connected!');

const validFormFieldInput = () => {

    const taskNameInput = document.querySelector('#input_taskName');
    const taskDescriptionInput = document.querySelector('#input_description');
    const taskAssignInput = document.querySelector('#input_assign');
    const taskDueDateInput = document.querySelector('#input_dueDate');

    const name = taskNameInput.value;
    const description = taskDescriptionInput.value;
    const assign = taskAssignInput.value;
    const due = taskDueDateInput.value;

    // Test New Task form input values
    console.log("Task Name: " + name);
    console.log(typeof name);
    console.log("Description: " + description);
    console.log("Assigned To: " + assign);
    console.log("Due Date: " + due);

    // Form alert appears when field is:
    // - left blank/empty
    let formAlert = document.getElementById("form_alert");

    if (name === "") {
        formAlert.style.display = "block";
        formAlert.innerHTML = "Submission error: task name required! Please correct and submit to continue.";
        return false;
    }

    if (description === "") {
        formAlert.style.display = "block";
        formAlert.innerHTML = "Submission error: task description required! Please correct and submit to continue.";
        return false;
    }

    if (assign === "") {
        formAlert.style.display = "block";
        formAlert.innerHTML = "Submission error: task assignment required! Please correct and submit to continue.";
        return false;
    }

    if (due === "") {
        formAlert.style.display = "block";
        formAlert.innerHTML = "Submission error: task due date required! Please correct and submit to continue.";
        return false;
    }

    formAlert.style.display = "none";
    return true;
}
