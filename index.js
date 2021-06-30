const form =  document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const input = document.querySelector('input');
    const message = btoa(input.value); //Bit64 method
    input.value = '';

    document.getElementById('secureURL')
        .value = `${window.location}#${message}`;
});