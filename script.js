const form = document.getElementById('form'),
    email = form.elements["email"];

form.addEventListener('submit', e => {
    e.preventDefault();

    email.value = email.value.trim();

    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(email.value === '' || !regex.test(email.value))
    {
        showAlert();
        return;
    }

    removeExistingAlert();
});

function showAlert(){
    removeExistingAlert();

    const messageElement = document.createElement('p');
    messageElement.className = "error";
    messageElement.textContent = "Please provide a valid email address";

    email.insertAdjacentElement('afterend', messageElement);
    email.classList.add('input-invalid');
}

function removeExistingAlert(){
    const existingMessage = form.querySelector('.error');

    if(existingMessage)
        existingMessage.remove();

    email.classList.remove('input-invalid');
}
