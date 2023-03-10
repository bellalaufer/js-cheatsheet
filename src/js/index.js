document?.addEventListener('DOMContentLoaded', function () {
    let options = {
        constrainWidth: false,
        hover: false,
        coverTrigger: false,
    }

    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems, options);
});

document?.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => renderJoke(data))
        .catch(() => renderError());
});

function renderJoke(data) {
    const setup = document.querySelector(".setup");
    const punchline = document.querySelector(".punchline");
    const error = document.querySelector(".error");

    error.innerHTML = "";
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
}

function renderError() {
    const error = document.querySelector(".error");
    error.innerHTML = "Всё сломалось, сами шутите шутки.";
}