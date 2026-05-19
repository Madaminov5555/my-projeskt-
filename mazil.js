function basketOpen() {
    document.getElementById("modal").classList.add("active");
}

function basketClosse() {
    document.getElementById("modal").classList.remove("active");
}

function basket1(btn) {
    let box = btn.parentElement;

    let img = box.querySelector("img").src;
    let name = box.querySelector("h1").innerText;

    let ul = document.querySelector(".bosket-el");

    let li = document.createElement("li");

    li.innerHTML = `
        <img src="${img}" width="50">
        <div>
            <h4>${name}</h4>
        </div>
    `;

    ul.appendChild(li);
}