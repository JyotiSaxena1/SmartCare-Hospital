// Select inputs
const nameInput = document.querySelector("input[placeholder='Full Name']");
const phoneInput = document.querySelector("input[placeholder='Phone Number']");
const deptSelect = document.querySelector("select:nth-of-type(1)");
const doctorSelect = document.querySelector("select:nth-of-type(2)");
const dateInput = document.querySelector("input[type='date']");
const timeInput = document.querySelector("input[type='time']");
const submitBtn = document.querySelector(".btn");

// On Submit
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        nameInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        deptSelect.value === "" ||
        doctorSelect.value === "" ||
        dateInput.value === "" ||
        timeInput.value === ""
    ) {
        alert("Please fill all fields before submitting.");
        return;
    }

    // Success alert
    alert(
        "Appointment Booked Successfully!\n\n" +
        "Name: " + nameInput.value + "\n" +
        "Department: " + deptSelect.value + "\n" +
        "Doctor: " + doctorSelect.value + "\n" +
        "Date: " + dateInput.value + "\n" +
        "Time: " + timeInput.value
    );

    // Optional: Reset form
    nameInput.value = "";
    phoneInput.value = "";
    deptSelect.value = "";
    doctorSelect.value = "";
    dateInput.value = "";
    timeInput.value = "";
});
