const btnCheck = document.querySelector("#checkbox");

btnCheck.addEventListener('change', () => {
    const body = document.body;
    const ball = document.querySelector(".ball");
    localStorage.setItem("theme", null);

    body.classList.toggle("dark");

    ball.style.transition = "transform .2s linear";

    if(body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
});

window.onload = () => {
    const temaAtual = localStorage.getItem("theme");
    const ball = document.querySelector(".ball");

    if(temaAtual === "dark") {
        const body = document.body;
        body.classList.add("dark");
        
        document.querySelector("#checkbox").checked = true;


        return;
    }
}