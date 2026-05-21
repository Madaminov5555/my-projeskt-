const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const ism = document.getElementById("ism").value;
    const manzil = document.getElementById("manzil").value;
    const email = document.getElementById("email").value;

    if (ism === "" || manzil === "" || email === "") {

        alert("Inputlarni to‘ldiring!");

    } else {

        window.location.href = "./a.html";

    }

});