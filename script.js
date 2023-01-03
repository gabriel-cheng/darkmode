const btnCheck = document.querySelector("#checkbox");

btnCheck.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});