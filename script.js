document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');

    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const appointmentInfo = `Name: ${name} - Email: ${email} - Date: ${date} - Time: ${time}`;
        alert(`Appointment scheduled!\n${appointmentInfo}`);
        clearForm();
    });

    function clearForm() {
        appointmentForm.reset();
    }
});